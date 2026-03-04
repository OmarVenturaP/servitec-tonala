// Archivo: src/app/api/proyectos/route.js
import { NextResponse } from "next/server";
import { pool } from "../../../lib/db"; // Ajusta la ruta si es necesario

export async function GET() {
  try {
    // Hacemos la consulta a la tabla que acabas de crear
    const [rows] = await pool.query("SELECT * FROM proyectos ORDER BY id DESC");
    
    // Devolvemos los datos en formato JSON
    return NextResponse.json(rows);
  } catch (error) {
    console.error("Error en la base de datos:", error);
    return NextResponse.json(
      { error: "Error interno del servidor al obtener proyectos" }, 
      { status: 500 }
    );
  }
}