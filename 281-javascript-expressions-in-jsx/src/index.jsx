import React from "react";
import ReactDOM from "react-dom";

const fname = "Manvi";
const lname = "Sharma";
const num = 6;

ReactDOM.render(
    <div>
        {/* Method 1 to combine 2 strings in JSX  */}
        <h1>Hello {fname + " " + lname}!</h1>
         {/* Method 2 to combine 2 strings in JSX  */}
        {/* <h1>Hello {fname} {lname}!</h1> */}
        <p>Your lucky number is {Math.floor(Math.random() * 10)}.</p>
    </div>, 
    document.getElementById("root")
);


