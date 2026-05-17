const currentPage = window.location.pathname.split("/").pop() || "fencex_website_concept.html";

const navItems = [
  { href: "services.html", label: "Services", className: "nav-link" },
  { href: "process.html", label: "Process", className: "nav-link" },
  { href: "pricing.html", label: "Pricing", className: "nav-link" },
  { href: "about.html", label: "About", className: "nav-link" },
  { href: "contact.html", label: "Book a call", className: "nav-cta primary" },
];

function isActivePage(href) {
  return currentPage === href;
}

function renderHeader() {
  const target = document.querySelector("[data-site-header]");
  if (!target) return;

  const links = navItems.map(({ href, label, className }) => {
    const active = isActivePage(href);
    const activeClass = active ? " active" : "";
    const currentAttribute = active ? ' aria-current="page"' : "";

    return `
        <a class="${className}${activeClass}" href="${href}"${currentAttribute}>${label}</a>`;
  }).join("");

  target.outerHTML = `
  <header class="site-header">
    <nav class="nav" aria-label="Main navigation">
      <a class="nav-logo" href="fencex_website_concept.html" aria-label="FenceX home">
        <img class="logo-image" src="assets/fence-logo.jpeg" alt="FenceX logo">
        <span class="logo-text">FENCE<span>X</span></span>
      </a>
      <button class="nav-toggle" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="site-menu">
        <i class="ti ti-menu-2" aria-hidden="true"></i>
      </button>
      <div class="nav-links" id="site-menu">
${links}
      </div>
    </nav>
  </header>`;
}

function renderFooter() {
  const target = document.querySelector("[data-site-footer]");
  if (!target) return;

  target.outerHTML = `
  <footer class="footer">
    <a class="footer-logo" href="fencex_website_concept.html" aria-label="FenceX home">
      <img class="footer-logo-image" src="assets/fence-logo.jpeg" alt="FenceX logo">
      <span>FENCE<span>X</span></span>
    </a>
    <div class="footer-links">
      <a class="footer-link" href="services.html">Services</a>
      <a class="footer-link" href="pricing.html">Pricing</a>
      <a class="footer-link" href="about.html">About</a>
      <a class="footer-link" href="faq.html">FAQ</a>
      <a class="footer-link" href="contact.html">Contact</a>
    </div>
    <div class="footer-copy">&copy; 2026 FenceX. All rights reserved. &middot; fencex.io &middot; hello@fencex.io</div>
  </footer>`;
}

function initNavigation() {
  document.querySelectorAll(".nav-toggle").forEach(toggle => {
    toggle.addEventListener("click", () => {
      const nav = toggle.closest(".nav");
      const isOpen = nav.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
      toggle.querySelector("i").className = isOpen ? "ti ti-x" : "ti ti-menu-2";
    });
  });

  document.querySelectorAll(".nav-link, .nav-cta").forEach(link => {
    link.addEventListener("click", () => {
      document.querySelectorAll(".nav-link, .nav-cta").forEach(item => {
        item.classList.remove("active");
        item.removeAttribute("aria-current");
      });

      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    });
  });
}

function initFaq() {
  const faq = document.getElementById("faq");
  if (!faq) return;

  faq.addEventListener("click", event => {
    const item = event.target.closest(".faq-item");
    if (!item) return;

    const isOpen = item.classList.contains("open");
    faq.querySelectorAll(".faq-item").forEach(faqItem => faqItem.classList.remove("open"));
    if (!isOpen) item.classList.add("open");
  });
}

renderHeader();
renderFooter();
initNavigation();
initFaq();
