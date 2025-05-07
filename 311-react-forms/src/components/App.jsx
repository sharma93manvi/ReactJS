import React from "react";
import { useState } from "react";

function App() {

  //Use name as single source of truth
  const [name, setName] = useState("");
  const [header, setHeader] = useState("");

  function handleChange(event) {
    // console.log(event.target.placeholder);
    // console.log(event.target.type);
    // console.log(event.target.value);
    setName(event.target.value);
  }

  function handleSubmit(event) {
    console.log("Submitted!");
    setHeader(name);

    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {header}</h1>
      <form onClick={handleSubmit}>
        <input 
          onChange={handleChange}
          type="text" 
          placeholder="What's your name?" 
          value={name}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
