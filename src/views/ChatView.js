import React from "react";
import Content from "../components/Content/Content";
import ChatInput from "../components/ChatInput/ChatInput";
import Message from "../components/Message/Message";
import { me } from "../api/user";
import { getAllMessages, sendMessage } from "../api/chat";

class ChatView extends React.Component {
  state = {};

  async componentDidMount() {
    const [user, messages] = await Promise.all([me(), getAllMessages()]);
    this.setState({ user, messages });
  }
  handleSend = async message => {
    const groupId = this.props.match.groupId;
    await sendMessage(message, this.state.user, groupId);
    const messages = await getAllMessages(groupId);
    this.setState({ messages });
  };

  render() {
    const { messages, user } = this.state;
    if (!user) {
      return <div />;
    }
    const id = this.props.match.params.groupId;

    return (
      <div className="ChatView">
        <Content>
          {this.props.match.groupId}
          {id}
          <div
            className="Messages"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start"
            }}
          >
            {messages.map((m, i) => (
              <Message key={i} my={m.name === user.name} {...m} />
            ))}
          </div>
        </Content>
        <ChatInput onSend={this.handleSend} />
      </div>
    );
  }
}

export default ChatView;
