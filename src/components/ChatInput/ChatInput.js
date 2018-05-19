import React from "react";
import "./ChatInput.css";

class ChatInput extends React.Component {
  state = {
    message: ""
  };

  handleInput = e => this.setState({ message: e.target.value });

  handleSend = e => {
    e.preventDefault();
    const { message } = this.state;
    this.props.onSend(message);
    this.setState({ message: "" });
  };

  render() {
    const { message } = this.state;
    return (
      <form className="ChatInput" onSubmit={this.handleSend}>
        <input
          type="text"
          value={message}
          onChange={this.handleInput}
          placeholder="Send message"
        />
        <button onClick={this.handleSend}>SEND</button>
      </form>
    );
  }
}

export default ChatInput;
