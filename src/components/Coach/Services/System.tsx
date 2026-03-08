import {
  faAppleWhole,
  faArrowsRotate,
  faClipboardList,
  faDumbbell,
} from "@fortawesome/free-solid-svg-icons";
import SystemComponent from "components/Coach/Services/SystemComponent";

const System: React.FC = () => {
  const systemComponents = [
    {
      icon: faClipboardList,
      iconClassName: "coach-icon-badge coach-icon-badge--a",
      name: "1) Assess and Plan",
      bullets: [
        "Define your goal, training history, and constraints.",
        "Build a personalized plan for strength, physique, or performance.",
      ],
    },
    {
      icon: faDumbbell,
      iconClassName: "coach-icon-badge coach-icon-badge--b",
      name: "2) Execute and Progress",
      bullets: [
        "Train with clear volume, intensity, and progression targets.",
        "Use RPE and performance data to keep progress measurable.",
      ],
    },
    {
      icon: faArrowsRotate,
      iconClassName: "coach-icon-badge coach-icon-badge--d",
      name: "3) Review and Adjust",
      bullets: [
        "Weekly check-ins and form reviews to remove bottlenecks.",
        "Adjust training quickly around recovery, schedule, or goal changes.",
      ],
    },
    {
      icon: faAppleWhole,
      iconClassName: "coach-icon-badge coach-icon-badge--c",
      name: "4) Support with Nutrition Habits",
      bullets: [
        "Use practical nutrition habits to improve recovery and consistency.",
        "Focus on sustainable behavior change, not rigid meal rules.",
      ],
    },
  ];

  return (
    <section>
      {systemComponents.map((service) => (
        <div key={service.name} className="coach-system-item">
          <SystemComponent
            icon={service.icon}
            iconClassName={service.iconClassName}
            name={service.name}
            bullets={service.bullets}
          />
        </div>
      ))}
    </section>
  );
};

export default System;
