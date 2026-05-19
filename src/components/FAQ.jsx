import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Section from "./Section.jsx";

const faqs = [
  ["How long does a project take?", "Most projects are delivered in 2-4 weeks depending on complexity. We always give you a fixed timeline before we start."],
  ["Do I need to be technical?", "Not at all. FENCEX is built for non-technical founders. We translate your vision into a product while you focus on your business."],
  ["What happens after launch?", "We do not disappear. You can choose a monthly maintenance plan for support, updates, and new features as your startup grows."],
  ["How much does it cost?", "Pricing depends on your project scope. Book a free call and we will give you a clear quote within 48 hours."],
  ["Which markets do you serve?", "We serve startups across the United States, United Kingdom, and Africa, with a passion for African founders building globally."],
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <Section>
      <div className="section-tag">FAQ</div>
      <div className="section-title">Common questions</div>
      <div className="faq">
        {faqs.map(([question, answer], index) => {
          const isOpen = openIndex === index;
          return (
            <button className={`faq-item ${isOpen ? "open" : ""}`} key={question} onClick={() => setOpenIndex(isOpen ? null : index)}>
              <span className="faq-q">{question}<ChevronDown size={16} /></span>
              <AnimatePresence>
                {isOpen && (
                  <motion.span
                    className="faq-a"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                  >
                    {answer}
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
