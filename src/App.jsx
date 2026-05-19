import { useState } from "react";
import { motion } from "framer-motion";
import Contact from "./components/Contact.jsx";
import CTA from "./components/CTA.jsx";
import FAQ from "./components/FAQ.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import IntroAnimation from "./components/IntroAnimation.jsx";
import Navbar from "./components/Navbar.jsx";
import Pricing from "./components/Pricing.jsx";
import Process from "./components/Process.jsx";
import Projects from "./components/Projects.jsx";
import Services from "./components/Services.jsx";
import Testimonials from "./components/Testimonials.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";

export default function App() {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
    window.requestAnimationFrame(() => {
      document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
    });
  };

  return (
    <>
      <IntroAnimation />
      <div className="site">
        <h2 className="sr-only">FENCEX website showing navigation, hero section, services, process, pricing, testimonials, FAQ, and footer.</h2>
        <Navbar />
        <motion.main
          className="home-page"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.2, duration: 1 }}
        >
          <Hero />
          <Services />
          <Projects />
          <Process />
          <Pricing onSelectPlan={handlePlanSelect} />
          <Testimonials />
          <FAQ />
          <Contact selectedPlan={selectedPlan} />
          <CTA />
        </motion.main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
}
