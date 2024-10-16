/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Team = () => {
  const [count, setCount] = useState(0);
  const handlePlayerAdd = () => {
    setCount(count + 1);
  };
  const handlePlayerRemove = () => {
    setCount(count - 1);
  };
  const teamStyle = {
    border: "2px solid purple",
    margin: "15px",
    padding: "15px",
    borderRadius: "15px",
  };
  return (
    <div style={teamStyle}>
      <h3>Players: {count}</h3>
      <button onClick={handlePlayerAdd} style={{ border: "1px dotted black" }}>
        Add Player
      </button>
      <button
        onClick={handlePlayerRemove}
        style={{ border: "1px dotted black" }}
      >
        Remove Player
      </button>
    </div>
  );
};

export default Team;
