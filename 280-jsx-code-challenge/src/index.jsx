//Create a react app from scratch.
import React from "react";
import ReactDom from "react-dom";

//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
ReactDom.render(
    <div>
        <h1>Hello! My favourite foods are:</h1>
        <ul>
            <li>Pizza</li>
            <li>Pasta</li>
            <li>Noodles</li>
        </ul>
    </div>, 
    document.getElementById("root")
);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
