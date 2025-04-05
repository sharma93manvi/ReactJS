import React, {useState} from "react";

function App() {
    const state =  useState(123);

    //Destructuring Example
    const [red, green, blue] = [9, 132, 227]
    console.log(blue);

    function increase() {
      // count++;
    }

    return(
      <div className="container">
        <h1>{state[0]}</h1>
        <button onClick={increase}>+</button>
      </div>
    );
}
export default App;
