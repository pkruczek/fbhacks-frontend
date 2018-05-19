import React from "react";
import integrations from "../../mock/integrations";
import user from "../../mock/profile";
import classnames from "classnames";

const Integration = ({ name, added }) => {
  const className = classnames("Integration", {
    "Integration--addded": added
  });

  return <div className={className}>{name}</div>;
};

class Integrations extends React.Component {
  render() {
    const addedIntegrations = user.integrations;
    const availableIntegrations = integrations.filter(i =>
      addedIntegrations.includes(i)
    );

    return (
      <div>
        {addedIntegrations.map(integr => (
          <Integration name={integr} added key={integr} />
        ))}
      </div>
    );
  }
}

export default Integrations;
