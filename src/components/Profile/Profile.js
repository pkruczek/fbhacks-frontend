// @flow
import React from "react";
import ProfilePic from "../ProfilePic/ProfilePic";
import "./Profile.css";
import { me } from "../../api/user";

class Profile extends React.Component {
  state = {};

  async componentDidMount() {
    const user = await me();
    this.setState({ user });
  }

  render() {
    const { user } = this.state;
    if (!user) {
      return <div />;
    }
    return (
      <div className="Profile">
        <ProfilePic src={user.photoUrl} big />
        <h2 className="Profile-name">{user.name}</h2>
      </div>
    );
  }
}

export default Profile;
