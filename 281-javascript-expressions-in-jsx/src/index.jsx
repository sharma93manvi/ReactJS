import React from "react";
import ReactDOM from "react-dom";

const name = "Manvi";
const num = 6;

ReactDOM.render(
    <div>
        <h1>Hello {name}!</h1>
        <p>Your lucky number is {num}.</p>
    </div>, document.getElementById("root"));

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
