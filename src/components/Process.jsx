import Section from "./Section.jsx";

const processSteps = [
  {
    num: "01",
    title: "Discovery",
    text:
      "We start with a focused conversation to understand your idea, business goals, users, budget, and timeline.",
  },
  {
    num: "02",
    title: "Strategy & scope",
    text:
      "We define the right solution, agree on the features that matter most, and prepare a clear project plan before development begins.",
  },
  {
    num: "03",
    title: "Design & build",
    text:
      "We design and build your website, MVP, app, or business system using modern tools, clean structure, and AI-assisted workflows.",
  },
  {
    num: "04",
    title: "Launch & support",
    text:
      "We test, deploy, and help you go live with confidence — then remain available for updates, improvements, and long-term growth.",
  },
];

export default function Process() {
  return (
    <Section id="process" tone="light">
      <div className="section-tag">THE PROCESS</div>

      <h2 className="section-title">From idea to launch with a clear plan.</h2>

      <p className="section-sub">
        A simple, transparent delivery process designed to help founders and
        businesses move quickly without losing structure or quality.
      </p>

      <div className="steps">
        {processSteps.map((step, index) => (
          <article
            className={`step ${index === 0 ? "active" : ""}`}
            key={step.num}
          >
            <div className="step-num">{step.num}</div>

            <div className="step-body">
              <h4>{step.title}</h4>
              <p>{step.text}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
