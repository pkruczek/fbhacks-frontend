import React from "react";
import { Plus } from "react-feather";
import groups from "../mock/groups";
import Group from "../components/Group/Group";
import Button from "../components/Button/Button";
import Content from "../components/Content/Content";
import Link from "react-router-dom/Link";

class GroupsView extends React.Component {
  render() {
    return (
      <Content>
        <section style={{ padding: "0 15px 15px 15px" }}>
          <Link to="/discover">
            <Button fullWidth>
              <Plus /> Discover new
            </Button>
          </Link>
        </section>
        {groups.map((group, i) => <Group key={i} {...group} />)}
      </Content>
    );
  }
}

export default GroupsView;
