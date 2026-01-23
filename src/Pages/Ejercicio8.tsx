import { useState } from "react";

export function Ejercicio8(){

    const [text,setText]=useState<string>('')

    const charCount=text.replace(/\s/g,"").length
    const wordCount = text.trim() === "" 
    ? 0 
    : text.trim().split(/\s+/).filter(word => word.length > 0).length;




    return (
    <div className="h-full w-full flex flex-col items-center justify-center p-8 bg-[#0f172a]">
      <div className="w-full max-w-2xl bg-[#1e293b] p-8 rounded-3xl shadow-2xl border border-slate-700">
        
        {/* Encabezado */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-white">Contador de Texto</h2>
          <button 
            onClick={() => setText("")}
            className="text-xs text-slate-400 hover:text-rose-400 transition-colors uppercase tracking-widest font-semibold"
          >
            Limpiar lienzo
          </button>
        </div>

        {/* Área de Escritura */}
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Comienza a escribir tu párrafo aquí..."
          className="w-full h-64 p-6 bg-slate-900/50 border-2 border-slate-700 rounded-2xl text-slate-200 outline-none focus:border-sky-500 transition-all resize-none leading-relaxed placeholder:text-slate-600"
        />

        {/* Panel de Estadísticas */}
        <div className="grid grid-cols-2 gap-4 mt-8">
          <div className="bg-slate-800/50 border border-slate-700 p-4 rounded-2xl flex flex-col items-center justify-center">
            <span className="text-3xl font-mono font-bold text-sky-400">
              {charCount}
            </span>
            <span className="text-[10px] text-slate-500 uppercase tracking-[0.2em] mt-1 font-bold">
              Caracteres (Netos)
            </span>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 p-4 rounded-2xl flex flex-col items-center justify-center">
            <span className="text-3xl font-mono font-bold text-emerald-400">
              {wordCount}
            </span>
            <span className="text-[10px] text-slate-500 uppercase tracking-[0.2em] mt-1 font-bold">
              Palabras
            </span>
          </div>
        </div>

        {/* Tip Informativo (UX) */}
        <p className="text-center text-slate-500 text-xs mt-6 italic">
          * Los espacios y saltos de línea no se contabilizan como caracteres.
        </p>
      </div>
    </div>
  );
}