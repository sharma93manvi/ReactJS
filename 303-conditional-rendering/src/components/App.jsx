import React from "react";
import Login from "./login";
import Header from "./Header";

var isLoggedIn = false;

function App() {
  return (
    <div className="container">{
      isLoggedIn === true ? <Header /> : <Login />  
    } 
    </div>
  );
}

export default App;
