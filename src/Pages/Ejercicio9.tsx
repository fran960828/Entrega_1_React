import { useEffect, useRef, useState } from "react"

interface TaskItem {
    id: number,
    task: string,
    complete: boolean
}

export function Ejercicio9() {
    // Inicialización segura desde LocalStorage
    const [tasks, setTasks] = useState<TaskItem[]>(() => {
        const saved = localStorage.getItem('tasks');
        const parsed = saved ? JSON.parse(saved) : [];
        return Array.isArray(parsed) ? parsed : [];
    });

    const inputRef = useRef<HTMLInputElement>(null);

    // Sincronización automática con LocalStorage
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    function handleAddTask() {
        const val = inputRef.current?.value.trim();
        if (val) {
            const taskItem: TaskItem = {
                id: Date.now(),
                task: val,
                complete: false
            };
            setTasks((prevTask) => [...prevTask, taskItem]);
            if (inputRef.current) inputRef.current.value = '';
        }
    }

    function toggleTask(id: number) {
        setTasks(prev => prev.map(t => 
            t.id === id ? { ...t, complete: !t.complete } : t
        ));
    }

    function handleDeleteTask(id: number) {
        setTasks((prevTask) => prevTask.filter((task) => task.id !== id));
    }

    function clearCompleted() {
        setTasks((prevTask) => prevTask.filter((task) => !task.complete));
    }

    const pendingCount = tasks.filter(t => !t.complete).length;

    return (
        <div className="h-full w-full flex flex-col items-center justify-center p-8 bg-[#0f172a]">
            <div className="w-full max-w-lg bg-[#1e293b] p-8 rounded-4xl shadow-2xl border border-slate-700 flex flex-col h-[600px]">
                
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <span className="bg-sky-500 p-2 rounded-lg text-slate-900 font-bold">✓</span>
                    Task Master Pro
                </h2>

                <div className="flex gap-2 mb-8">
                    <input
                        type="text"
                        ref={inputRef}
                        placeholder="¿Qué tienes pendiente hoy?"
                        className="flex-1 px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-slate-200 outline-none focus:border-sky-500 transition-all"
                    />
                    <button onClick={handleAddTask} className="px-6 py-3 bg-sky-600 hover:bg-sky-500 text-white font-bold rounded-xl transition-all active:scale-95">
                        Añadir
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto space-y-3 pr-2 custom-scrollbar">
                    {tasks.map((item) => (
                        <div key={item.id} className={`flex items-center justify-between p-4 rounded-2xl border transition-all ${item.complete ? 'bg-slate-900/20 border-slate-800/50 opacity-60' : 'bg-slate-800/40 border-slate-700 hover:border-slate-500'}`}>
                            <div className="flex w-full items-center gap-4 cursor-pointer" onClick={() => toggleTask(item.id)}>
                                <input 
                                    type="checkbox" 
                                    checked={item.complete}
                                    onChange={() => {}} // Manejado por el click del div
                                    className="w-5 h-5 rounded-md border-slate-600 bg-slate-700 text-sky-500 focus:ring-sky-500 cursor-pointer"
                                />
                                <span className={`text-slate-200 font-medium ${item.complete ? 'line-through italic text-slate-500' : ''}`}>
                                    {item.task}
                                </span>
                            </div>
                            <button onClick={() => handleDeleteTask(item.id)} className="text-slate-600 hover:text-rose-400 transition-all px-2 font-bold">
                                ✕
                            </button>
                        </div>
                    ))}
                </div>

                <div className="mt-8 pt-6 border-t border-slate-700 flex justify-between items-center text-sm">
                    <span className="text-slate-500">{pendingCount} tareas pendientes</span>
                    <button onClick={clearCompleted} className="text-rose-400 hover:text-rose-300 font-semibold transition-colors">
                        Limpiar completadas
                    </button>
                </div>
            </div>
        </div>
    );
}