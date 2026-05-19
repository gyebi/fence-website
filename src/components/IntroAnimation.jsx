import { motion } from "framer-motion";
import fenceLogo from "../../assets/fence-logo.jpeg";

export default function IntroAnimation() {
  return (
    <motion.div
      className="logo-intro"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0, visibility: "hidden" }}
      transition={{ delay: 3, duration: 1, ease: "easeInOut" }}
    >
      <motion.div
        className="intro-logo-frame"
        initial={{ opacity: 0, scale: 0.8, filter: "drop-shadow(0 0 0px #16f4ff)" }}
        animate={{
          opacity: 1,
          scale: [0.8, 1.05, 1],
          filter: [
            "drop-shadow(0 0 0px #16f4ff)",
            "drop-shadow(0 0 25px #16f4ff)",
            "drop-shadow(0 0 18px #16f4ff)",
          ],
        }}
        transition={{ duration: 2.2, ease: "easeOut", times: [0, 0.45, 1] }}
      >
        <img src={fenceLogo} alt="FENCEX Logo" className="intro-logo" />
        <motion.span
          className="logo-light"
          initial={{ x: "-130%", opacity: 0, skewX: -16 }}
          animate={{ x: "130%", opacity: [0, 1, 0] }}
          transition={{ delay: 0.85, duration: 1.35, ease: "easeInOut", times: [0, 0.2, 1] }}
        />
      </motion.div>
    </motion.div>
  );
}
