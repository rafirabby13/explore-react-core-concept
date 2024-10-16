/* eslint-disable no-unused-vars */

import "./App.css";
import Counter from "./Counter.jsx";
import Friends from "./Friends.jsx";
import Team from "./Team.jsx";
import Users from "./Users.jsx";

function App() {
  function handleClick() {
    alert("btn clicked");
  }
  const handleClick2 = () => {
    alert("btn 2 clicked");
  };
  const addTOFive = (num) => {
    alert(num + 5);
  };
  return (
    <>
      <h3>React Core concept 2</h3>
      <Friends></Friends>
      <Users></Users>

      <Counter></Counter>
      <Team></Team>


      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>click 2</button>
      <button onClick={() => alert("btn 3 clicked")}>click 3</button>
      {/* vejailla..... */}
      <button onClick={() => addTOFive(-1)}>Four</button>
    </>
  );
}

export default App;
