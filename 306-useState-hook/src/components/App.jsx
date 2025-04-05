import React, {useState} from "react";

function App() {
    const [count, setCount] =  useState(0);

    //Destructuring Example
    // const [red, green, blue] = [9, 132, 227]
    // console.log(blue);

    function increase() {
      // count++;
      setCount(count+1);
    }

    return(
      <div className="container">
        <h1>{count}</h1>
        <button onClick={increase}>+</button>
      </div>
    );
}
export default App;
