import React from "react";
import "./ChatInput.css";

class ChatInput extends React.Component {
  state = {
    message: ""
  };

  handleInput = e => this.setState({ message: e.target.value });

  render() {
    const { message } = this.state;
    return (
      <div className="ChatInput">
        <input
          type="text"
          value={message}
          onChange={this.handleInput}
          placeholder="Send message"
        />
        <button onClick={() => this.props.onSend(message)}>SEND</button>
      </div>
    );
  }
}

export default ChatInput;
