import React, { useState, useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const [result, setResult] = useState(0);

  const handleOperation = (e, operation) => {
    e.preventDefault();
    const inputValue = Number(inputRef.current.value);
    if (isNaN(inputValue)) return;

    setResult((prevResult) => {
      switch (operation) {
        case "add":
          return prevResult + inputValue;
        case "subtract":
          return prevResult - inputValue;
        case "multiply":
          return prevResult * inputValue;
        case "divide":
          return prevResult / inputValue;
        default:
          return prevResult;
      }
    });
  };

  const resetInput = (e) => {
    e.preventDefault();
    inputRef.current.value = "";
  };

  const resetResult = (e) => {
    e.preventDefault();
    setResult(0);
  };

  return (
    <div className="app-container">
      <div className="calculator-card">
        <h1>Mini React Calculator</h1>
        <p className="result-display">Result: {result}</p>
        <input
          ref={inputRef}
          type="number"
          placeholder="Enter a number"
          className="number-input"
        />
        <div className="button-row">
          <button onClick={(e) => handleOperation(e, "add")}>+</button>
          <button onClick={(e) => handleOperation(e, "subtract")}>−</button>
          <button onClick={(e) => handleOperation(e, "multiply")}>×</button>
          <button onClick={(e) => handleOperation(e, "divide")}>÷</button>
        </div>
        <div className="button-row">
          <button className="secondary" onClick={resetInput}>Reset Input</button>
          <button className="secondary" onClick={resetResult}>Reset Result</button>
        </div>
      </div>
    </div>
  );
}

export default App;
