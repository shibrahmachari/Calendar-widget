import React from "react";
import "./Button.css";
class PopUpButton extends React.Component {
  render() {
    return (
      <div className="tasks">
        <button>{this.props.name}</button>
      </div>
    );
  }
}
export default PopUpButton;
