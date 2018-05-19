import React from "react";
import "./NavBar.css";

class NavBar extends React.Component {
  render() {
    return <div className="NavBar">{this.props.children}</div>;
  }
}

export default NavBar;
