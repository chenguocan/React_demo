import React from 'react';
import ReactDOM from 'react-dom';
import "./style.css"
let exampleStyle = {
  background: "blue",
  borderBottom: "1px solid red"
}
let color = "bgRed"
let element = (
  <div>
    <h1 class={color} style={exampleStyle}>helloworld</h1>
  </div>
)
ReactDOM.render(element, document.querySelector("#root"));