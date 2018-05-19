import React from "react";
import { Plus } from "react-feather";
import Link from "react-router-dom/Link";
import Group from "../components/Group/Group";
import Button from "../components/Button/Button";
import Content from "../components/Content/Content";
import { getGroups } from "../api/discover";

class GroupsView extends React.Component {
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
        <section style={{ padding: "0 15px 15px 15px" }}>
          <Link to="/discover">
            <Button fullWidth>
              <Plus /> Discover new
            </Button>
          </Link>
        </section>
        {groups.map((group, i) => (
          <Link to={`/group/${group.id}`} key={group.id}>
            <Group {...group} />
          </Link>
        ))}
      </Content>
    );
  }
}

export default GroupsView;
