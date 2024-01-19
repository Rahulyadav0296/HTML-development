import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div>
      <h1 className="text-bold bg-green-400 text-3xl px-4 py-4 mb-4 rounded-xl">
        Tailwind Props
      </h1>
      <Card username="React and Javascript" btnText="click me" />
      <Card username="Python Developer" />
    </div>
  );
}

export default App;
