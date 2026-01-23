import { useState, useEffect } from "react";

export function Ejercicio6() {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  // EFECTO: Motor del temporizador
  useEffect(() => {
    let interval: number | undefined;

    if (isActive) {
      interval = window.setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    // LIMPIEZA: Evita fugas de memoria al pausar o salir del ejercicio
    return () => clearInterval(interval);
  }, [isActive]);

  // LÓGICA: Formateo de tiempo (Pista 4)
  const formatTime = () => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return {
      hours: hrs.toString().padStart(2, "0"),
      minutes: mins.toString().padStart(2, "0"),
      seconds: secs.toString().padStart(2, "0"),
    };
  };

  const time = formatTime();

  return (
    <div className="h-full w-full flex flex-col items-center justify-center p-8 bg-[#0f172a]">
      <div className="w-full max-w-md bg-[#1e293b] p-10 rounded-[2.5rem] shadow-2xl border border-slate-700 text-center">
        <h2 className="text-slate-400 uppercase tracking-[0.2em] text-sm mb-8 font-semibold">
          Temporizador de Sesión
        </h2>

        {/* Display de Tiempo */}
        <div className="flex justify-center items-baseline gap-2 mb-12">
          <div className="flex flex-col">
            <span className="text-6xl font-mono font-bold text-white leading-none">
              {time.hours}
            </span>
            <span className="text-xs text-slate-500 mt-2">HORAS</span>
          </div>
          <span className="text-4xl font-bold text-sky-500 animate-pulse">:</span>
          <div className="flex flex-col">
            <span className="text-6xl font-mono font-bold text-white leading-none">
              {time.minutes}
            </span>
            <span className="text-xs text-slate-500 mt-2">MINS</span>
          </div>
          <span className="text-4xl font-bold text-sky-500 animate-pulse">:</span>
          <div className="flex flex-col">
            <span className="text-6xl font-mono font-bold text-sky-400 leading-none">
              {time.seconds}
            </span>
            <span className="text-xs text-slate-500 mt-2">SEGS</span>
          </div>
        </div>

        {/* Panel de Control */}
        <div className="flex gap-4 justify-center">
          {!isActive ? (
            <button
              onClick={() => setIsActive(true)}
              className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 rounded-2xl transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4.5 3a.5.5 0 00-.5.5v13a.5.5 0 00.81.39l10-6.5a.5.5 0 000-.78l-10-6.5A.5.5 0 004.5 3z" />
              </svg>
              Iniciar
            </button>
          ) : (
            <button
              onClick={() => setIsActive(false)}
              className="flex-1 bg-amber-600 hover:bg-amber-500 text-white font-bold py-4 rounded-2xl transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5 4a1 1 0 00-1 1v10a1 1 0 001 1h3a1 1 0 001-1V5a1 1 0 00-1-1H5zm7 0a1 1 0 00-1 1v10a1 1 0 001 1h3a1 1 0 001-1V5a1 1 0 00-1-1h-3z" />
              </svg>
              Pausar
            </button>
          )}

          <button
            onClick={() => {
              setIsActive(false);
              setSeconds(0);
            }}
            className="px-6 bg-slate-700 hover:bg-slate-600 text-slate-300 font-bold rounded-2xl transition-all active:scale-95"
            title="Reiniciar"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}