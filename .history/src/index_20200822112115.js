import React from 'react';
import ReactDOM from 'react-dom';
import "./style.css"
function Component() {
  return (
    <div>
      <h1>HelloWorld</h1>
    </div>
  )
}
ReactDOM.render(<Component />, document.querySelector("#root"));