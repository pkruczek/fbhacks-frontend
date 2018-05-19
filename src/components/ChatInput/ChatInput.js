import React from "react";
import "./ChatInput.css";

class ChatInput extends React.Component {
  state = {
    message: ""
  };

  handleInput = e => this.setState({ message: e.target.value });

  onSend = () => this.setState({ message: "" });

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
        <button
          onClick={() => {
            this.onSend();
            this.props.onSend(message);
          }}
        >
          SEND
        </button>
      </div>
    );
  }
}

export default ChatInput;
