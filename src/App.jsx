import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Check,
  ChevronDown,
  Globe2,
  LayoutTemplate,
  Mail,
  Newspaper,
  RefreshCw,
  Rocket,
  Settings,
  Smartphone,
} from "lucide-react";
import fenceLogo from "../assets/fence-logo.jpeg";

const services = [
  {
    icon: LayoutTemplate,
    title: "Startup websites",
    text: "High-converting landing pages and full websites that make your startup look credible from day one.",
    tag: "From 2 weeks",
    color: "#007A8A",
  },
  {
    icon: Rocket,
    title: "SaaS MVP builds",
    text: "Custom web applications and dashboards built to validate your idea fast without the $50K price tag.",
    tag: "From 3-4 weeks",
    color: "#3B6D11",
  },
  {
    icon: RefreshCw,
    title: "Monthly maintenance",
    text: "Stay fast, secure, and growing with ongoing support, updates, and new features every month.",
    tag: "Monthly plan",
    color: "#854F0B",
  },
];

const processSteps = [
  ["01", "Discovery call", "A free 15-minute call to understand your idea, goals, and budget. No pressure, no jargon, just a conversation."],
  ["02", "Proposal & plan", "You receive a clear proposal with scope, timeline, and fixed pricing within 48 hours of your call."],
  ["03", "We build", "Our team builds your product using the best tools and AI-assisted development: fast, clean, and scalable."],
  ["04", "You launch", "We hand over a polished, scalable product and stay with you for support, updates, and growth."],
];

const plans = [
  {
    name: "Basic",
    sub: "Perfect to start",
    features: ["Landing page or simple site", "Mobile responsive", "Delivered in 2 weeks", "1 revision round"],
  },
  {
    name: "Growth",
    sub: "For serious founders",
    featured: true,
    features: ["Multi-page site or MVP", "Custom design & branding", "Delivered in 3-4 weeks", "2 revision rounds", "30-day support included"],
  },
  {
    name: "Scale",
    sub: "Full SaaS builds",
    features: ["Full SaaS product build", "User auth & database", "Delivered in 4-8 weeks", "Unlimited revisions", "3-month support plan"],
  },
];

const faqs = [
  ["How long does a project take?", "Most projects are delivered in 2-4 weeks depending on complexity. We always give you a fixed timeline before we start."],
  ["Do I need to be technical?", "Not at all. FENCEX is built for non-technical founders. We translate your vision into a product while you focus on your business."],
  ["What happens after launch?", "We do not disappear. You can choose a monthly maintenance plan for support, updates, and new features as your startup grows."],
  ["How much does it cost?", "Pricing depends on your project scope. Book a free call and we will give you a clear quote within 48 hours."],
  ["Which markets do you serve?", "We serve startups across the United States, United Kingdom, and Africa, with a passion for African founders building globally."],
];

const projects = [
  {
    title: "Launch Website",
    type: "Startup website",
    text: "A fast marketing site with conversion-focused pages, analytics, and clean handoff.",
  },
  {
    title: "Founder Dashboard",
    type: "Web app",
    text: "A secure MVP dashboard for validating product workflows before a full SaaS build.",
  },
  {
    title: "Mobile Experience",
    type: "Mobile app",
    text: "A lightweight app interface designed around speed, usability, and future growth.",
  },
];

const articles = [
  "How to scope your first SaaS MVP",
  "What founders should prepare before a web build",
  "Choosing between a website, web app, and mobile app",
];

