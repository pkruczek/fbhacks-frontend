import React from "react";
import { Check, Plus } from "react-feather";
import integrations from "../../mock/integrations";
import classnames from "classnames";
import "./Integrations.css";
import { me } from "../../api/user";
import Link from "react-router-dom/Link";

const Integration = ({ name, added }) => {
  const className = classnames("Integration", {
    "Integration--addded": added
  });

  return (
    <div className={className}>
      {name}
      <div className="Integration-icon">{added ? <Check /> : <Plus />}</div>
    </div>
  );
};

class Integrations extends React.Component {
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
    const addedIntegrations = ["facebook", "twitter", "reddit"];
    const availableIntegrations = [];
    // const availableIntegrations = ["facebook", "twitter", "reddit"];
    return (
      <div className="Integrations">
        <h2>Integrations</h2>
        <a href={"http://localhost:8080/facebook-auth"}>
          <Integration name="Facebook" />
        </a>
      </div>
    );
  }
}

export default Integrations;
