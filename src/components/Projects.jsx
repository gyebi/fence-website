import Section from "./Section.jsx";
import handimanLogo from "../../assets/handiman-logo.png";
import huskAndHiveLogo from "../../assets/husk-and-hive-logo.jpeg";
import nanasMamaLogo from "../../assets/nanasmama-logo-inverted.png";
import posInABoxLogo from "../../assets/POS-in-a-Box.png";
import willisPortLogo from "../../assets/Willis-Port.png";
import topTechLogo from "../../assets/TopTech.png";
import adinkraMemoryGameLogo from "../../assets/Adinkra-Memory-Game.png";
import startupSeedling from "../../assets/startup_seedling.jpg";

const portfolioProjects = [
  {
    type: "Gifting and e-commerce platform",
    title: "Nana's Mama",
    description:
      "A modern gifting and e-commerce website designed to showcase curated gift boxes, custom packaging services, personalized gifts, and authentic African beauty products.",
    tech: "React, e-commerce UX, responsive design",
    image: nanasMamaLogo,
    alt: "Nana's Mama logo",
    buttonText: "View project",
    href: "https://nanaamama.web.app/",
  },
  {
    title: "Husk & Hive",
    type: "Natural food brand website",
    description:
      "A clean brand website for organic legumes and raw honey from Ghana, presenting the founder story, product benefits, and a simple customer order journey.",
    tech: "HTML, CSS, JavaScript, responsive design",
    image: huskAndHiveLogo,
    alt: "Husk & Hive logo",
    buttonText: "View project",
    href: "https://huskandhivegh.com/",
  },
  {
    title: "Handiman",
    type: "Service marketplace platform",
    description:
      "A mobile-first PWA that connects customers with trusted mobile mechanics through service coordination, real-time updates, and multi-dashboard workflows.",
    tech: "Firebase, PWA, offline support, real-time dashboards",
    image: handimanLogo,
    alt: "Handiman Mechanics logo",
    imageTone: "light",
    buttonText: "View project",
    href: "https://handiman-web.web.app",
  },
  {
    title: "Inventory Management",
    type: "Business operations system",
    description:
      "A Vite and Firebase inventory app built to manage products, stock receiving, sales, suppliers, staff activity, and dashboard reporting.",
    tech: "Vite, Firebase, Cloud Functions, inventory workflows",
    image: startupSeedling,
    alt: "Inventory management project preview",
    buttonText: "View project",
    href: "https://inventory-app-19d04.web.app",
  },
  {
    title: "Willis Port",
    type: "Freight invoicing and operations system",
    description:
      "A custom logistics platform designed to capture customer requests, manage shipments, calculate pricing, generate invoices, track payments, and support manager workflows.",
    tech: "Next.js, PostgreSQL, Prisma, Firebase Auth, PDF invoices",
    image: willisPortLogo,
    alt: "Willis Port logo",
    buttonText: "Case study coming soon",
  },
  {
    title: "POS in a Box",
    type: "Small business POS system",
    description:
      "A mobile point-of-sale system for small businesses, built with offline stock control, sales tracking, low-stock alerts, and Bluetooth thermal printer support.",
    tech: "Expo React Native, SQLite, Firebase Storage, Bluetooth printing",
    image: posInABoxLogo,
    alt: "POS in a Box logo",
    buttonText: "Case study coming soon",
  },
  {
    title: "TopTech Mobile Apps",
    type: "Education and training mobile apps",
    description:
      "Mobile applications prepared for Android release testing, supporting structured learning workflows and internal training use cases.",
    tech: "React Native, Expo, Android APK release builds",
    image: topTechLogo,
    alt: "TopTech logo",
    buttonText: "Internal build",
  },
  {
    title: "Adinkra Memory Game",
    type: "Progressive web game",
    description:
      "A cultural memory game concept built around Adinkra symbols, designed as an engaging web experience with mobile-friendly gameplay.",
    tech: "PWA, JavaScript, responsive game UI",
    image: adinkraMemoryGameLogo,
    alt: "Adinkra Memory Game logo",
    buttonText: "Project preview",
  },
];

export default function Projects() {
  return (
    <Section id="projects">
      <div className="section-tag">SELECTED BUILDS</div>

      <h2 className="section-title">Proof through practical projects.</h2>

      <p className="section-sub">
        A sample of websites, platforms, mobile apps, and business systems built
        to help brands launch, operate, and grow with stronger digital foundations.
      </p>

      <div className="cards-contain">
        {portfolioProjects.map((project) => (
          <article className="card-porto-1" key={project.title}>
            <img
              className={
                project.imageTone === "light" ? "project-image-light" : undefined
              }
              src={project.image}
              alt={project.alt}
              loading="lazy"
            />

            <div className="text-box-1">
              <span className="project-type">{project.type}</span>

              <h4>{project.title}</h4>

              <p>{project.description}</p>

              <p className="project-tech">{project.tech}</p>
            </div>

            {project.href ? (
              <a
                className="btn"
                href={project.href}
                target="_blank"
                rel="noreferrer"
              >
                {project.buttonText}
              </a>
            ) : (
              <button className="btn" type="button" disabled>
                {project.buttonText}
              </button>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
