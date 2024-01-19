import { useState } from "react";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 className="text-3xl bg-orange-500  m-10 text-center">React Redux</h1>
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;
