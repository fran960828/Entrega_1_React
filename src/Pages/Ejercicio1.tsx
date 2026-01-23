import { useState } from "react"

export function Ejercicio1() {
  const [currentColor, setCurrentColor] = useState<string>("#1e293b");

  const handleChangeBackground = () => {
    const hex = Math.floor(Math.random() * 16777215).toString(16);
    const color = `#${hex.padStart(6, '0')}`;
    setCurrentColor(color);
  };

  return (
    <div 

      className="h-screen w-full flex flex-col justify-center items-center transition-colors duration-700 ease-in-out rounded-lg shadow-inner bg-[var(--bg-exercise)]"
      style={{ '--bg-exercise': currentColor } as React.CSSProperties}
    >
      <button 
        onClick={handleChangeBackground}
        className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-bold rounded-2xl transition-all active:scale-90 hover:shadow-lg"
      >
        Cambiar Fondo
      </button>
      
     
    </div>
  );
}