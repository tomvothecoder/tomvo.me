import apple from "assets/services/apple.png";
import route from "assets/services/route.png";
import webcam from "assets/services/webcam.png";
import { CSSinJS } from "common/types";
import Service from "components/Coach/Services/Service";

const Services: React.FC = () => {
  const styles: CSSinJS = {
    service: {
      marginTop: "15px",
    },
  };

  const services = [
    {
      // <a href="https://www.flaticon.com/free-icons/end-to-end" title="end to end icons">End to end icons created by Muhammad_Usman - Flaticon</a>
      iconSrc: route,
      name: "End-to-End Programming System",
      bullets: [
        "Includes goal identification, initial assessment, program development, and post-program reflection",
        "Progressive overload with recovery management to make effective gains and avoid burn out",
        "Feedback driven and flexible to dynamic goals or life circumstances",
      ],
    },
    {
      // <a href="https://www.flaticon.com/free-icons/fruit" title="fruit icons">Fruit icons created by Freepik - Flaticon</a>
      iconSrc: apple,
      name: "Habit-Based Nutritional Coaching",
      bullets: [
        "Focus on strategies to improve nutrition through education, accountability, and behavior changes",
        "Develop habits and behaviors for long-term benefits to your health and wellbeing",
        "Incorporate consistent meal timing and well-balanced diets (no strict meal planning!)"

      ],
    },
    {
      // <a href="https://www.flaticon.com/free-icons/cam" title="cam icons">Cam icons created by Vectors Market - Flaticon</a>
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
      {services.map((service) => (
        <div key={service.name} style={styles["service"]}>
          <Service
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

export default Services;
