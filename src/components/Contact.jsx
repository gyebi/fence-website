import ContactForm from "./ContactForm.jsx";
import laptopBackground from "../../assets/laptop2.jpg";

export default function ContactSection({ selectedPlan }) {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-section-inner">
        <img className="contact-background-laptop" src={laptopBackground} alt="" aria-hidden="true" />
        <h2>Start your project</h2>
        <p>
          Tell us what you are building. Fence will review your request and get back to you.
        </p>

        <div className="contact-section-card">
          <ContactForm selectedPlan={selectedPlan} />
        </div>
      </div>
    </section>
  );
}
