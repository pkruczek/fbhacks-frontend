import React from "react";
import Content from "../components/Content/Content";
import ChatInput from "../components/ChatInput/ChatInput";

class ChatView extends React.Component {
  render() {
    const id = this.props.match.params.groupId;
    console.log(id);
    console.log(this.props.match);
    return (
      <div className="ChatView">
        <Content>
          {this.props.match.groupId}
          {id}
        </Content>
        <ChatInput />
      </div>
    );
  }
}

export default ChatView;
