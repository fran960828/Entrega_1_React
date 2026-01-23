import { useRef, useState } from "react";

const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
const NUMBERS = "0123456789";
const SYMBOLS = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
const CHARACTERS=[UPPERCASE,LOWERCASE,NUMBERS,SYMBOLS]
export function Ejercicio7() {
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null); // Guardamos el mensaje de error directamente
  const longitudRef = useRef<HTMLInputElement>(null);

  function handleGeneratorPassword() {
    const val = Number(longitudRef.current?.value);

  // 1. Validación de longitud
  if (isNaN(val) || val < 4) {
    setError("La longitud debe ser mayor o igual a 4.");
    setPassword("");
    return;
  }

  setError(null);
  let passwordArray: string[] = [];

  // 2. GARANTÍA: Añadimos uno de cada tipo obligatoriamente
  // Esto asegura que validator.uppercase, validator.number, etc., sean siempre true
  passwordArray.push(UPPERCASE[Math.floor(Math.random() * UPPERCASE.length)]);
  passwordArray.push(LOWERCASE[Math.floor(Math.random() * LOWERCASE.length)]);
  passwordArray.push(NUMBERS[Math.floor(Math.random() * NUMBERS.length)]);
  passwordArray.push(SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)]);

  // 3. RELLENO: Completamos hasta alcanzar la longitud deseada
  for (let i = 4; i < val; i++) {
    const list = CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
    const char = list[Math.floor(Math.random() * list.length)];
    passwordArray.push(char);
  }

  // 4. BARAJO (Shuffle): Algoritmo Fisher-Yates simplificado
  // Si no barajamos, la contraseña siempre empezará por Mayus-Minus-Num-Sym
  const shuffledPassword = passwordArray
    .sort(() => Math.random() - 0.5)
    .join("");

  setPassword(shuffledPassword);
}

  return (
    <div className="h-full w-full flex flex-col items-center justify-center p-8 bg-[#0f172a]">
      <div className="w-full max-w-md bg-[#1e293b] p-8 rounded-3xl shadow-2xl border border-slate-700">
        <h2 className="text-2xl font-bold mb-6 text-center text-sky-400">Password Generator</h2>

        {/* Pantalla de Resultado */}
        <div className="w-full p-4 bg-slate-900 border-2 border-slate-700 rounded-2xl text-center min-h-16 flex items-center justify-center mb-6">
          <span className="text-xl font-mono font-bold text-sky-400 break-all tracking-widest">
            {password || "••••••••"}
          </span>
        </div>

        <div className="space-y-6">
          <div className="flex flex-col gap-3">
            <label className="text-slate-300 font-medium">Longitud deseada</label>
            <input 
              type="number" 
              ref={longitudRef}
              defaultValue={12}
              className="w-full text-center px-4 py-3 bg-slate-800 border border-slate-600 rounded-xl focus:border-sky-500 outline-none text-white transition-all"
            />
          </div>

          {/* Mensaje de Error Condicional */}
          {error && (
            <div className="bg-rose-500/10 border border-rose-500/20 p-3 rounded-xl flex items-center gap-3 animate-shake">
              <p className="text-rose-400 text-xs font-medium">{error}</p>
            </div>
          )}

          <button 
            className="w-full bg-sky-600 hover:bg-sky-500 text-white font-bold py-4 rounded-xl transition-all active:scale-95 shadow-lg"
            onClick={handleGeneratorPassword}
          >
            Generar Contraseña
          </button>
        </div>
      </div>
    </div>
  );
}