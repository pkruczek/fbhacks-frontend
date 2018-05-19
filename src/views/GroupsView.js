import React from "react";
import groups from "../mock/groups";
import Group from "../components/Group/Group";

class GroupsView extends React.Component {
  render() {
    return <div>{groups.map((group, i) => <Group key={i} {...group} />)}</div>;
  }
}

export default GroupsView;
