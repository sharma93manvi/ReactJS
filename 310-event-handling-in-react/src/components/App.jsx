import React from "react";
import { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  
  function handleClick(){
    // console.log("clicked!");
    setHeadingText("Submitted!");
  }

  function handleMouseOver(){
    
  }

  function handleMouseOut(){
    
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button style={{ backgroundColor: "white" }}
        onClick={handleClick} 
        onMouseOver={handleMouseOver} 
        onMouseOut={handleMouseOut} >
          Submit
      </button>
    </div>
  );
}

export default App;
