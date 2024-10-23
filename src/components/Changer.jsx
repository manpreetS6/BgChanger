import React, { useState } from "react";
import'./Changer.css'
const Changer = () => {
  const [bgColor, setBgColor] = useState("white");

  const changeColor = (color) => {
    setBgColor(color);
  };

  return (
    <div
      style={{ border:"2px solid black",backgroundColor: bgColor, height: "90vh", textAlign: "center",width:"105vh" }}
    >
      <h1>Background Changer</h1>
      <div className="buttons">
      <button onClick={() => changeColor("red")}>Red</button>
      <button onClick={() => changeColor("green")}>Green</button>
      <button onClick={() => changeColor("yellow")}>Yellow</button>
      <button onClick={() => changeColor("pink")}>Pink</button>
      </div>
    </div>
  );
};

export default Changer;
