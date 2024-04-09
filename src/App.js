import "./App.css";
import { useState } from "react";

function App() {
  const [uname, setState] = useState(0);

  function increment() {
    setState(uname + 1);
  }
  function decrement() {
    if (uname > 0) {
      setState(uname - 1);
    }
  }
  function reset() {
    setState(0);
  }
  return (
    <div className="App d-flex justify-content-center align-items-center">
      <div className="p-4 text-center main-div  shadow rounded">
        <h1 className="text-center mt-3 mb-5">Counter-App</h1>
        <h1 className="mb-5">{uname}</h1>
        <div className="d-flex justify-content-evenly">
          <div>
            <button onClick={increment} className="bg-success text-white">
              +
            </button>
          </div>
          <div>
            <button onClick={reset} className="bg-dark text-white">
              Reset
            </button>
          </div>
          <div>
            <button onClick={decrement} className="bg-danger text-white">
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
