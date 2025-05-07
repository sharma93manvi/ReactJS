import React from "react";
import { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [isMouseOver, setMoverOver] = useState(false);
  
  function handleClick(){
    // console.log("clicked!");
    setHeadingText("Submitted!");
  }

  function handleMouseOver(){
    setMoverOver(true);
  }

  function handleMouseOut(){
    setMoverOver(false);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onClick={handleClick} 
        onMouseOver={handleMouseOver} 
        onMouseOut={handleMouseOut} >
          Submit
      </button>
    </div>
  );
}

export default App;
