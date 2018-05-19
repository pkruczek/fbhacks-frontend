import React from "react";
import Content from "../components/Content/Content";
import GroupCard from "../components/GroupCard/GroupCard";
import { getGroups } from "../api/discover";

class Discover extends React.Component {
  state = {};

  async componentDidMount() {
    const groups = await getGroups();
    this.setState({ groups });
  }

  render() {
    const { groups } = this.state;
    if (!groups) {
      return <div />;
    }
    return (
      <Content>
        {groups.map(group => <GroupCard group={group} key={group.id} />)}
      </Content>
    );
  }
}

export default Discover;
