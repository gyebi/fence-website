import { motion } from "framer-motion";
import startupSeedling from "../../assets/startup_seedling.jpg";

export default function Hero() {
  return (
    <section className="hero" id="about">
      <img className="hero-image" src={startupSeedling} alt="" aria-hidden="true" />
      <div className="hero-overlay" aria-hidden="true" />
      <motion.div className="hero-content" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 3.35 }}>
        <div className="hero-tag">Startup Technology Partner</div>
        <h1>Build, protect, and scale your startup idea.</h1>
        <p className="hero-sub">
          Fence helps founders launch faster, cheaper, and smarter with scalable websites, MVPs, and digital products built for long-term growth. Rooted in Eban, the Adinkra symbol of protection and love, Fence exists to protect every founder's idea from concept to global scale.
        </p>
        <div className="hero-ctas">
          <a className="btn-primary" href="#contact">Start a Project</a>
        </div>
        <div className="hero-trust">
          <span>Websites</span>
          <div className="trust-dot" />
          <span>Web Apps</span>
          <div className="trust-dot" />
          <span>Cloud Systems</span>
        </div>
      </motion.div>
    </section>
  );
}
