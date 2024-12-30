import React, { useState, useEffect } from "react";

// Import the Wasm module
import init, { fibonacci } from "./pkg/wasm_demo";

const App = () => {
  const [input, setInput] = useState(10);
  const [result, setResult] = useState(null);

  useEffect(() => {
    // Initialize the Wasm module
    init().then(() => console.log("Wasm initialized!"));
  }, []);

  const calculateFibonacci = () => {
    const fibResult = fibonacci(input);
    setResult(fibResult);
  };

  return (
    <div>
      <h1>React + Wasm Example</h1>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(Number(e.target.value))}
      />
      <button onClick={calculateFibonacci}>Calculate Fibonacci</button>
      {result !== null && <p>Result: {result}</p>}
    </div>
  );
};

export default App;
