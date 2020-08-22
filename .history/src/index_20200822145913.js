import React from 'react';
import ReactDOM from 'react-dom';
import "./style.css"
function Component(props) {
  return (
    <div>
      <h1>HelloWorld</h1>
      <div>今天天气:{props.weather}</div>
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
        <Component weather="台风" />
      </div>
    )
  }
}
ReactDOM.render(<Com name="chenguocan" />, document.querySelector("#root"));