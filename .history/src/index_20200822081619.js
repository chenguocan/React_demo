import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
// let app = <App />
// let root = document.getElementById("root");

// ReactDOM.render(app, root);

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
function clock() {
  let time = new Date().toDateString();
  let element = <h1>现在的时间是:{time}</h1>
  let root = document.querySelector("#root");
  ReactDOM.render(element, root)
}
clock();
