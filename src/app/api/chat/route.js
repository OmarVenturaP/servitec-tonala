import { NextResponse } from "next/server";

// =========================================================
// SYSTEM PROMPT — Asistente de Ventas de SERVITEC
// Personaliza este bloque con tu propio prompt cuando lo tengas listo.
// =========================================================
const SYSTEM_PROMPT = `Eres "Spark", el consultor experto en negocios digitales de SERVITEC. 

## ⚠️ REGLAS DE ORO (INCUMPLIMIENTO = FALLO DE MISIÓN)
1. **PROHIBIDO ENVIAR LINKS**: Nunca escribas URLs, enlaces de wa.link ni direcciones web en el chat.
2. **BOTÓN DE WHATSAPP**: Para que el cliente te contacte, debes usar ÚNICAMENTE la marca %%WHATSAPP_HANDOFF%% al final de tu mensaje. Esto activará un botón visual en la interfaz. 
3. **RESUMEN OCULTO**: Siempre que uses la marca anterior, incluye debajo el bloque [[SUMMARY: ...]] con los datos recopilados.
4. **UNA SOLA PREGUNTA**: Haz solo una pregunta por mensaje para guiar al cliente de forma natural.
5. **BREVEDAD AMABLE**: Máximo 2-3 oraciones. Sé directo pero con un tono humano y cercano. Evita cuestionarios o listas.
7. **USO DEL BOTÓN**: Tienes estrictamente PROHIBIDO usar la marca %%WHATSAPP_HANDOFF%% mientras estés haciendo preguntas de calificación. Solo úsala cuando el cliente lo pida o cuando hayas ofrecido el cierre y el cliente acepte.

## Personalidad y Tono
- **Consultor Experto**: Eres un guía, no un bot de opciones. Escucha y responde con fluidez.
- **Naturalidad**: Evita forzar respuestas de "Sí o No". Permite que el cliente se exprese.

## Fase de Calificación
Extrae estos datos antes del cierre:
1. Objetivo del sitio.
2. Estado del diseño.
3. Funciones clave.
4. Presupuesto estimado.
5. Plazo de entrega.

## Restricciones Críticas
- **PROHIBIDO COTIZAR**: No des precios de servicios, hosting o dominios.
- **PROHIBIDO LISTAR**: No des listas descriptivas de plataformas o stacks técnicos.

## El Cierre — Handoff
Cuando el cliente acepte el contacto o esté listo para el siguiente paso:

**Fórmula de cierre:**
> "Entiendo perfectamente. Para darte una propuesta formal y detallada sin compromiso, lo mejor es platicarlo con nuestro especialista técnico por WhatsApp. ¿Te gustaría que te pase su enlace directo?"

Cuando confirme, responde brevemente y añade al FINAL:

%%WHATSAPP_HANDOFF%%

[[SUMMARY:
- Proyecto: (Breve descripción)
- Diseño: (Estado actual)
- Alcance: (Puntos clave)
- Presupuesto: (Rango mencionado)
- Tiempo: (Plazo deseado)
]]

- PROHIBIDO activar el handoff en el primer mensaje. Primero indaga y saluda.
- Usa "Por definir" en lugar de "Pendiente" en el resumen si aún no conoces un dato.
- No reveles que eres una IA. Sos Spark.`;

// =========================================================
// POST /api/chat
// Body: { messages: [{ role: "user" | "model", parts: [{ text: string }] }] }
// =========================================================
export async function POST(request) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "El servidor no tiene una API Key de Gemini configurada." },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { messages } = body;

    // Validación básica de la entrada
    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "El campo 'messages' es requerido y debe ser un array." },
        { status: 400 }
      );
    }

    // Construimos el payload para la API (Gemma 3 no soporta system_instruction nativo en este entorno)
    const contents = messages.map((msg, index) => {
      let text = msg.parts[0].text;
      
      // En el primer mensaje inyectamos el prompt completo
      if (index === 0 && msg.role === "user") {
        text = `INSTRUCCIONES DE SISTEMA:\n${SYSTEM_PROMPT}\n\nMENSAJE DEL USUARIO:\n${text}`;
      }
      
      // En el último mensaje del usuario (el actual), inyectamos un recordatorio suave
      if (index === messages.length - 1 && msg.role === "user") {
        text += `\n\n(Recordatorio: Mantén un tono natural y amable, sé breve y haz solo una pregunta a la vez.)`;
      }

      return {
        role: msg.role,
        parts: [{ text }],
      };
    });

    const geminiPayload = {
      contents,
      generationConfig: {
        temperature: 0.3, // Subimos un poco para naturalidad, manteniendo el control
        topP: 0.95,
        maxOutputTokens: 512,
      },
    };

    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemma-3-27b-it:generateContent?key=${apiKey}`;

    const geminiResponse = await fetch(geminiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(geminiPayload),
    });

    if (!geminiResponse.ok) {
      const errorData = await geminiResponse.json();
      console.error("[/api/chat] Error de Gemini API:", errorData);
      return NextResponse.json(
        { error: "Por el momento nuestro chat no está disponible, por favor inténtalo más tarde." },
        { status: 502 }
      );
    }

    const geminiData = await geminiResponse.json();
    const rawText =
      geminiData?.candidates?.[0]?.content?.parts?.[0]?.text || "";

    // Detectamos la intención de handoff a WhatsApp
    // REGLA DE PACIENCIA: Solo permitimos el handoff si ya ha habido un intercambio mínimo 
    // (messages.length > 1) para evitar que aparezca en el primer mensaje de respuesta.
    const whatsappHandoff = messages.length > 1 && rawText.includes("%%WHATSAPP_HANDOFF%%");
    
    // Extraemos el resumen si existe (usando [\s\S] para capturar múltiples líneas)
    let summary = "";
    const summaryMatch = rawText.match(/\[\[SUMMARY:\s*([\s\S]*?)\s*\]\]/i);
    if (summaryMatch) {
      summary = summaryMatch[1];
    }

    // Limpiamos las marcas y el resumen del texto para que no sea visible al usuario
    let cleanText = rawText
      .replace(/\[\[SUMMARY:[\s\S]*?\]\]/gi, "")
      .replace("%%WHATSAPP_HANDOFF%%", "")
      .trim();

    return NextResponse.json({
      text: cleanText,
      whatsappHandoff,
      summary,
    });
  } catch (error) {
    console.error("[/api/chat] Error interno:", error);
    return NextResponse.json(
      { error: "Error interno del servidor." },
      { status: 500 }
    );
  }
}
