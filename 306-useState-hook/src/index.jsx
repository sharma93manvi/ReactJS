import React from "react";
import ReactDOM from "react-dom";

var count = 0;

function increase() {
  count++;
  //Call ReactDom.render all over again inside the function & count on screen will increase
  ReactDOM.render(
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
    </div>,
    document.getElementById("root")
  );
}

ReactDOM.render(
  <div className="container">
    <h1>{count}</h1>
    <button onClick={increase}>+</button>
  </div>,
  document.getElementById("root")
);
