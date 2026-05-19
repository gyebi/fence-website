import { useEffect, useState } from "react";
import { Mail } from "lucide-react";

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  company: "",
  projectType: "",
  budget: "",
  message: "",
};

const planDefaults = {
  Basic: {
    projectType: "Startup Website",
    budget: "No budget / zero funds",
  },
  Growth: {
    projectType: "MVP Development",
    budget: "$1,500 - $5,000",
  },
  Scale: {
    projectType: "SaaS Platform",
    budget: "$5,000+",
  },
};

export default function ContactForm({ selectedPlan }) {
  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const isLoading = status === "loading";

  useEffect(() => {
    if (!selectedPlan) return;

    const defaults = planDefaults[selectedPlan.name] || {};
    const planMessage = `I'm interested in the ${selectedPlan.name} package (${selectedPlan.sub}).`;

    setFormData((previousData) => ({
      ...previousData,
      projectType: defaults.projectType || previousData.projectType,
      budget: defaults.budget || previousData.budget,
      message: previousData.message.trim() ? previousData.message : planMessage,
    }));

    setStatus("idle");
    setError("");
  }, [selectedPlan]);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");

    if (!formData.name.trim()) {
      setError("Please enter your name.");
      return;
    }

    if (!formData.email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    if (!formData.message.trim()) {
      setError("Please tell us about your project.");
      return;
    }

    try {
      setStatus("loading");

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const contentType = response.headers.get("content-type") || "";
      const result = contentType.includes("application/json")
        ? await response.json()
        : null;

      if (!response.ok) {
        throw new Error(
          result?.message ||
            `The contact service is not available right now. HTTP ${response.status}.`
        );
      }

      if (!result) {
        throw new Error(
          `The contact service returned ${contentType || "an unknown response"} instead of JSON.`
        );
      }

      setStatus("success");
      setFormData(initialFormData);
    } catch (err) {
      setStatus("error");
      setError(err.message || "Unable to send your enquiry. Please try again.");
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        Full Name *
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          required
        />
      </label>
      <label>
        Email Address *
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
          required
        />
      </label>
      <label>
        Phone / WhatsApp
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+1 555 000 0000"
        />
      </label>
      <label>
        Company / Startup Name
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Your company"
        />
      </label>
      <label>
        Project Type
        <select name="projectType" value={formData.projectType} onChange={handleChange}>
          <option value="">Select a project type</option>
          <option value="Startup Website">Startup Website</option>
          <option value="MVP Development">MVP Development</option>
          <option value="SaaS Platform">SaaS Platform</option>
          <option value="E-commerce Website">E-commerce Website</option>
          <option value="Business Automation">Business Automation</option>
          <option value="Website Redesign">Website Redesign</option>
          <option value="Not Sure Yet">Not Sure Yet</option>
        </select>
      </label>
      <label>
        Estimated Budget
        <select name="budget" value={formData.budget} onChange={handleChange}>
          <option value="">Select a budget range</option>
          <option value="No budget / zero funds">No budget / zero funds</option>
          <option value="Under $500">Under $500</option>
          <option value="$500 - $1,500">$500 - $1,500</option>
          <option value="$1,500 - $5,000">$1,500 - $5,000</option>
          <option value="$5,000+">$5,000+</option>
          <option value="Not Sure Yet">Not Sure Yet</option>
        </select>
      </label>
      <label className="contact-form-full">
        Tell us about your project *
        <textarea
          name="message"
          rows="6"
          value={formData.message}
          onChange={handleChange}
          placeholder="What are you building? What do you need help with?"
          required
        />
      </label>

      {error && <div className="form-alert form-alert-error">{error}</div>}

      {status === "success" && (
        <div className="form-alert form-alert-success">
          Thank you. Your enquiry has been sent successfully. Fence will contact you soon.
        </div>
      )}

      <button type="submit" className="btn-primary contact-submit" disabled={isLoading}>
        <Mail size={16} />
        {isLoading ? "Sending..." : "Send enquiry"}
      </button>
    </form>
  );
}
