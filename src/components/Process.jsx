import Section from "./Section.jsx";

const processSteps = [
  ["01", "Discovery call", "A free 15-minute call to understand your idea, goals, and budget. No pressure, no jargon, just a conversation."],
  ["02", "Proposal & plan", "You receive a clear proposal with scope, timeline, and fixed pricing within 48 hours of your call."],
  ["03", "We build", "Our team builds your product using the best tools and AI-assisted development: fast, clean, and scalable."],
  ["04", "You launch", "We hand over a polished, scalable product and stay with you for support, updates, and growth."],
];

export default function Process() {
  return (
    <Section id="process" tone="light">
      <div className="section-tag">THE PROCESS</div>
      <div className="section-title">From idea to live in 4 steps</div>
      <p className="section-sub">Simple, transparent, and designed to move at startup speed.</p>
      <div className="steps">
        {processSteps.map(([num, title, text], index) => (
          <div className={`step ${index === 0 ? "active" : ""}`} key={num}>
            <div className="step-num">{num}</div>
            <div className="step-body">
              <h4>{title}</h4>
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
