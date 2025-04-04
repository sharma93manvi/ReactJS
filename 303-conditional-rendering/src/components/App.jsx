import React from "react";
import Login from "./login";
import Header from "./Header";

var isLoggedIn = false;

function renderConditionally(){
  if(isLoggedIn){
    return <Header />;
  }else{
    return <Login />;
  }

}


function App() {
  return (
    <div className="container">
      {renderConditionally()}
    </div>
  );
}

export default App;
