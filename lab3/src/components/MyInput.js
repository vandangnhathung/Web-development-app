import React from "react";

class MyInput extends React.Component {
  onChange() {
    console.log("changed");
  }
  onBlur() {
    console.log("blurred");
  }
  render() {
    return <input onChange={this.onChange} onBlur={this.onBlur} type="text" />;
  }
}

export default MyInput;
