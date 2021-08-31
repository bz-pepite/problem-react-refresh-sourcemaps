import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import { Button } from "@foo/react-utils";

function App() {
  const [count, setCount] = useState(0);

  const increase = () => {
    console.log(count);
    setCount((count) => count + 1);
    alert("increased");
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={increase}>
            count is: {count}
          </button>
        </p>
        <p>
          <Button text={"dm-app"}></Button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
