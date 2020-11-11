import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useContextActions, useContextState } from "./Context";

function App() {
  const { isActive, number } = useContextState();
  const { toggleActive, incNumber } = useContextActions();
  const [counter, setCounter] = useState<number>(0);

  const incCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Counter 1: {number} <button onClick={incNumber}>+</button>
        </h1>

        <h2>
          Counter 2: {counter} <button onClick={incCounter}>+</button>
        </h2>

        <div className="">
          <div
            className="light-box"
            style={{
              height: "50px",
              width: "50px",
              backgroundColor: isActive ? "yellow" : "grey",
            }}
          />
          <button onClick={toggleActive}>{isActive ? "off" : "on"}</button>
        </div>
      </header>
    </div>
  );
}

export default App;
