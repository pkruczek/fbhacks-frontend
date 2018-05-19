import React from "react";
import "./Content.css";

class Content extends React.Component {
  render() {
    return <div className="Content">{this.props.children}</div>;
  }
}

export default Content;
