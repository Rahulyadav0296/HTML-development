import { useState } from "react";
import "./App.css";

function Counter() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const decrement = () => {
    setCounter((prev) => prev - 1);
  };

  
  return (
    <div>
      <h4 className="px-3 m-4 text-xl font-bold">Value : {counter}</h4>
      <button
        onClick={increment}
        className="bg-green-500 m-4 font-bold text-black rounded-xl border-spacing-1 px-2 py-2 hover:bg-slate-950 hover:text-white"
      >
        {" "}
        Increment
      </button> 
      <button
        onClick={decrement}
        className="bg-green-500 m-4 font-bold text-black rounded-xl border-spacing-1 px-2 py-2 hover:bg-slate-950 hover:text-white"
      >
        {" "}
        decrement
      </button>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1 className="bg-green-500 px-3 py-3 rounded-2xl text-black font-bold ">
        Redux React Basic Knowledge
      </h1>
      <Counter />
    </div>
  );
}

export default App;
