import { Check } from "lucide-react";
import Section from "./Section.jsx";

const plans = [
  {
    name: "Launch",
    sub: "For founders and small businesses starting strong",
    features: [
      "Landing page or simple business website",
      "Mobile-first responsive design",
      "Clear enquiry/contact flow",
      "Basic SEO structure",
      "1 structured revision round",
      "Ideal for validating a new idea",
    ],
  },
  {
    name: "Growth",
    sub: "For businesses ready for a stronger digital presence",
    features: [
      "Multi-page website or lean MVP",
      "Custom sections and brand styling",
      "Contact, enquiry, or booking workflow",
      "Analytics and conversion-focused layout",
      "2 structured revision rounds",
      "30-day support after launch",
    ],
  },
  {
    name: "Scale",
    sub: "For startups building platforms and business systems",
    features: [
      "Custom SaaS, dashboard, or business system",
      "User accounts, database, and admin workflows",
      "Payment, email, or third-party integrations",
      "Role-based access where needed",
      "Launch support and handover guidance",
      "Ongoing maintenance plan available",
    ],
  },
];

export default function Pricing({ onSelectPlan }) {
  return (
    <Section id="pricing">
      <div className="section-tag">PACKAGES</div>

      <h2 className="section-title">Start with the package that fits your stage.</h2>

      <p className="section-sub">
        Flexible packages for startups, small businesses, and founders who need
        a clear path from idea to launch. Every project can be scoped around your
        goals, timeline, and budget.
      </p>

      <div className="pricing-grid">
        {plans.map((plan) => (
          <article className="plan" key={plan.name}>
            <h4>{plan.name}</h4>

            <div className="plan-sub">{plan.sub}</div>

            <ul className="plan-features">
              {plan.features.map((feature) => (
                <li className="plan-feature" key={feature}>
                  <Check size={14} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button
              className="plan-btn"
              type="button"
              onClick={() => onSelectPlan(plan)}
            >
              Discuss this package
            </button>
          </article>
        ))}
      </div>
    </Section>
  );
}