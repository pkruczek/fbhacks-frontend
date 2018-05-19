// @flow
import React from "react";
import type { User } from "../model/profile";
import user from "../../mock/profile";
import integrations from "../../mock/integrations";
import ProfilePic from "../ProfilePic/ProfilePic";

class Profile extends React.Component {
  user: User = user;

  render() {
    return (
      <div>
        <ProfilePic src={user.photoUrl} big />
        <h2>{user.name}</h2>
      </div>
    );
  }
}

export default Profile;
