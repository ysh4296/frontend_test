import React from "react";
import logo from "./logo.svg";
import "./App.css";
import useUserStore from "./hooks/user";

function App() {
  const { userName, setUserName } = useUserStore();
  return (
    <div>
      <p>{userName}</p>
      <input type="text" onChange={(e) => setUserName(e.target.value)} />
    </div>
  );
}

export default App;
