import Section from "./Section.jsx";
import lightsUp from "../../assets/lights-up.jpg";

const testimonials = [
  ["SK", "Sarah K.", "Founder, TalentFlow", "FENCEX took our idea from a sketch to a working product in 3 weeks. We could not believe how fast and clean it was."],
  ["JO", "James O.", "CEO, PayLink Africa", "As a non-technical founder I was terrified of the tech side. FENCEX explained everything clearly and delivered exactly what we needed."],
];

export default function Testimonials() {
  return (
    <Section tone="light">
      <div className="section-tag">WHAT FOUNDERS SAY</div>
      <div className="section-title">Built for founders like you</div>
      <p className="section-sub">Real words from real founders who trusted FENCEX with their digital foundation.</p>
      <div className="testimonials-layout">
        <div className="testimonials">
          {testimonials.map(([initials, name, role, quote]) => (
            <div className="testimonial" key={name}>
              <div className="stars">★★★★★</div>
              <p className="tq">"{quote}"</p>
              <div className="ta">
                <div className="ta-av">{initials}</div>
                <div><div className="ta-name">{name}</div><div className="ta-role">{role}</div></div>
              </div>
            </div>
          ))}
        </div>
        <figure className="testimonials-image">
          <img src={lightsUp} alt="Bright workspace lights representing startup momentum" />
        </figure>
      </div>
    </Section>
  );
}
