import React from "react";
import "./GroupCard.css";
import Button from "../Button/Button";
import ProfilePic from "../ProfilePic/ProfilePic";

class GroupCard extends React.Component {
  render() {
    const { group, create } = this.props;
    return (
      <div className="GroupCard">
        <div className="GroupCard__label">Common interests</div>
        <div className="GroupCard__interest">{group.tag}</div>
        <div className="GroupCard__members">
          <div className="GroupCard__members-pics">
            {group.peopleImages.map((src, i) => (
              <ProfilePic src={src} tiny key={i} />
            ))}
          </div>
          {create ? (
            <div className="GroupCard__members-text">
              Found {group.peopleCount} users with similar interests
            </div>
          ) : (
            <div className="GroupCard__members-text">
              Already {group.peopleCount} members
            </div>
          )}
        </div>
        {create ? (
          <Button fullWidth>CREATE</Button>
        ) : (
          <Button fullWidth>JOIN</Button>
        )}
      </div>
    );
  }
}

export default GroupCard;
