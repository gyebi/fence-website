import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Section from "./Section.jsx";

const faqs = [
  {
    question: "How long does a project take?",
    answer:
      "Timelines depend on the size and complexity of the project. A simple website can move faster, while an MVP, dashboard, or custom system may need more planning, design, and testing. We agree on a realistic timeline before development begins.",
  },
  {
    question: "Do I need to be technical?",
    answer:
      "No. Fencex is built for founders and business owners who may not have a technical background. We help translate your idea into a clear digital product plan and explain the process in simple language.",
  },
  {
    question: "What can Fencex build?",
    answer:
      "We build business websites, landing pages, e-commerce websites, startup MVPs, SaaS platforms, dashboards, internal business systems, mobile apps, and automation workflows.",
  },
  {
    question: "What happens after launch?",
    answer:
      "We can support you after launch with updates, improvements, bug fixes, new features, and maintenance. Support can be discussed based on the type of product we build for you.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Pricing depends on your scope, features, timeline, and level of support needed. The Launch, Growth, and Scale packages give you a starting point, then we help define the right option for your project.",
  },
  {
    question: "Which markets do you serve?",
    answer:
      "Fencex supports startups, small businesses, and founders in Ghana, across Africa, and internationally, including the United States and United Kingdom.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <Section>
      <div className="section-tag">FAQ</div>

      <h2 className="section-title">Common questions before we build.</h2>

      <p className="section-sub">
        Clear answers for founders and businesses planning a website, app, MVP,
        or custom digital system.
      </p>

      <div className="faq">
        {faqs.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <button
              className={`faq-item ${isOpen ? "open" : ""}`}
              key={item.question}
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span className="faq-q">
                {item.question}
                <ChevronDown size={16} />
              </span>

              <AnimatePresence>
                {isOpen && (
                  <motion.span
                    className="faq-a"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                  >
                    {item.answer}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          );
        })}
      </div>
    </Section>
  );
}