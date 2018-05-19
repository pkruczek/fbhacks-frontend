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
        <div className="GroupImages">
          {group.peopleImages.map(src => <ProfilePic src={src} tiny />)}
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
