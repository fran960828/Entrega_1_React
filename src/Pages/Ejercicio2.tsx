import { useState } from "react";

export function Ejercicio2(){
    const [clicks,SetClicks]=useState<number>(0)

    function handleClicks(){
        SetClicks((prevClicks)=>prevClicks+1)
    }

    return (
        <div 

      className="h-screen w-full flex flex-col justify-center items-center transition-colors duration-700 ease-in-out rounded-lg shadow-inner bg-[#1e293b]"
      
    >
      <button 
        onClick={handleClicks}
        className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-bold rounded-2xl transition-all active:scale-90 hover:shadow-lg"
      >
        Contador de clicks <span>({clicks})</span>
      </button>
      
     
    </div>
    )
}