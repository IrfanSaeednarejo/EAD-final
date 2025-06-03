
import { useEffect, useState } from 'react'
import './App.css'


function TrafficLightSimulator() {
  const [color, setColor] = useState("red")


  //Initial commit: add static HTML and CSS for traffic Lights
  
  return (
    <>


          

          <div className=" items-center justify-center w-screen h-screen bg-gray-800 text-white">
            <h1 className="text-4xl font-bold text-center">Traffic Light Simulator</h1>
           <div className="flex  flex-col items-center w-1/4 justify-center space-y-4 bg-gray-700 p-8 rounded-lg shadow-lg mt-8">
            <div className={`bg-${color}-500 w-16 h-16 rounded-full transition-colors duration-500`}></div>
            <div className={`bg-${color}-500 w-16 h-16 rounded-full transition-colors duration-500`}></div>
            <div className={`bg-${color}-500 w-16 h-16 rounded-full transition-colors duration-500`}></div>
           </div>
            
           </div>

    </>
    
  )
}

export default TrafficLightSimulator