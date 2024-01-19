import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");
  const [text, textColor] = useState("black")
  
  return (
    <div
      className="h-screen duration-200 w-full"
      style={{backgroundColor:color, color:text}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button onClick={() => {setColor("red"), textColor("white")}} className="outline-none px-4 rounded-full shadow-sm" style={{backgroundColor: "red"}}>Red</button>
            <button onClick={() => {setColor("green"), textColor("white")}} className="outline-none px-4 rounded-full shadow-sm" style={{backgroundColor: "green"}}>Green</button>
            <button onClick={() => {setColor("blue"), textColor("white")}} className="outline-none px-4 rounded-full shadow-sm" style={{backgroundColor: "blue"}}>Blue</button>
            <button onClick={() => {setColor("grey"), textColor("white")}} className="outline-none px-4 rounded-full shadow-sm" style={{backgroundColor: "grey"}}>Grey</button>
            <button onClick={() => {setColor("yellow"), textColor("blue")}} className="outline-none px-4 rounded-full  shadow-sm" style={{backgroundColor: "yellow"}}>Yellow</button>
            <button onClick={() => {setColor("purple"), textColor("white")}} className="outline-none px-4 rounded-full shadow-sm" style={{backgroundColor: "purple"}}>Purple</button>
            <button onClick={() => {setColor("cyan"), textColor("blue")}} className="outline-none px-4 rounded-full  shadow-sm" style={{backgroundColor: "cyan"}}>Cyan</button>
        </div>
      </div>
    </div>
  );
}

export default App;
