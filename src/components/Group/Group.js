// @flow
import React from "react";
import ProfilePic from "../ProfilePic/ProfilePic";
import "./Group.css";

type GroupType = {
  name: string,
  peopleCount: number,
  tag: string,
  peopleImages: string[]
};

class Group extends React.Component<GroupType> {
  render() {
    const group = this.props;
    return (
      <div className="Group">
        <div className="GroupImages" style={{ display: "flex" }}>
          {group.peopleImages.map((src, i) => (
            <ProfilePic src={src} tiny key={i} />
          ))}
        </div>
        <div className="Group-info">
          <div className="Group-name">{group.tag}</div>
          <div className="Group-count">{group.peopleCount} people</div>
        </div>
      </div>
    );
  }
}

export default Group;
