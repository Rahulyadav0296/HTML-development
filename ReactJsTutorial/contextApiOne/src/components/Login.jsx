import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <div className="bg-red-300 m-7 rounded-xl px-5 py-5 display-4">
      <h1 className="text-bold text-2xl bg-red-200 m-3 rounded-lg">welcome to React World</h1>
      <div className="block">
        <input
          className="bg-gray-100 m-4 text-black px-2 py-2 rounded-md"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="username"
        />
        <input
          className="bg-gray-100 m-4 text-black px-2 py-2 rounded-md"
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
      </div>
      <button
        className="bg-red-600 px-2 py-2 rounded-xl hover:bg-green-400 text-white text-bold"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
}

export default Login;
