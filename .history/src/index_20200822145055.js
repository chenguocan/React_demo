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
//类组件
class Com extends React.Component {
  render() {
    console.log(this.props.name);
    return (
      <div>
        <h1>类组件HelloWorld</h1>
        <Component />
      </div>
    )
  }
}
ReactDOM.render(<Com name="chenguocan" />, document.querySelector("#root"));