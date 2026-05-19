import Section from "./Section.jsx";
import whoWeServeNetworkColumn from "../../assets/who-we-serve-network-column.png";

export default function Services() {
  return (
    <Section id="services" tone="light">
      <div className="services-top">
        <div className="services-copy">
          <div className="section-tag">OUR SERVICES</div>
          <div className="section-title">What we build for you</div>
          <p className="section-sub">Everything a startup needs, to go from, an idea to a live digital product: fast, clean, and scalable.</p>
          <div className="serve-block">
            <div className="section-tag">WHO WE SERVE</div>
            <h3>Designed for early-stage startups and ambitious founders.</h3>
            <p>
              Fence works with founders who need more than a developer. They need a partner who understands speed, budget, growth, and execution.
            </p>
            <p>
              Our target markets include the United States, United Kingdom, and Africa, with a focus on helping founders build products that can compete globally.
            </p>
          </div>
        </div>
        <figure className="services-visual">
          <img src={whoWeServeNetworkColumn} alt="Interconnected startup audiences served by Fence" />
        </figure>
      </div>
    </Section>
  );
}
