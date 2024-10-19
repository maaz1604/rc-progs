import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);
  // let counter = 15;
  const addValue = () => {
    // counter++;
    if (counter < 25) {
      setCounter(counter + 1);
    }
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const resetValue = () => {
    setCounter(15);
  };

  return (
    <>
      <h1>Counter progs</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove value {counter} </button>
      <br />
      <button onClick={resetValue}>Reset value {counter}</button>
      <br />
      <p>Footer : {counter} </p>
    </>
  );
}

export default App;
