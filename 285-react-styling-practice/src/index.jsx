//Create a React app from scratch.
import React from "react";
import ReactDom from "react-dom";

//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
ReactDom.render (
        <h1 className="heading">Good morning</h1>,
        document.getElementById("root")
);


