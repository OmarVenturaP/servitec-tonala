"use client";

import { useState, useRef, useEffect, useCallback } from "react";

// =========================================================
// Constantes — ajusta el número de WhatsApp aquí
// =========================================================
const WHATSAPP_NUMBER = "5219619326182"; // ← Reemplaza con tu número real
const WHATSAPP_BASE_MESSAGE =
  "Hola, me interesa desarrollar un proyecto con SERVITEC. Vengo del chat de su sitio web.";

// Mensaje de bienvenida inicial — no se envía a la API
const INITIAL_MESSAGE = {
  role: "model",
  parts: [
    {
      text: "¡Hola! 👋 Soy **Spark**, tu asesor digital de SERVITEC. ¿En qué puedo ayudarte hoy? Cuéntame sobre tu negocio o el proyecto que tienes en mente. 🚀",
    },
  ],
};

// =========================================================
// Utilidad: Render de markdown mínimo (negrita e italics)
// =========================================================
function renderMarkdown(text) {
  const parts = [];
  let remaining = text;
  let key = 0;

  while (remaining.length > 0) {
    const boldMatch = remaining.match(/\*\*(.+?)\*\*/);
    if (boldMatch) {
      const before = remaining.slice(0, boldMatch.index);
      if (before) parts.push(<span key={key++}>{before}</span>);
      parts.push(<strong key={key++} className="font-semibold text-[#4cfdfd]">{boldMatch[1]}</strong>);
      remaining = remaining.slice(boldMatch.index + boldMatch[0].length);
      continue;
    }
    parts.push(<span key={key++}>{remaining}</span>);
    break;
  }
  return parts;
}

// =========================================================
// Sub-componentes
// =========================================================

function TypingIndicator() {
  return (
    <div className="flex items-end gap-2 mb-3">
      {/* Avatar IA */}
      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#4cfdfd] to-[#0141ff] flex items-center justify-center shrink-0">
        <svg className="w-4 h-4 text-[#00040f]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7H3a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2M7.5 13.5c.83 0 1.5-.67 1.5-1.5S8.33 10.5 7.5 10.5 6 11.17 6 12s.67 1.5 1.5 1.5m9 0c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5M22 14v2a2 2 0 0 1-2 2h-1v3l-3-3H8l-3 3v-3H4a2 2 0 0 1-2-2v-2h20z"/>
        </svg>
      </div>
      {/* Dots */}
      <div className="bg-white/10 border border-white/10 rounded-2xl rounded-bl-none px-4 py-3">
        <div className="flex gap-1 items-center">
          <span className="w-1.5 h-1.5 rounded-full bg-[#4cfdfd] animate-bounce [animation-delay:0ms]" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#4cfdfd] animate-bounce [animation-delay:150ms]" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#4cfdfd] animate-bounce [animation-delay:300ms]" />
        </div>
      </div>
    </div>
  );
}

