import React from 'react';
import ReactDOM from 'react-dom';
import "./style.css"
function element() {
  return (
    <div>
      <h1>HelloWorld</h1>
    </div>
  )
}
ReactDOM.render(<element />, document.querySelector("#root"));