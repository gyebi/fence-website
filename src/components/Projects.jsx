import Section from "./Section.jsx";
import handimanLogo from "../../assets/handiman-logo.png";
import huskAndHiveLogo from "../../assets/husk-and-hive-logo.jpeg";
import nanasMamaLogo from "../../assets/nanasmama-logo-inverted.png";
import startupSeedling from "../../assets/startup_seedling.jpg";

const portfolioProjects = [
  {
    type: "Gifting and ecommerce platform",
    title: "Nana's Mama",
    description: "The Nana's Mama website is a modern gifting and ecommerce platform designed to showcase curated gift boxes, custom packaging services, personalized gifts, and authentic African beauty products.",
    tech: "React, ecommerce UX, responsive design",
    image: nanasMamaLogo,
    alt: "Nana's Mama logo",
    buttonText: "View project",
    href: "https://nanaamama.web.app/",
  },
  {
    title: "Husk & Hive",
    type: "Natural food brand website",
    description: "Husk & Hive is a modern brand website for organic legumes and raw honey from Ghana, showcasing natural products, the founder story, product benefits, and a simple order journey.",
    tech: "HTML, CSS, JavaScript, responsive design",
    image: huskAndHiveLogo,
    alt: "Husk & Hive logo",
    buttonText: "View project",
    href: "https://huskandhivegh.com/",
  },
  {
    title: "Handiman",
    type: "Service marketplace platform",
    description: "Handiman is a mobile-first PWA that connects customers with trusted mobile mechanics through real-time service coordination and a multi-dashboard ecosystem.",
    tech: "Firebase, PWA, offline support, real-time dashboards",
    image: handimanLogo,
    alt: "Handiman Mechanics logo",
    imageTone: "light",
    buttonText: "View project",
    href: "https://handiman-web.web.app",
  },
  {
    title: "Inventory Management",
    type: "Inventory management app",
    description: "A Vite and Firebase inventory management app used to manage products, stock receiving, sales, suppliers, staff, and dashboard reporting through separate page modules.",
    tech: "Vite, Firebase, Cloud Functions, inventory workflows",
    image: startupSeedling,
    alt: "Inventory management project preview",
    buttonText: "View project",
    href: "https://inventory-app-19d04.web.app",
  },
];

export default function Projects() {
  return (
    <Section id="projects">
      <div className="section-tag">PROJECT SHOWCASE</div>
      <div className="section-title">Projects</div>
      <p className="section-sub">Select sample of projects executed over the period.</p>
      <div className="cards-contain">
        {portfolioProjects.map((project) => (
          <div className="card-porto-1" key={project.title}>
            <img className={project.imageTone === "light" ? "project-image-light" : undefined} src={project.image} alt={project.alt} />
            <div className="text-box-1">
              <span className="project-type">{project.type}</span>
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <p className="project-tech">{project.tech}</p>
            </div>
            {project.href ? (
              <a className="btn" href={project.href} target="_blank" rel="noreferrer">
                {project.buttonText}
              </a>
            ) : (
              <button className="btn" type="button">{project.buttonText}</button>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
