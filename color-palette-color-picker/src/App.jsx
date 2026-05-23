import { useState } from "react";

export default function App() {
  const [color, setColor] = useState("#8b5cf6");

  return (
    <div
      className="min-h-screen flex items-center justify-center transition-all duration-300"
      style={{
        background: `linear-gradient(135deg, ${color}, #000000)`,
      }}
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center px-6">
        <div className="text-white space-y-6">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Realtime
            <br />
            <span style={{ color }}>Color UI</span>
          </h1>

          <p className="text-lg text-white/80 leading-relaxed max-w-xl">
            Change the entire landing page theme instantly using a realtime
            color palette picker built with React and Tailwind CSS.
          </p>

          <div className="flex gap-4 flex-wrap items-center">
            <button
              className="px-6 py-3 rounded-2xl font-semibold shadow-2xl text-white transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: color }}
            >
              Get Started
            </button>

            <div className="bg-white/10 backdrop-blur-lg px-5 py-3 rounded-2xl border border-white/20 flex items-center gap-3">
              <span className="text-sm">Pick Color</span>

              <input
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="w-14 h-10 border-none outline-none cursor-pointer bg-transparent"
              />
            </div>
          </div>

          <div className="flex gap-3 flex-wrap pt-4">
            {[
              "#ec4899",
              "#8b5cf6",
              "#06b6d4",
              "#22c55e",
              "#f97316",
              "#e11d48",
            ].map((item) => (
              <button
                key={item}
                onClick={() => setColor(item)}
                className="w-12 h-12 rounded-full border-4 border-white/30 hover:scale-110 transition-all duration-300"
                style={{ backgroundColor: item }}
              ></button>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <div
            className="relative w-[340px] h-[340px] rounded-[40px] backdrop-blur-2xl border border-white/20 overflow-hidden shadow-2xl"
            style={{ backgroundColor: `${color}33` }}
          >
            <div
              className="absolute inset-0 blur-3xl opacity-60 animate-pulse"
              style={{ backgroundColor: color }}
            ></div>

            <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center p-6">
              <div
                className="w-32 h-32 rounded-full shadow-2xl animate-bounce"
                style={{ backgroundColor: color }}
              ></div>

              <h2 className="mt-8 text-3xl font-bold">Realtime Theme</h2>

              <p className="mt-3 text-white/80 max-w-xs">
                Entire landing page changes dynamically from the live color
                palette picker.
              </p>

              <div className="mt-6 px-5 py-2 rounded-xl bg-black/30 border border-white/10 font-mono text-lg">
                {color}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
