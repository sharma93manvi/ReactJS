import React from "react";
import { useState } from "react";

function App() {

  //Use name as single source of truth
  const [name, setName] = useState("");
  const [header, setHeader] = useState("");

  function handleChange() {
    // console.log(event.target.placeholder);
    // console.log(event.target.type);
    // console.log(event.target.value);
    setName(event.target.value);
  }

  function handleSubmit() {
    console.log("Submitted!");
    setHeader(name);
  }

  return (
    <div className="container">
      <h1>Hello {header}</h1>
      <input 
        onChange={handleChange}
        type="text" 
        placeholder="What's your name?" 
        // value={name}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
