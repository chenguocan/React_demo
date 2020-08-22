import React from 'react';
import ReactDOM from 'react-dom';
import "./style.css"
let arrStyle = ["abc,bgRed"]
let element = (
  <div>
    <h1 className={arrStyle}>helloworld</h1>
  </div>
)
ReactDOM.render(element, document.querySelector("#root"));