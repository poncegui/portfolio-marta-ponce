import { useState } from "react";
import "./counter.css";

const CounterBtn = () => {
  const [counter, SetCounter] = useState(42);

  const increment = () => {
    SetCounter(counter + 1);
  };

  return (
    <>
      <div>
        <h2 className="counter">{counter}</h2>
        <button className="counter-button" onClick={increment}>
          Click
        </button>
      </div>
    </>
  );
};

export default CounterBtn;
