import React from "react";
import "./Button.css";
class PopUpButton extends React.Component {
  render() {
    return (
      <div className="tasks">
        <button> <p className="text"> {this.props.name} </p></button>
      </div>
    );
  }
}
export default PopUpButton;
