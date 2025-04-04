import React from "react";
import Login from "./login";
import Header from "./Header";

var isLoggedIn = false;
var currentTime = new Date().getHours();

console.log(currentTime);

function App() {
  return (
    <div className="container">{
      // isLoggedIn === true ? <Header /> : <Login />  
      currentTime > 12 ? <h1> Why are you still working? </h1> : null
    } 
    </div>
  );
}

export default App;
