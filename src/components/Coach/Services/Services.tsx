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
      name: "End-to-end online coaching system",
      bullets: [
        "Includes assessment, goal identification, program development, and post-program retrospective",
        "Progression schemes with recovery management to make effective gains and avoid burn-out",
        "A flexible and adaptable to dynamic goals and life circumstances",
      ],
    },
    {
      // <a href="https://www.flaticon.com/free-icons/cam" title="cam icons">Cam icons created by Vectors Market - Flaticon</a>
      iconSrc: webcam,
      name: "Active check-ins",
      bullets: [
        "Assess how you are doing and make program micro/macro adjustments if needed",
        "Make sure you’re having fun!",
        "Perform form-checks to ensure safe and optimal technique with efficient movement patterns",
      ],
    },
    {
      // <a href="https://www.flaticon.com/free-icons/fruit" title="fruit icons">Fruit icons created by Freepik - Flaticon</a>
      iconSrc: apple,
      name: "General health guidance",
      bullets: [
        "Focus on sustainable and healthy practices to effectively achieve goals",
        "Emphasis on balanced and flexible nutrition",
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
