import React from "react";
import "./GroupCard.css";
import Button from "../Button/Button";
import ProfilePic from "../ProfilePic/ProfilePic";

class GroupCard extends React.Component {
  render() {
    const group = this.props.group;
    return (
      <div className="GroupCard">
        <div className="GroupCard__label">Common interest</div>
        <div className="GroupCard__interest">{group.tag}</div>
        <div className="GroupCard__members">
          <div className="GroupCard__members-pics">
            {group.peopleImages.map(src => <ProfilePic src={src} tiny />)}
          </div>
          <div className="GroupCard__members-text">
            Already {group.peopleCount} members
          </div>
        </div>
        <Button fullWidth>JOIN</Button>
      </div>
    );
  }
}

export default GroupCard;