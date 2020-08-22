import React from 'react';
import ReactDOM from 'react-dom';
let color = "bgRed"
let logo = "https://img.jk51.com/img_jk51/777682777.jpeg"
let element = (
  <div className={color}>
    <img src={logo}></img>
  </div>
)
ReactDOM.render(element, document.querySelector("#root"));