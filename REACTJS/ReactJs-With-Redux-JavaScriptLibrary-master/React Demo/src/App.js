import React from "react";
import "./index.css";

export const App = ()=> {

  let name = "tarun";
  let myStyling = {
    color: 'red',
    background: 'black'
  };

  return(
    <div>
    <h1 style={myStyling}>Hello {name}, This Is My First React App</h1>
    <p className="myStyle">This Style Is Apply Through Index.css</p>
    <p className="myStyle">It Is {new Date().toLocaleTimeString()}</p>
    </div>
  );
}
