import { useState, type  ChangeEvent } from "react";

interface Data {
  id: number;
  text: string;
}

const initialData: Data[] = [
  { id: 1, text: 'Gato' },
  { id: 2, text: 'Perro' },
  { id: 3, text: 'Ardilla' },
  { id: 4, text: 'Tejon' },
  { id: 5, text: 'Halcon' },
];

export function Ejercicio4() {
  // 1. Solo guardamos el término de búsqueda en el estado
  const [searchTerm, setSearchTerm] = useState<string>("");

  // 2. Calculamos la lista filtrada en cada render (Valor Derivado)
  // Usamos toLowerCase() para que la búsqueda no sea sensible a mayúsculas
  const filteredData = initialData.filter((item) =>
    item.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 3. Tipado correcto para React
  const handleFilter = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="h-full w-full flex flex-col items-center p-8 bg-[#0f172a] text-slate-200">
      <div className="w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-sky-400">Buscador Dinámico</h2>
        
        <div className="flex flex-col gap-2 mb-8">
          <label htmlFor="search" className="text-sm text-slate-400 ml-1">Buscar animal</label>
          <input
            id="search"
            type="text"
            value={searchTerm} 
            placeholder="Ej: Ardilla..."
            className="px-4 py-2 bg-slate-800 border border-slate-600 rounded-lg focus:outline-none focus:border-sky-500 transition-colors"
            onChange={handleFilter}
          />
        </div>

        <ul className="space-y-3 w-full">
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <li 
                key={item.id} 
                className="p-3 bg-slate-800/50 rounded-lg border border-slate-700 hover:bg-slate-700/50 transition-all"
              >
                <span className="font-medium">{item.text}</span>
              </li>
            ))
          ) : (
            <p className="text-center text-slate-500 mt-4 italic">
              No se encontraron resultados para "{searchTerm}"
            </p>
          )}
        </ul>
      </div>
    </div>
  );
}