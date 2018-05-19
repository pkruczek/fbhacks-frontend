import React from "react";
import classnames from "classnames";
import "./Button.css";

class Button extends React.Component {
  render() {
    const className = classnames("Button", {
      "Button--fullwidth": this.props.fullWidth
    });
    return <button className={className}>{this.props.children}</button>;
  }
}

export default Button;
