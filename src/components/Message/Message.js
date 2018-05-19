import React from "react";
import classnames from "classnames";
import "./Message.css";

class Message extends React.Component {
  render() {
    const { name, pic, message, my } = this.props;
    const className = classnames("Message", {
      "Message--my": my
    });
    return (
      <div className={className}>
        <div className="Message__user">
          <img alt="user" src={pic} className="Message__pic" />
          <div className="Message__name">{name}</div>
        </div>
        <div className="Message__text">{message}</div>
      </div>
    );
  }
}

export default Message;
