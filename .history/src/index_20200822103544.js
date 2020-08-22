import React from 'react';
import ReactDOM from 'react-dom';
import "./style.css"
let exampleStyle = {
  background: "skyblue",
  borderBottom: "1px solid red"
}
let element = (
  <div>
    <h1 style={exampleStyle}></h1>
  </div>
)
ReactDOM.render(element, document.querySelector("#root"));