function IntroAnimation() {
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

function Navbar() {
  return (
    <header className="site-header">
      <nav className="nav" aria-label="Main navigation">
        <a className="nav-logo" href="#" aria-label="FenceX home">
          <img className="logo-image" src={fenceLogo} alt="FenceX logo" />
          <span className="logo-text">
            FENCE<span>X</span>
          </span>
        </a>
        <div className="nav-links">
          <a className="nav-link" href="#services">Services</a>
          <a className="nav-link" href="#projects">Projects</a>
          <a className="nav-link" href="#process">Process</a>
          <a className="nav-link" href="#pricing">Pricing</a>
          <a className="nav-link" href="#articles">Articles</a>
          <a className="nav-cta primary" href="#contact">Contact</a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="about">
      <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 3.35 }}>
        <div className="hero-tag">Website, App & Cloud Development</div>
        <h1>Building Secure, Modern Digital Solutions</h1>
        <p className="hero-sub">
          FENCEX designs and develops websites, web apps, mobile apps, cloud systems, and digital tools for growing businesses.
        </p>
        <div className="hero-ctas">
          <a className="btn-primary" href="mailto:hello@fencex.io">Start a Project</a>
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

function Section({ children, id }) {
  return (
    <motion.section
      className="section"
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

function Services() {
  return (
    <Section id="services">
      <div className="stats-row">
        <div className="stat"><div className="stat-n">2-4</div><div className="stat-l">weeks to launch</div></div>
        <div className="stat"><div className="stat-n">3</div><div className="stat-l">global markets</div></div>
        <div className="stat"><div className="stat-n">100%</div><div className="stat-l">founder-first</div></div>
      </div>
      <div className="section-tag">OUR SERVICES</div>
      <div className="section-title">What we build for you</div>
      <p className="section-sub">Everything a startup needs to go from idea to live digital product: fast, clean, and built to grow.</p>
      <div className="services-grid">
        {services.map(({ icon: Icon, title, text, tag, color }) => (
          <div className="service-card" key={title}>
            <div className="service-icon"><Icon size={18} color={color} /></div>
            <h4>{title}</h4>
            <p>{text}</p>
            <span className="service-tag">{tag}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Projects() {
  const icons = [Globe2, Settings, Smartphone];

  return (
    <Section id="projects">
      <div className="section-tag">PROJECT SHOWCASE</div>
      <div className="section-title">Project cards ready to grow</div>
      <p className="section-sub">These cards are structured so future live projects, case studies, screenshots, and admin-managed content can drop in cleanly.</p>
      <div className="projects-grid">
        {projects.map((project, index) => {
          const Icon = icons[index];
          return (
            <article className="project-card" key={project.title}>
              <div className="project-icon"><Icon size={20} /></div>
              <div className="project-type">{project.type}</div>
              <h4>{project.title}</h4>
              <p>{project.text}</p>
              <a href="#contact">Discuss similar work</a>
            </article>
          );
        })}
      </div>
    </Section>
  );
}

function Process() {
  return (
    <Section id="process">
      <div className="section-tag">THE PROCESS</div>
      <div className="section-title">From idea to live in 4 steps</div>
      <p className="section-sub">Simple, transparent, and designed to move at startup speed.</p>
      <div className="steps">
        {processSteps.map(([num, title, text], index) => (
          <div className={`step ${index === 0 ? "active" : ""}`} key={num}>
            <div className="step-num">{num}</div>
            <div className="step-body">
              <h4>{title}</h4>
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Pricing() {
  return (
    <Section id="pricing">
      <div className="section-tag">PRICING</div>
      <div className="section-title">Simple, transparent pricing</div>
      <p className="section-sub">Startup-friendly packages with no hidden fees. Book a call for a custom quote.</p>
      <div className="pricing-grid">
        {plans.map((plan) => (
          <div className={`plan ${plan.featured ? "featured" : ""}`} key={plan.name}>
            {plan.featured && <div className="plan-badge">Most popular</div>}
            <h4>{plan.name}</h4>
            <div className="plan-price">Contact us</div>
            <div className="plan-sub">{plan.sub}</div>
            <ul className="plan-features">
              {plan.features.map((feature) => (
                <li className="plan-feature" key={feature}><Check size={14} />{feature}</li>
              ))}
            </ul>
            <a className="plan-btn" href="mailto:hello@fencex.io">Get started</a>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Testimonials() {
  return (
    <Section>
      <div className="section-tag">WHAT FOUNDERS SAY</div>
      <div className="section-title">Built for founders like you</div>
      <p className="section-sub">Real words from real founders who trusted FENCEX with their digital foundation.</p>
      <div className="testimonials">
        {[
          ["SK", "Sarah K.", "Founder, TalentFlow", "FENCEX took our idea from a sketch to a working product in 3 weeks. We could not believe how fast and clean it was."],
          ["JO", "James O.", "CEO, PayLink Africa", "As a non-technical founder I was terrified of the tech side. FENCEX explained everything clearly and delivered exactly what we needed."],
        ].map(([initials, name, role, quote]) => (
          <div className="testimonial" key={name}>
            <div className="stars">★★★★★</div>
            <p className="tq">"{quote}"</p>
            <div className="ta">
              <div className="ta-av">{initials}</div>
              <div><div className="ta-name">{name}</div><div className="ta-role">{role}</div></div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function FAQ() {
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

function Articles() {
  return (
    <Section id="articles">
      <div className="section-tag">ARTICLES</div>
      <div className="section-title">Future founder resources</div>
      <p className="section-sub">A lightweight placeholder for blog posts, launch notes, and practical guides when FENCEX is ready to publish.</p>
      <div className="articles-list">
        {articles.map((title) => (
          <article className="article-row" key={title}>
            <Newspaper size={18} />
            <div>
              <h4>{title}</h4>
              <p>Coming soon</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact">
      <div className="section-tag">CONTACT</div>
      <div className="section-title">Start a project</div>
      <p className="section-sub">The form is ready for Firebase Firestore or an email service when you want to connect the backend.</p>
      <form className="contact-form">
        <label>
          Name
          <input type="text" name="name" placeholder="Your name" />
        </label>
        <label>
          Email
          <input type="email" name="email" placeholder="you@example.com" />
        </label>
        <label>
          Project type
          <select name="projectType" defaultValue="">
            <option value="" disabled>Choose one</option>
            <option>Website</option>
            <option>Web app</option>
            <option>Mobile app</option>
            <option>Cloud system</option>
          </select>
        </label>
        <label>
          Message
          <textarea name="message" rows="5" placeholder="Tell us what you want to build" />
        </label>
        <button type="button" className="btn-primary">
          <Mail size={16} />
          Send request
        </button>
      </form>
    </Section>
  );
}

function CTA() {
  return (
    <div className="cta-section">
      <div className="cta-q">Ready to make your X?</div>
      <h2>Let's build your foundation.</h2>
      <p>Book a free 15-minute discovery call. No pressure. No jargon. Just a conversation about your idea.</p>
      <a className="btn-primary" href="#contact">Book your free call</a>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <a className="footer-logo" href="#" aria-label="FenceX home">
        <img className="footer-logo-image" src={fenceLogo} alt="FenceX logo" />
        <span>FENCE<span>X</span></span>
      </a>
      <div className="footer-links">
        <a className="footer-link" href="#services">Services</a>
        <a className="footer-link" href="#projects">Projects</a>
        <a className="footer-link" href="#pricing">Pricing</a>
        <a className="footer-link" href="#articles">Articles</a>
        <a className="footer-link" href="#contact">Contact</a>
      </div>
      <div className="footer-copy">© 2026 FENCEX. All rights reserved. · fencex.io · hello@fencex.io</div>
    </footer>
  );
}

export default function App() {
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
          <Pricing />
          <Testimonials />
          <FAQ />
          <Articles />
          <Contact />
          <CTA />
        </motion.main>
        <Footer />
      </div>
    </>
  );
}
