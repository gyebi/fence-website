import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import fenceLogo from "../../assets/fence-logo.jpeg";

const navItems = [
  ["#about", "About"],
  ["#services", "Services"],
  ["#projects", "Projects"],
  ["#process", "Process"],
  ["#pricing", "Pricing"],
  ["#contact", "Contact"],
];

export default function Navbar() {
  const [activeHref, setActiveHref] = useState("#about");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = navItems
      .map(([href]) => document.querySelector(href))
      .filter(Boolean);

    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];

        if (visibleEntry) {
          setActiveHref(`#${visibleEntry.target.id}`);
        }
      },
      {
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href) => {
    setActiveHref(href);
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <nav className={`nav ${menuOpen ? "nav-open" : ""}`} aria-label="Main navigation">
        <a className="nav-logo" href="#" aria-label="FenceX home">
          <img className="logo-image" src={fenceLogo} alt="FenceX logo" />
          <span className="logo-text">
            FENCE<span>X</span>
          </span>
        </a>
        <button
          className="nav-toggle"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="site-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
        <div className="nav-links" id="site-menu">
          {navItems.map(([href, label]) => (
            <a
              className={`nav-link ${activeHref === href ? "active" : ""}`}
              href={href}
              aria-current={activeHref === href ? "page" : undefined}
              key={href}
              onClick={() => handleNavClick(href)}
            >
              {label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
