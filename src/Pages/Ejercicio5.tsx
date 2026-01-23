import { useState, type ChangeEvent } from "react";

interface CalcState {
  num1: string;
  num2: string;
}

export function Ejercicio5() {
  const [values, setValues] = useState<CalcState>({ num1: "", num2: "" });
  const [result, setResult] = useState<number | string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // Solo permitimos números y puntos decimales
    if (/^[0-9.]*$/.test(value)) {
      setValues((prev) => ({ ...prev, [name]: value }));
      setError(null); // Limpiamos error al escribir
    }
  };

  const calculate = (operation: string) => {
    const n1 = parseFloat(values.num1);
    const n2 = parseFloat(values.num2);

    // Validación de entradas vacías
    if (isNaN(n1) || isNaN(n2)) {
      setError("Por favor, introduce ambos números");
      setResult(null);
      return;
    }

    setError(null);

    switch (operation) {
      case "sum": setResult(n1 + n2); break;
      case "rest": setResult(n1 - n2); break;
      case "mult": setResult(n1 * n2); break;
      case "div":
        if (n2 === 0) {
          setError("No se puede dividir por cero");
          setResult(null);
        } else {
          setResult(n1 / n2);
        }
        break;
      default: break;
    }
  };

  return (
    <div className="h-full w-full flex flex-col items-center p-8 bg-[#0f172a] text-slate-200">
      <div className="w-full max-w-md bg-[#1e293b] p-8 rounded-2xl shadow-2xl border border-slate-700">
        <h2 className="text-2xl font-bold mb-6 text-sky-400 text-center">Calculadora Pro</h2>

        <div className="space-y-4 mb-8">
          <input
            type="text"
            name="num1"
            value={values.num1}
            onChange={handleInputChange}
            placeholder="Primer número"
            className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-xl focus:ring-2 focus:ring-sky-500 outline-none transition-all text-center text-xl"
          />
          <input
            type="text"
            name="num2"
            value={values.num2}
            onChange={handleInputChange}
            placeholder="Segundo número"
            className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-xl focus:ring-2 focus:ring-sky-500 outline-none transition-all text-center text-xl"
          />
        </div>

        <div className="grid grid-cols-2 gap-3 mb-8">
          {[
            { label: "Sumar", op: "sum", color: "bg-emerald-600" },
            { label: "Restar", op: "rest", color: "bg-rose-600" },
            { label: "Multiplicar", op: "mult", color: "bg-amber-600" },
            { label: "Dividir", op: "div", color: "bg-sky-600" },
          ].map((btn) => (
            <button
              key={btn.op}
              onClick={() => calculate(btn.op)}
              className={`${btn.color} hover:brightness-110 text-white font-bold py-3 rounded-lg transition-all active:scale-95 shadow-lg`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Display de Resultado / Error */}
        <div className="min-h-20 flex flex-col justify-center items-center border-t border-slate-700 pt-6">
          {error && (
            <p className="text-rose-400 font-medium animate-pulse">{error}</p>
          )}
          {result !== null && !error && (
            <div className="text-center">
              <span className="text-slate-400 text-sm block mb-1">Resultado:</span>
              <span className="text-4xl font-mono font-bold text-white leading-none">
                {typeof result === "number" ? Number(result.toFixed(4)) : result}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}