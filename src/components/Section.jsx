import { motion } from "framer-motion";

export default function Section({ children, id, tone = "dark" }) {
  return (
    <motion.section
      className={`section section-${tone}`}
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.section>
  );
}
