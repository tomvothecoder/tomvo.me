import Tier from "components/Coach/Services/Tier";
import React from "react";

const Tiers: React.FC = () => {
  const tiers = [
    {
      tier: 1,
      targetClient:
        "For those who want help with goal setting and programming.",
      services: [
        "Custom workout plans",
        "Weekly progress review",
        "Monthly video check-in",
        "24-hr access for questions",
      ],
      nonServices: ["Nutrition and supplementation"],
    },
    {
      tier: 2,
      targetClient:
        "Tier 1 with dedicated nutrition and supplementation guidance.",
      services: [
        "Custom workout plans",
        "Weekly progress review",
        "Monthly video check-in",
        "24-hr access for questions",
        "Nutrition and supplementation",
      ],
      nonServices: [],
    },
  ];

  return (
    <section>
      <div className="container">
        <div className="columns is-centered">
          {tiers.map((tier) => (
              <Tier
                key={tier.tier}
                tier={tier.tier}
                targetClient={tier.targetClient}
                services={tier.services}
                nonServices={tier.nonServices}
              />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tiers;
