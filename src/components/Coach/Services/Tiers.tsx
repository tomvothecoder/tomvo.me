import Tier from "components/Coach/Services/Tier";
import React from "react";

const Tiers: React.FC = () => {
  const tiers = [
    {
      tier: 1,
      price: 99,
      targetClient:
        "For those who want help with goal setting and programming.",
      services: [
        "Custom and comprehensive workout plans",
        "Weekly progress review (email/message)",
        "Monthly video check-in",
        "24-hour access for questions, form checks, etc.",
      ],
      nonServices: ["Nutrition and supplementation guidance"],
    },
    {
      tier: 2,
      price: 149,
      targetClient:
        "Tier 1 with dedicated nutrition and supplementation guidance.",
      services: [
        "Custom and comprehensive workout plans",
        "Weekly progress review (email/message)",
        "Monthly video check-in",
        "24-hour access for questions, form check, etc.",
        "Nutrition and supplementation guidance",
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
                price={tier.price}
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
