// @flow
import React from "react";
import type { User } from "../model/profile";
import user from "../../mock/profile";
import integrations from "../../mock/integrations";
import ProfilePic from "../ProfilePic/ProfilePic";
import "./Profile.css";

class Profile extends React.Component {
  user: User = user;

  render() {
    return (
      <div className="Profile">
        <ProfilePic src={user.photoUrl} big />
        <h2 className="Profile-name">{user.name}</h2>
      </div>
    );
  }
}

export default Profile;
