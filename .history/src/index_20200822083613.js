import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
//import * as serviceWorker from './serviceWorker';
// let app = <App />
// let root = document.getElementById("root");

// ReactDOM.render(app, root);

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
// function clock() {
//   let time = new Date().toTimeString();
//   let element = (
//     <div>
//       <h1>现在的时间是:{time}</h1>
//       <h2>这是副标题</h2>
//     </div>
//   )
//   let root = document.querySelector("#root");
//   ReactDOM.render(element, root)
// }
// clock();

// setInterval(clock, 1000);
//函数式组件
function Clock(props) {
  return (
    <div>
      <h1>现在的时间是:{props.date.toString()}</h1>
      <h2>这是副标题</h2>
    </div>
  )
}
function run() {
  ReactDOM.render(
    <Clock date={new Date()} />,
    document.querySelector("#root")
  )
}
setInterval(run, 1000);