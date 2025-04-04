import React from "react";

var isDone = false;

function strike() {
  // document.getElementById("root").style.textDecoration = "line-through";
  isDone = true;
}

function unStrike() {
  // document.getElementById("root").style.textDecoration = null;
  isDone = false;
}

function App() {
  return  (
    <div>
      {
        <p style={isDone ? {textDecoration: "line-through"} : null }>Buy milk</p>
      }
    </div>
  );
}

export default App;
