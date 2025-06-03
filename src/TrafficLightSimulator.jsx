import { useEffect, useState } from 'react'
import './App.css'

function TrafficLightSimulator() {
  const [color, setColor] = useState("green");

  useEffect(() => {
    const interval = setInterval(() => {
      setColor((prevColor) => {
        if (prevColor === "red") return "yellow";
        if (prevColor === "green") return "red";
        return "green";
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [color]);

  return (
    <>
      <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-800 text-white">
        <h1 className="text-4xl font-bold text-center mb-8">Traffic Light Simulator</h1>

        <div className="flex flex-col items-center justify-center w-1/9 space-y-4 bg-gray-700 p-8 rounded-lg shadow-lg">
          <div className={`w-16 h-16 rounded-full transition-all duration-500 
          ${
            color === "red" 
              ? "bg-red-500 shadow-[0_0_25px_8px_rgba(239,68,68,0.7)]" 
              : "bg-gray-500"}
              `}></div>

          <div className={`w-16 h-16 rounded-full transition-all duration-500 
          ${
            color === "yellow" 
              ? "bg-yellow-400 shadow-[0_0_25px_8px_rgba(250,204,21,0.7)]" 
              : "bg-gray-500 "}
              `}></div>

          <div className={`w-16 h-16 rounded-full transition-all duration-500
           ${
            color === "green" 
              ? "bg-green-500 shadow-[0_0_25px_8px_rgba(34,197,94,0.7)]" 
              : "bg-gray-500" }
          `}></div>
        </div>
      </div>
    </>
  );
}

export default TrafficLightSimulator;
