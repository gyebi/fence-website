import { Check } from "lucide-react";
import Section from "./Section.jsx";

const plans = [
  {
    name: "Basic",
    sub: "Perfect to start",
    features: ["Landing page or simple site", "Mobile responsive", "Delivered in 2 weeks", "1 revision round"],
  },
  {
    name: "Growth",
    sub: "For serious founders",
    features: ["Multi-page site or MVP", "Custom design & branding", "Delivered in 3-4 weeks", "2 revision rounds", "30-day support included"],
  },
  {
    name: "Scale",
    sub: "Full SaaS builds",
    features: ["Full SaaS product build", "User auth & database", "Delivered in 4-8 weeks", "Unlimited revisions", "3-month support plan"],
  },
];

export default function Pricing({ onSelectPlan }) {
  return (
    <Section id="pricing">
      <div className="section-tag">PRICING</div>
      <div className="section-title">Simple, transparent pricing</div>
      <p className="section-sub">Startup-friendly packages with no hidden fees. Book a call for a custom quote, even on a zero budget.</p>
      <div className="pricing-grid">
        {plans.map((plan) => (
          <div className="plan" key={plan.name}>
            <h4>{plan.name}</h4>
            <div className="plan-sub">{plan.sub}</div>
            <ul className="plan-features">
              {plan.features.map((feature) => (
                <li className="plan-feature" key={feature}><Check size={14} />{feature}</li>
              ))}
            </ul>
            <button className="plan-btn" type="button" onClick={() => onSelectPlan(plan)}>
              Get started
            </button>
          </div>
        ))}
      </div>
    </Section>
  );
}
