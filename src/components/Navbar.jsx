import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import fenceLogo from "../../assets/fence-logo.jpeg";

const navItems = [
  ["#about", "About"],
  ["#services", "Services"],
  ["#projects", "Projects"],
  ["#process", "Process"],
  ["#pricing", "Packages"],
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

    let frameId = 0;

    const updateActiveSection = () => {
      const activationLine = window.scrollY + window.innerHeight * 0.38;
      let currentSection = sections[0];

      for (const section of sections) {
        const sectionTop = section.getBoundingClientRect().top + window.scrollY;

        if (sectionTop <= activationLine) {
          currentSection = section;
        } else {
          break;
        }
      }

      setActiveHref(`#${currentSection.id}`);
    };

    const handleScrollOrResize = () => {
      if (frameId) return;

      frameId = window.requestAnimationFrame(() => {
        frameId = 0;
        updateActiveSection();
      });
    };

    updateActiveSection();
    window.addEventListener("scroll", handleScrollOrResize, { passive: true });
    window.addEventListener("resize", handleScrollOrResize);

    return () => {
      window.removeEventListener("scroll", handleScrollOrResize);
      window.removeEventListener("resize", handleScrollOrResize);

      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  const handleNavClick = (href) => {
    setActiveHref(href);
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <nav className={`nav ${menuOpen ? "nav-open" : ""}`} aria-label="Main navigation">
        <a className="nav-logo" href="#" aria-label="Fencex home">
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
