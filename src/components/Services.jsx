import Section from "./Section.jsx";
import earlyStageStartups from "../../assets/early-stage-startups.png";
import saasStartups from "../../assets/saas-startups.png";
import preSeedToSeriesA from "../../assets/pre-seed-to-series-a.png";
import fintechStartups from "../../assets/fintech-startups.png";
import nonTechnicalFounders from "../../assets/non-technical-founders.png";
import eCommerceBusinesses from "../../assets/e-commerce-businesses.png";
import smallBusinessesScaling from "../../assets/small-businesses-scaling.png";
import serviceBasedStartups from "../../assets/service-based-startups.png";

const services = [
  {
    icon: "🌐",
    title: "Business Websites",
    description:
      "Modern websites that explain your business clearly, build trust, and turn visitors into enquiries.",
    tag: "Web Design",
  },
  {
    icon: "🚀",
    title: "Startup MVPs",
    description:
      "Lean first versions of your product, built quickly so you can test your idea with real users.",
    tag: "MVP Build",
  },
  {
    icon: "📊",
    title: "SaaS Platforms",
    description:
      "Custom dashboards, user accounts, databases, payments, and admin tools for scalable digital products.",
    tag: "SaaS",
  },
  {
    icon: "🛒",
    title: "E-commerce Websites",
    description:
      "Online stores designed to help businesses showcase products, accept orders, and grow online sales.",
    tag: "Online Store",
  },
  {
    icon: "⚙️",
    title: "Business Automation",
    description:
      "Digital systems that reduce manual work, organize operations, and improve how your business runs.",
    tag: "Automation",
  },
  {
    icon: "🛡️",
    title: "Maintenance & Support",
    description:
      "Ongoing updates, improvements, technical support, and care after your website or product goes live.",
    tag: "Support",
  },
];

const audienceMosaic = [
  { src: earlyStageStartups, alt: "Early-stage startups" },
  { src: saasStartups, alt: "SaaS startups" },
  { src: preSeedToSeriesA, alt: "Pre-seed to Series A" },
  { src: fintechStartups, alt: "Fintech startups" },
  { src: nonTechnicalFounders, alt: "Non-technical founders" },
  { src: eCommerceBusinesses, alt: "E-commerce businesses" },
  { src: smallBusinessesScaling, alt: "Small businesses scaling" },
  { src: serviceBasedStartups, alt: "Service-based startups" },
];

export default function Services() {
  return (
    <Section id="services" tone="light">
      <div className="services-copy">
        <div className="section-tag">OUR SERVICES</div>

        <h2 className="section-title">Digital products built for growth.</h2>

        <p className="section-sub">
          Fencex helps startups and growing businesses move from idea to launch
          with websites, MVPs, SaaS platforms, and business systems that are
          clean, secure, and scalable.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <div className="service-icon" aria-hidden="true">
              {service.icon}
            </div>

            <h4>{service.title}</h4>

            <p>{service.description}</p>

            <span className="service-tag">{service.tag}</span>
          </article>
        ))}
      </div>

      <div className="serve-block">
        <div className="section-tag">WHO WE SERVE</div>

        <h3>Designed for early-stage startups and ambitious businesses.</h3>

        <p>
          Fencex works with founders and business owners who need more than a
          developer. They need a partner who understands speed, budget, growth,
          and execution.
        </p>

        <p>
          We support clients in Ghana, Africa, the United States, and the United
          Kingdom, helping them build digital products that can compete locally
          and globally.
        </p>

        <figure
          className="services-visual services-visual-card audience-mosaic"
          aria-label="Startup and business audiences served by Fencex"
        >
          {audienceMosaic.map((tile) => (
            <img
              className="services-mosaic-image"
              key={tile.alt}
              src={tile.src}
              alt={tile.alt}
              loading="lazy"
            />
          ))}
        </figure>
      </div>
    </Section>
  );
}