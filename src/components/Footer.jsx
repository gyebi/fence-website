import fenceLogo from "../../assets/fence-logo.jpeg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <a className="footer-logo" href="#" aria-label="FenceX home">
            <img className="footer-logo-image" src={fenceLogo} alt="FenceX logo" />
            <span>FENCE<span>X</span></span>
          </a>
          <p>
            Startup technology partner for founders building websites, MVPs, and cloud systems with a strong digital foundation.
          </p>
        </div>

        <div className="footer-column">
          <h3>Explore</h3>
          <a className="footer-link" href="#services">Services</a>
          <a className="footer-link" href="#projects">Projects</a>
          <a className="footer-link" href="#process">Process</a>
          <a className="footer-link" href="#pricing">Pricing</a>
        </div>

        <div className="footer-column">
          <h3>Build With Us</h3>
          <a className="footer-link" href="#contact">Start a project</a>
          <a className="footer-link" href="mailto:hello@bl-techghana.com">hello@bl-techghana.com</a>
          <a className="footer-link" href="https://wa.me/233553121821" target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
      </div>

      <div className="footer-bottom">
        <div>© 2026 FENCEX. All rights reserved.</div>
        <div>fencex.io · United States · United Kingdom · Africa</div>
      </div>
    </footer>
  );
}
