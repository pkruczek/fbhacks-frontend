import React from "react";
import { Check, Plus } from "react-feather";
import integrations from "../../mock/integrations";
import user from "../../mock/profile";
import classnames from "classnames";
import "./Integrations.css";

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
  render() {
    const addedIntegrations = user.integrations;
    const availableIntegrations = integrations.filter(
      i => !addedIntegrations.includes(i)
    );

    return (
      <div className="Integrations">
        <h2>Integrations</h2>
        {availableIntegrations.map(integr => (
          <Integration name={integr} key={integr} />
        ))}
        {addedIntegrations.map(integr => (
          <Integration name={integr} added key={integr} />
        ))}
      </div>
    );
  }
}

export default Integrations;
