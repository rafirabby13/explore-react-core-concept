/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount(count + 1);
  };
  const handleReduce = () => {
    count > 0 ? setCount(count - 1) : alert("count is already 0");
  };
  return (
    <div>
      <h3>Counter: {count}</h3>
      <button onClick={handleCount}>Add</button>
      <button onClick={handleReduce}>Reduce</button>
    </div>
  );
};

export default Counter;
