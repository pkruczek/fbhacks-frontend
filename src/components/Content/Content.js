import React from "react";
import classnames from "classnames";
import "./Content.css";

class Content extends React.Component {
  render() {
    const className = classnames("Content", {
      "Content--full-height": this.props.fullHeight
    });
    return <div className={className}>{this.props.children}</div>;
  }
}

export default Content;
