import React from "react";
import classnames from "classnames";
import "./ProfilePic.css";

class ProfilePic extends React.Component {
  render() {
    const { src, big, tiny } = this.props;
    const className = classnames("ProfilePic", {
      "ProfilePic--big": big,
      "ProfilePic--tiny": tiny
    });
    return <img className={className} src={src} />;
  }
}

export default ProfilePic;
