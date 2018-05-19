import React from "react";
import Content from "../components/Content/Content";
import ChatInput from "../components/ChatInput/ChatInput";
import Message from "../components/Message/Message";
import { me } from "../api/user";
import { getAllMessages, sendMessage } from "../api/chat";
import { getGroup } from "../api/discover";
import "./ChatView.css";

class ChatView extends React.Component {
  state = {};

  componentDidMount = async () => {
    const groupId = this.props.match.params.groupId;
    const [user, messages, group] = await Promise.all([
      me(),
      getAllMessages(),
      getGroup(groupId)
    ]);
    this.setState({ user, messages, group });
  };
  handleSend = async message => {
    const groupId = this.props.match.params.groupId;
    await sendMessage(message, this.state.user, groupId);
    const messages = await getAllMessages(groupId);
    this.setState({ messages });
  };

  render() {
    const { messages, user, group } = this.state;
    if (!user) {
      return <div />;
    }

    return (
      <div className="ChatView">
        <Content>
          <h2 className="ChatView__title">{group.tag}</h2>
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
