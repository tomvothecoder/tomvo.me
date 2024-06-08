import apple from "assets/services/apple.png";
import barbell from "assets/services/gold-medal.png";
import route from "assets/services/route.png";
import webcam from "assets/services/webcam.png";
import { CSSinJS } from "common/types";
import SystemComponent from "components/Coach/Services/SystemComponent";

const System: React.FC = () => {
  const styles: CSSinJS = {
    service: {
      marginTop: "15px",
    },
  };

  const systemComponents = [
    {
      // <a href="https://www.flaticon.com/free-icons/medal" title="medal icons">Medal icons created by Pixel Buddha - Flaticon</a>
      iconSrc: barbell,
      name: "Powerlifting Training and Meet Prep",
      bullets: [
        "Off-season programming based on athlete-specific volume, frequency, and periodization scheme",
        "Meet prep includes a 4-6 week peaking program, weekly calls, and attempt strategizing",
      ],
    },
    {
      // <a href="https://www.flaticon.com/free-icons/end-to-end" title="end to end icons">End to end icons created by Muhammad_Usman - Flaticon</a>
      iconSrc: route,
      name: "End-to-End Programming System",
      bullets: [
        "Goal identification, initial assessment, program development, and week-to-week adjustments",
        "Progressive overload and recovery management for effective gains",
        "Feedback-driven with flexibility to accomodate changing goals or life circumstances",
      ],
    },
    {
      // <a href="https://www.flaticon.com/free-icons/fruit" title="fruit icons">Fruit icons created by Freepik - Flaticon</a>
      iconSrc: apple,
      name: "Habit-Based Nutrition Coaching",
      bullets: [
        "Focus on strategies to improve nutrition through education, accountability, and behavior changes",
        "Develop habits and behaviors for long-term benefits to your health and wellbeing",
        "Integrate sustainable meal timing practices and well-balanced diets (no strict meal planning!)",
      ],
    },
    {
      // <a href="https://www.flaticon.com/free-icons/webcam" title="webcam icons">Webcam icons created by Vectors Market - Flaticon</a>
      iconSrc: webcam,
      name: "Active Check-Ins",
      bullets: [
        "Gather feedback to make micro/macro adjustments to your program if needed",
        "Assess how you are doing, answer your questions, and make sure you're having fun!",
        "Perform form-checks to ensure safe and optimal technique",
      ],
    },
  ];

  return (
    <section>
      {systemComponents.map((service) => (
        <div key={service.name} style={styles["service"]}>
          <SystemComponent
            key={service.name}
            iconSrc={service.iconSrc}
            name={service.name}
            bullets={service.bullets}
          />
        </div>
      ))}
    </section>
  );
};

export default System;
