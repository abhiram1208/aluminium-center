import { useState } from "react";
import { CheckCircle2, AlertCircle } from "lucide-react";
import SmartImage from "./SmartImage.jsx";
import { images } from "../data/images.js";

const FORM_ENDPOINT = "https://formsubmit.co/ajax/abhiramkrishna7777@gmail.com";

const projectTypes = [
  "Wardrobe",
  "Kitchen",
  "Cabinet",
  "TV Unit",
  "Partition",
  "Doors & Windows",
  "Custom Project",
  "Other",
];

const initialForm = {
  name: "",
  phone: "",
  email: "",
  projectType: "",
  location: "",
  message: "",
};

function validate(values) {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = "Please enter your name.";
  }

  if (!values.phone.trim()) {
    errors.phone = "Please enter a phone number.";
  } else if (!/^[+\d][\d\s()-]{6,}$/.test(values.phone.trim())) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter an email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.projectType) {
    errors.projectType = "Please select a project type.";
  }

  if (!values.message.trim()) {
    errors.message = "Tell us a little about your project.";
  }

  return errors;
}

export default function Contact() {
  const [values, setValues] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  // idle | loading | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues((current) => ({
      ...current,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((current) => ({
        ...current,
        [name]: "",
      }));
    }

    if (status === "error" || status === "success") {
      setStatus("idle");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (status === "loading") return;

    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: values.name.trim(),
          phone: values.phone.trim(),
          email: values.email.trim(),
          projectType: values.projectType,
          location: values.location.trim(),
          message: values.message.trim(),
          _subject: "New Aluminium Center Enquiry",
          _replyto: values.email.trim(),
        }),
      });

      const result = await response.json();

      if (
        !response.ok ||
        (result.success !== true && result.success !== "true")
      ) {
        throw new Error(result.message || "Unable to send your enquiry.");
      }

      setStatus("success");
      setValues(initialForm);
      setErrors({});
    } catch (error) {
      console.error("Contact form submission error:", error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section-pad py-28 lg:py-36">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-12 lg:gap-10">
        {/* LEFT SIDE */}
        <div className="lg:col-span-5">
          <div className="flex flex-col gap-6">
            <span className="eyebrow">Contact</span>

            <h2 className="text-[clamp(2rem,3.6vw,3.2rem)] leading-[1.1] text-cream">
              Let's build your space.
            </h2>

            <p className="max-w-md text-[15px] leading-relaxed text-cream-60">
              Tell us what you have in mind and we'll help turn your ideas into
              a practical custom solution.
            </p>

            {/* Contact Image */}
            <SmartImage
              src={images.contact}
              alt="Aluminium Center showroom"
              label="contact-interior.webp"
              sizes="(max-width: 1023px) 100vw, 42vw"
              className="mt-4 aspect-[5/3]"
            />
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="lg:col-span-7">
          <form
            noValidate
            onSubmit={handleSubmit}
            className="flex flex-col gap-8"
          >
            {/* FORM FIELDS */}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {/* NAME */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-1 block text-xs uppercase tracking-[0.1em] text-cream-40"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={values.name}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className="field"
                  placeholder="Your name"
                />

                {errors.name && (
                  <p id="name-error" className="mt-2 text-xs text-red-400">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* PHONE */}
              <div>
                <label
                  htmlFor="phone"
                  className="mb-1 block text-xs uppercase tracking-[0.1em] text-cream-40"
                >
                  Phone
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  required
                  value={values.phone}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                  className="field"
                  placeholder="Your phone number"
                />

                {errors.phone && (
                  <p id="phone-error" className="mt-2 text-xs text-red-400">
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* EMAIL */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-1 block text-xs uppercase tracking-[0.1em] text-cream-40"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={values.email}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className="field"
                  placeholder="your@email.com"
                />

                {errors.email && (
                  <p id="email-error" className="mt-2 text-xs text-red-400">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* PROJECT TYPE */}
              <div>
                <label
                  htmlFor="projectType"
                  className="mb-1 block text-xs uppercase tracking-[0.1em] text-cream-40"
                >
                  Project Type
                </label>

                <select
                  id="projectType"
                  name="projectType"
                  required
                  value={values.projectType}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.projectType)}
                  aria-describedby={
                    errors.projectType ? "projectType-error" : undefined
                  }
                  className="field bg-ink"
                >
                  <option value="" disabled>
                    Select an option
                  </option>

                  {projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>

                {errors.projectType && (
                  <p
                    id="projectType-error"
                    className="mt-2 text-xs text-red-400"
                  >
                    {errors.projectType}
                  </p>
                )}
              </div>

              {/* LOCATION */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="location"
                  className="mb-1 block text-xs uppercase tracking-[0.1em] text-cream-40"
                >
                  Location
                </label>

                <input
                  id="location"
                  name="location"
                  type="text"
                  autoComplete="address-level2"
                  value={values.location}
                  onChange={handleChange}
                  className="field"
                  placeholder="Project location"
                />
              </div>

              {/* MESSAGE */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="mb-1 block text-xs uppercase tracking-[0.1em] text-cream-40"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={values.message}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                  className="field resize-none"
                  placeholder="Tell us about your project..."
                />

                {errors.message && (
                  <p id="message-error" className="mt-2 text-xs text-red-400">
                    {errors.message}
                  </p>
                )}
              </div>
            </div>

            {/* SUBMIT / STATUS */}
            <div className="flex flex-wrap items-center gap-5">
              <button
                type="submit"
                disabled={status === "loading"}
                className="btn-primary disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "loading" ? "Sending..." : "Request a Consultation"}
              </button>

              {/* SUCCESS */}
              {status === "success" && (
                <span
                  role="status"
                  className="flex items-center gap-2 text-sm text-champagne"
                >
                  <CheckCircle2 size={16} />
                  Thanks — we'll be in touch shortly.
                </span>
              )}

              {/* ERROR */}
              {status === "error" && (
                <span
                  role="alert"
                  className="flex items-center gap-2 text-sm text-red-400"
                >
                  <AlertCircle size={16} />
                  Something went wrong. Please try again.
                </span>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
