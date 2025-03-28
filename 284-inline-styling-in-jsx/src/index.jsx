import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
    color: "red",
    fontSize: "20px",
    border: "1px solid black"
};

/*Any of the property value can be changed on the go*/
customStyle.color = "blue"

ReactDOM.render(
    <h1 style={customStyle}>Hello World!</h1>, 
    document.getElementById("root")
);