function ChatMessage({ message }) {
  const isUser = message.role === "user";
  const text = message.parts[0].text;

  if (isUser) {
    return (
      <div className="flex justify-end mb-3">
        <div className="max-w-[80%] bg-gradient-to-br from-[#4cfdfd] to-[#0141ff] text-[#00040f] rounded-2xl rounded-br-none px-4 py-2.5 text-sm font-medium shadow-lg shadow-[#0141ff]/20">
          {text}
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-end gap-2 mb-3">
      {/* Avatar IA */}
      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#4cfdfd] to-[#0141ff] flex items-center justify-center shrink-0">
        <svg className="w-4 h-4 text-[#00040f]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7H3a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2M7.5 13.5c.83 0 1.5-.67 1.5-1.5S8.33 10.5 7.5 10.5 6 11.17 6 12s.67 1.5 1.5 1.5m9 0c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5M22 14v2a2 2 0 0 1-2 2h-1v3l-3-3H8l-3 3v-3H4a2 2 0 0 1-2-2v-2h20z"/>
        </svg>
      </div>
      {/* Burbuja */}
      <div className="max-w-[80%] bg-white/10 border border-white/10 text-white rounded-2xl rounded-bl-none px-4 py-2.5 text-sm leading-relaxed shadow-sm">
        {renderMarkdown(text)}
      </div>
    </div>
  );
}

function WhatsAppHandoffButton({ summary }) {
  // Construimos el mensaje final incluyendo el resumen si existe
  const fullMessage = summary 
    ? `${WHATSAPP_BASE_MESSAGE}\n\nResumen de mi necesidad:\n${summary}`
    : WHATSAPP_BASE_MESSAGE;
  
  const encodedMessage = encodeURIComponent(fullMessage);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

  return (
    <div className="px-4 pb-2">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        id="ai-chat-whatsapp-handoff"
        className="group flex items-center justify-center gap-3 w-full py-3.5 px-5 rounded-2xl font-bold text-sm text-white bg-gradient-to-r from-[#128c7e] to-[#25d366] shadow-lg shadow-[#25d366]/30 hover:shadow-[#25d366]/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
      >
        {/* Ícono WhatsApp */}
        <svg className="w-5 h-5 fill-white shrink-0" viewBox="0 0 448 512">
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
        </svg>
        <span>Hablar con un asesor en WhatsApp</span>
        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  );
}

// =========================================================
// Componente principal
// =========================================================
export default function AIChatWidget() {
  const [isMounted, setIsMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  const [conversationSummary, setConversationSummary] = useState("");
  const [unreadCount, setUnreadCount] = useState(0);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  // Ref para leer el estado de isOpen sin re-render (evita conteo doble)
  const isOpenRef = useRef(false);
  // Ref para el timer de inactividad
  const inactivityTimerRef = useRef(null);

  // Evitar hidratación: sólo renderizar en cliente
  useEffect(() => {
    setIsMounted(true);

    // Abrir automáticamente el chat después de 5 segundos (estándar de industria)
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  // Mantener la ref sincronizada con el estado de isOpen
  useEffect(() => {
    isOpenRef.current = isOpen;
    if (isOpen) {
      setUnreadCount(0);
    }
  }, [isOpen]);

  // Timer de inactividad: si el usuario no escribe en 90s, Spark manda un mensaje de re-enganche
  const resetInactivityTimer = useCallback(() => {
    if (inactivityTimerRef.current) clearTimeout(inactivityTimerRef.current);

    // Solo iniciar el timer si el usuario ya envió al menos un mensaje (conversación iniciada)
    const hasUserMessage = messages.some((m) => m.role === "user");
    if (!hasUserMessage) return;

    inactivityTimerRef.current = setTimeout(() => {
      const reengageMsg = {
        role: "model",
        parts: [
          {
            text: "Sólo quiero que sepas que sigo aquí cuando lo necesites. ¿Hay algo más en lo que pueda ayudarte? 😊",
          },
        ],
      };
      setMessages((prev) => {
        // Solo mostrar si el último mensaje no es ya uno de re-enganche
        const last = prev[prev.length - 1];
        if (last?.parts[0]?.text === reengageMsg.parts[0].text) return prev;
        return [...prev, reengageMsg];
      });
      // Si el chat está cerrado, aumentar el contador
      if (!isOpenRef.current) {
        setUnreadCount((c) => c + 1);
      }
    }, 90000); // 90 segundos de inactividad
  }, [messages]);

  // Iniciar timer al montar
  useEffect(() => {
    resetInactivityTimer();
    return () => { if (inactivityTimerRef.current) clearTimeout(inactivityTimerRef.current); };
  }, [resetInactivityTimer]);

  // Auto-scroll al último mensaje
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading, isOpen]);

  // Focus en el input al abrir
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const sendMessage = useCallback(async () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    // Construimos el nuevo historial con el mensaje del usuario
    const userMessage = { role: "user", parts: [{ text: trimmed }] };
    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setInput("");
    setIsLoading(true);
    setShowWhatsApp(false); // Ocultar el botón si el usuario sigue escribiendo

    try {
      // Enviamos el historial completo (excepto el mensaje de bienvenida inicial)
      // para que la API tenga contexto completo
      const apiMessages = updatedMessages.filter(
        (_, i) => !(i === 0 && messages[0] === INITIAL_MESSAGE)
      );

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: apiMessages }),
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        const errorMsg = {
          role: "model",
          parts: [
            {
              text:
                data.error ||
                "Por el momento nuestro chat no está disponible, por favor inténtalo más tarde.",
            },
          ],
        };
        setMessages((prev) => [...prev, errorMsg]);
        return;
      }

      const aiMessage = { role: "model", parts: [{ text: data.text }] };
      setMessages((prev) => [...prev, aiMessage]);

      // Si el chat está cerrado, incrementar el contador (usando ref para evitar doble conteo)
      if (!isOpenRef.current) {
        setUnreadCount((c) => c + 1);
      }

      if (data.whatsappHandoff) {
        setShowWhatsApp(true);
        if (data.summary) {
          setConversationSummary(data.summary);
        }
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "model",
          parts: [
            {
              text: "Hubo un error de conexión. Por favor intenta de nuevo. 🙏",
            },
          ],
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }, [input, isLoading, messages]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  // No renderizar nada en SSR
  if (!isMounted) return null;

  return (
    <>
      {/* ── Ventana del chat ── */}
      <div
        className={`fixed z-[9998] w-[calc(100vw-2rem)] max-w-sm transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
            : "opacity-0 scale-95 translate-y-4 pointer-events-none"
        } bottom-24 left-6 md:bottom-[120px] md:left-10`}
        role="dialog"
        aria-label="Asistente de ventas SERVITEC"
        aria-hidden={!isOpen}
      >
        {/* Tarjeta principal con glassmorphism */}
        <div
          className="rounded-3xl overflow-hidden shadow-2xl border border-white/10"
          style={{
            background:
              "linear-gradient(145deg, rgba(0,4,15,0.92) 0%, rgba(1,10,40,0.95) 100%)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            boxShadow:
              "0 25px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(76,253,253,0.08), inset 0 1px 0 rgba(255,255,255,0.06)",
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3.5 border-b border-white/10 bg-gradient-to-r from-[#4cfdfd]/10 to-[#0141ff]/10">
            <div className="flex items-center gap-3">
              {/* Avatar animado */}
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#4cfdfd] to-[#0141ff] flex items-center justify-center shadow-lg shadow-[#0141ff]/40">
                  <svg className="w-5 h-5 text-[#00040f]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7H3a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2M7.5 13.5c.83 0 1.5-.67 1.5-1.5S8.33 10.5 7.5 10.5 6 11.17 6 12s.67 1.5 1.5 1.5m9 0c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5M22 14v2a2 2 0 0 1-2 2h-1v3l-3-3H8l-3 3v-3H4a2 2 0 0 1-2-2v-2h20z"/>
                  </svg>
                </div>
                {/* Indicador online */}
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-green-400 border-2 border-[#00040f]" />
              </div>
              <div>
                <p className="text-sm font-bold text-white leading-tight">Spark</p>
                <p className="text-xs text-[#4cfdfd]/80 leading-tight">Asesor SERVITEC • En línea</p>
              </div>
            </div>
            {/* Botón cerrar */}
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all duration-200"
              aria-label="Cerrar chat"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Área de mensajes */}
          <div className="h-72 md:h-80 overflow-y-auto overscroll-contain px-4 pt-4 pb-2 flex flex-col scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10">
            {messages.map((msg, i) => (
              <ChatMessage key={i} message={msg} />
            ))}
            {isLoading && <TypingIndicator />}
            <div ref={messagesEndRef} />
          </div>

          {/* Botón de WhatsApp (handoff) */}
          {showWhatsApp && <WhatsAppHandoffButton summary={conversationSummary} />}

          {/* Separador */}
          <div className="h-px bg-white/10 mx-4" />

          {/* Input area */}
          <div className="p-3">
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-2xl px-4 py-2.5 focus-within:border-[#4cfdfd]/40 focus-within:bg-white/8 transition-all duration-200">
              <textarea
                ref={inputRef}
                id="ai-chat-input"
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                  // Auto-expandir altura
                  e.target.style.height = 'auto';
                  e.target.style.height = e.target.scrollHeight + 'px';
                }}
                onKeyDown={handleKeyDown}
                placeholder="Escribe tu pregunta..."
                disabled={isLoading}
                rows={1}
                className="flex-1 bg-transparent text-white placeholder-white/30 text-sm resize-none outline-none leading-relaxed disabled:opacity-50 max-h-32 overflow-y-auto overscroll-contain"
                style={{ height: 'auto' }}
                aria-label="Campo de mensaje"
              />
              <button
                onClick={sendMessage}
                disabled={isLoading || !input.trim()}
                id="ai-chat-send-button"
                className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#4cfdfd] to-[#0141ff] flex items-center justify-center shrink-0 disabled:opacity-40 hover:scale-105 active:scale-95 transition-all duration-150 shadow-md shadow-[#0141ff]/30"
                aria-label="Enviar mensaje"
              >
                <svg className="w-4 h-4 text-[#00040f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 19V5m0 0l-7 7m7-7l7 7" />
                </svg>
              </button>
            </div>
            <p className="text-center text-[10px] text-white/20 mt-2">
              Asistente SERVITEC
            </p>
          </div>
        </div>
      </div>

      {/* ── Botón flotante de activación ── */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        id="ai-chat-toggle-button"
        aria-label={isOpen ? "Cerrar asistente de IA" : "Abrir asistente de IA"}
        className={`fixed bottom-6 left-6 md:bottom-10 md:left-10 z-[9998] w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 ${
          isOpen ? "hidden" : "flex"
        }`}
        style={{
          background: "linear-gradient(135deg, #4cfdfd 0%, #0141ff 100%)",
          boxShadow: "0 8px 32px rgba(1,65,255,0.4), 0 0 0 0 rgba(76,253,253,0.4)",
          animation: isOpen ? "none" : "ai-pulse 2.5s infinite",
        }}
      >
        {/* Ícono robot */}
        <svg className="w-7 h-7 md:w-8 md:h-8 text-[#00040f]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7H3a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2M7.5 13.5c.83 0 1.5-.67 1.5-1.5S8.33 10.5 7.5 10.5 6 11.17 6 12s.67 1.5 1.5 1.5m9 0c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5M22 14v2a2 2 0 0 1-2 2h-1v3l-3-3H8l-3 3v-3H4a2 2 0 0 1-2-2v-2h20z"/>
        </svg>
        {/* Badge de mensajes sin leer */}
        {unreadCount > 0 && (
          <span
            className="absolute -top-2 -right-2 min-w-[20px] h-5 px-1 rounded-full bg-red-500 border-2 border-[#00040f] text-white text-[10px] font-bold flex items-center justify-center animate-bounce"
            aria-label={`${unreadCount} mensaje${unreadCount > 1 ? 's' : ''} sin leer`}
          >
            {unreadCount}
          </span>
        )}
      </button>

      {/* Keyframe de pulso para el botón flotante */}
      <style>{`
        @keyframes ai-pulse {
          0%   { box-shadow: 0 8px 32px rgba(1,65,255,0.4), 0 0 0 0   rgba(76,253,253,0.4); }
          70%  { box-shadow: 0 8px 32px rgba(1,65,255,0.4), 0 0 0 12px rgba(76,253,253,0);   }
          100% { box-shadow: 0 8px 32px rgba(1,65,255,0.4), 0 0 0 0   rgba(76,253,253,0);   }
        }
      `}</style>
    </>
  );
}
