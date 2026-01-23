import { useRef, useState } from "react";


interface Task {
  id: number;
  text: string;
}

export function Ejercicio3() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleTask() {
    const value = inputRef.current?.value.trim();
    
    if (value) {
      setTasks((prev) => [...prev, { id: Date.now(), text: value }]);
      
      
      if (inputRef.current) {
        inputRef.current.value = "";
        inputRef.current.focus();
      }
    }
  }

  function handleRemoveTask(id: number) {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }

  return (
    <div className="h-full w-full flex flex-col items-center p-8 bg-[#0f172a] text-slate-200">
      
        <h2 className="text-2xl font-bold mb-6 text-sky-400">Lista de Tareas</h2>
        
        {/* Input Group */}
        <div className="flex gap-2 mb-8">
          <input
            type="text"
            placeholder="Nueva tarea..."
            className="flex-1 px-4 py-2 bg-slate-800 border border-slate-600 rounded-lg focus:outline-none focus:border-sky-500 transition-colors"
            ref={inputRef}
          />
          <button 
            className="px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white font-semibold rounded-lg transition-all active:scale-95"
            onClick={handleTask}
          >
            Agregar
          </button>
        </div>

        <ul className="space-y-3 w-full">
          {tasks.length === 0 && (
            <p className="text-slate-500 text-center italic">No hay tareas pendientes</p>
          )}
          {tasks.map((task) => (
            <li 
              key={task.id} 
              className="flex justify-between items-center p-3 bg-slate-800/50 rounded-lg border border-slate-700 group hover:border-slate-500 transition-colors"
            >
              <span className="truncate pr-4">{task.text}</span>
              <button 
                onClick={() => handleRemoveTask(task.id)}
                className="text-slate-500 hover:text-red-400 transition-colors px-2 font-bold"
                title="Eliminar"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      
    </div>
  );
}