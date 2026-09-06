import { motion } from "framer-motion";
import startupSeedling from "../../assets/startup_seedling.jpg";

export default function Hero() {
  return (
    <section className="hero" id="about">
      <img
        className="hero-image"
        src={startupSeedling}
        alt=""
        aria-hidden="true"
      />

      <div className="hero-overlay" aria-hidden="true" />

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3.35 }}
      >
        <div className="hero-tag">Startup Technology Partner</div>

        <h1>Build your website, app, or startup MVP with confidence.</h1>
        {/*
        <p className="hero-sub">
          Fencex helps startups and growing businesses design, build, and launch
          secure digital products — from modern websites to custom software,
          SaaS platforms, and business automation tools.
        </p>
        */}


        <div className="hero-ctas">
          <a className="btn-primary" href="#contact">
            Start a Project
          </a>

          <a className="btn-secondary" href="#services">
            View Services
          </a>
        </div>

        <div className="hero-trust" aria-label="Fencex service highlights">
          <span>Websites</span>
          <div className="trust-dot" />
          <span>MVPs</span>
          <div className="trust-dot" />
          <span>SaaS Platforms</span>
          <div className="trust-dot" />
          <span>Business Systems</span>
        </div>
      </motion.div>
    </section>
  );
}