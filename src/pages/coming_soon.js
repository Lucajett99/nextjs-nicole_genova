/*import React, { useState, useEffect } from "react";

export default function coming_soon({ children }) {
    const [dot, setDot] = useState(".");
    useEffect(() => {
        const interval = setInterval(() => {
            setDot(dot === "." ? ".." : dot === ".." ? "..." : ".");
        }, 500);
        return () => clearInterval(interval);
    }, [dot]);
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-300 to-purple-500 flex justify-center items-center">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Sito in costruzione <br />
            <span className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              {dot}
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
}
*/
import React, { useState, useEffect } from "react";

export default function ComingSoon({ children }) {
  const [dot, setDot] = useState(".");

  useEffect(() => {
    const interval = setInterval(() => {
      setDot((currentDot) =>
        currentDot === "." ? ".." : currentDot === ".." ? "..." : "."
      );
    }, 500);

    return () => clearInterval(interval);
  }, []); // Rimuovi "dot" dalle dipendenze di useEffect

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#FF8E7E] to-[#00B3B0] flex justify-center items-center">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Sito in costruzione <br />
            <span className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              {dot}
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
}
