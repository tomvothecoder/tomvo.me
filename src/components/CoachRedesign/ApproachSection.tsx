import PhotoSlot from "components/CoachRedesign/PhotoSlot";
import { photos } from "components/CoachRedesign/photos";

function ApproachSection() {
  const hasPhoto = Boolean(photos.coaching.src) || import.meta.env.DEV;

  return (
    <section
      id="approach"
      className={`strength-approach${hasPhoto ? " has-photo" : ""}`}
      aria-labelledby="approach-title"
    >
      <h2 id="approach-title">
        Exercise science informs the plan.{" "}
        <span>Your training tells us how to refine&nbsp;it.</span>
      </h2>
      <PhotoSlot
        photo={photos.coaching}
        className="strength-approach-photo"
        sizes="(min-width: 1264px) 584px, (min-width: 1024px) 46vw, calc(100vw - 48px)"
      />
      <div className="strength-approach-copy">
        <p>
          Coaching starts with your goals, training history, schedule, and
          equipment. That becomes your first training block: clear targets,
          useful coaching notes, and enough room for the life you actually live.
        </p>
        <p>
          From there, your program is reviewed every week. When a lift is moving
          well, it progresses. When recovery, stress, or technique gets in the
          way, the next week changes to match. We look at how you perform and
          recover, not just the weight on the bar.
        </p>
        <p>
          Movement prep and mobility are part of the work, not an afterthought.
          If something is bothering you, warm-ups and exercise choices can be
          modified so you keep training productively. Coaching is not a
          substitute for medical care.
        </p>
      </div>
    </section>
  );
}

export default ApproachSection;
