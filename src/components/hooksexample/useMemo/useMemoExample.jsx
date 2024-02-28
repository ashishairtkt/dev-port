import React, { useState, useMemo } from "react";

export default function useMemoExample() {
  const [counterone, setCounterOne] = useState(0);
  const [countertwo, setCounterTwo] = useState(0);

  const handleIncrementOne = () => {
    setCounterOne((prevCount) => prevCount + 1);
  };

  const handleIncrementTwo = () => {
    setCounterTwo((prevCount) => prevCount - 1);
  };
  const isEven = useMemo(() => {
    return counterone % 2 === 0;
  }, [counterone]);
  return (
    <div>
      {" "}
      <br />
      <button onClick={handleIncrementOne}>
        Count one - {counterone}
      </button>{" "}
      &nbsp;
      <button onClick={handleIncrementTwo}>Count two - {countertwo}</button>
      &nbsp;&nbsp;&nbsp;
      <span>{isEven ? "Even" : "odd"}</span>
    </div>
  );
}
