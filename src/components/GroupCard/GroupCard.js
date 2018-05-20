import React from "react";
import "./GroupCard.css";
import Button from "../Button/Button";
import ProfilePic from "../ProfilePic/ProfilePic";
import { UserPlus, Plus } from "react-feather";

class GroupCard extends React.Component {
  render() {
    const { group, create } = this.props;
    return (
      <div className="GroupCard">
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
              {group.peopleCount} members
            </div>
          )}
        </div>
        {create ? (
          <Button fullWidth>
            <Plus size={18} />CREATE
          </Button>
        ) : (
          <Button fullWidth>
            <UserPlus size={18} />JOIN
          </Button>
        )}
      </div>
    );
  }
}

export default GroupCard;
