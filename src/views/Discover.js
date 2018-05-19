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
        <h2 style={{ textAlign: "center", marginTop: "5px" }}>Join existing</h2>
        {groups.map(group => <GroupCard group={group} key={group.id} />)}
        <h2 style={{ textAlign: "center" }}>Create new</h2>
        <GroupCard
          group={{
            id: 10,
            peopleCount: 4,
            tag: "SpaceX, NASA",
            peopleImages: [
              "https://www.fakepersongenerator.com/Face/male/male20171086013288269.jpg",
              "https://www.fakepersongenerator.com/Face/female/female1022939203919.jpg",
              "https://www.fakepersongenerator.com/Face/male/male108414886914.jpg"
            ]
          }}
          create
        />
      </Content>
    );
  }
}

export default Discover;
