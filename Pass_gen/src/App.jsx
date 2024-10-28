import { useState, useCallback, useEffect, useRef } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

function App() {
  const [Length, setLength] = useState(8);
  const [numberAllowed, setNumber_allowed] = useState(false);
  const [characterAllowed, setCharacter_allowed] = useState(false);
  const [password, setPassword] = useState("");

  //Useref hook
  const passRef = useRef(null);

  const passGenerator = useCallback(() => {
    let Pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) {
      str += "0123456789";
    }
    if (characterAllowed) {
      str += "!@#$&*~";
    }
    for (let i = 0; i <= Length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      Pass += str.charAt(char);
    }

    setPassword(Pass);


  }, [Length, numberAllowed, characterAllowed, setPassword]);

  const copyPass_onclipBoard = useCallback(() => {
    passRef.current?.select();
    passRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password);
  }, [password])

  useEffect(() => {
    passGenerator();
  }, [Length, numberAllowed, characterAllowed, passGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-400 bg-gray-700">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text" value={password} className="outline-none w-full py-1 px-3" placeholder="passwords" readOnly ref={passRef} />
          <button
            onClick={copyPass_onclipBoard}
            className="outline-none hover:cursor-pointer bg-blue-500 text-white px-3 py-0.5 shrink-0">
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1"></div>
          <input type="range"
            min={6} max={100}
            value={Length}
            className="cursor-pointer"
            onChange={(e) => { setLength(e.target.value) }}
          />
          <label >Length: {Length}</label>
          <div className="flex items-center gap-x-1">
            <input type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumber_allowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox"
              defaultChecked={characterAllowed}
              id="characterInput"
              onChange={() => {
                setCharacter_allowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
