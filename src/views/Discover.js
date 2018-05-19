import React from "react";
import Content from "../components/Content/Content";
import GroupCard from "../components/GroupCard/GroupCard";
import groups from "../mock/groups";

class Discover extends React.Component {
  render() {
    return (
      <Content>{groups.map(group => <GroupCard group={group} />)}</Content>
    );
  }
}

export default Discover;
