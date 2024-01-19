import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <div className="m-8">
        <h1 className="text-bold text-3xl">React with Chai and share is important</h1>
        <Login />
        <Profile />
      </div>
    </UserContextProvider>
  );
}

export default App;
