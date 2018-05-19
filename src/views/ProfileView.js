import React from "react";
import Profile from "../components/Profile/Profile";
import Content from "../components/Content/Content";
import Integrations from "../components/Integrations/Integrations";

class ProfileView extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Content>
            <Profile />
          </Content>
        </div>
        <Content>
          <Integrations />
        </Content>
      </div>
    );
  }
}

export default ProfileView;
