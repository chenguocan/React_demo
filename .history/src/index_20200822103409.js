import React from 'react';
import ReactDOM from 'react-dom';
import "./style.css"
let color = "bgRed"
let logo = "https://img.jk51.com/img_jk51/777682777.jpeg"
let element = (
  <div className={color}>
    <img src={logo} alt="图片" />
  </div>
)
ReactDOM.render(element, document.querySelector("#root"));