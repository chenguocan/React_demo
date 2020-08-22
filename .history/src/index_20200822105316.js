import React from 'react';
import ReactDOM from 'react-dom';
import "./style.css"
let arrStyle = ["abc,bgRed"].join(" ");
console.log(arrStyle);
let element = (
  <div>
    <h1 className={arrStyle[0]}>helloworld</h1>
  </div>
)
ReactDOM.render(element, document.querySelector("#root"));