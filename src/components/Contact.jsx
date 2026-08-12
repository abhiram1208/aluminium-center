import { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Loader2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import emailjs from "@emailjs/browser";

import SmartImage from "./SmartImage.jsx";
import { images } from "../data/images.js";

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

  // Name
  if (!values.name.trim()) {
    errors.name = "Please enter your name.";
  }

  // Phone
  if (!values.phone.trim()) {
    errors.phone = "Please enter a phone number.";
  } else if (!/^[+\d][\d\s()-]{6,}$/.test(values.phone.trim())) {
    errors.phone = "Please enter a valid phone number.";
  }

  // Email
  if (!values.email.trim()) {
    errors.email = "Please enter an email address.";
  } else if (
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())
  ) {
    errors.email = "Please enter a valid email address.";
  }

  // Project type
  if (!values.projectType) {
    errors.projectType = "Please select a project type.";
  }

  // Message
  if (!values.message.trim()) {
    errors.message = "Tell us a little about your project.";
  }

  return errors;
}

export default function Contact() {
  const formRef = useRef(null);

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

    // Remove error for field as user corrects it
    if (errors[name]) {
      setErrors((current) => ({
        ...current,
        [name]: "",
      }));
    }

    // If user starts editing after an error
    if (status === "error") {
      setStatus("idle");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nextErrors = validate(values);

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setStatus("loading");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      setStatus("success");
      setValues(initialForm);
      setErrors({});
    } catch (error) {
      console.error("EmailJS submission error:", error);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="section-pad py-28 lg:py-36"
    >
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-12 lg:gap-10">

        {/* =========================================
            LEFT SIDE
        ========================================== */}

        <div className="lg:col-span-5">
          <motion.div
            initial={{
              opacity: 0,
              y: 24,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              margin: "-80px",
            }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col gap-6"
          >
            <span className="eyebrow">
              Contact
            </span>

            <h2 className="text-[clamp(2rem,3.6vw,3.2rem)] leading-[1.1] text-cream">
              Let's build your space.
            </h2>

            <p className="max-w-md text-[15px] leading-relaxed text-cream-60">
              Tell us what you have in mind and we'll help
              turn your ideas into a practical custom solution.
            </p>

            {/* Contact Image */}
            <SmartImage
              src={images.contact}
              alt="Aluminium Center showroom"
              label="contact-interior.webp"
              className="mt-4 aspect-[5/3]"
            />
          </motion.div>
        </div>

        {/* =========================================
            RIGHT SIDE - FORM
        ========================================== */}

        <div className="lg:col-span-7">
          <motion.form
            ref={formRef}
            noValidate
            onSubmit={handleSubmit}
            initial={{
              opacity: 0,
              y: 24,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              margin: "-80px",
            }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.1,
            }}
            className="flex flex-col gap-8"
          >

            {/* =====================================
                NAME / PHONE
            ====================================== */}

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
                  value={values.name}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={
                    errors.name ? "name-error" : undefined
                  }
                  className="field"
                  placeholder="Your name"
                />

                {errors.name && (
                  <p
                    id="name-error"
                    className="mt-2 text-xs text-red-400"
                  >
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
                  value={values.phone}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={
                    errors.phone ? "phone-error" : undefined
                  }
                  className="field"
                  placeholder="Your phone number"
                />

                {errors.phone && (
                  <p
                    id="phone-error"
                    className="mt-2 text-xs text-red-400"
                  >
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* =====================================
                  EMAIL
              ====================================== */}

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
                  value={values.email}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={
                    errors.email ? "email-error" : undefined
                  }
                  className="field"
                  placeholder="your@email.com"
                />

                {errors.email && (
                  <p
                    id="email-error"
                    className="mt-2 text-xs text-red-400"
                  >
                    {errors.email}
                  </p>
                )}
              </div>

              {/* =====================================
                  PROJECT TYPE
              ====================================== */}

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
                  value={values.projectType}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.projectType)}
                  aria-describedby={
                    errors.projectType
                      ? "projectType-error"
                      : undefined
                  }
                  className="field bg-ink"
                >
                  <option value="" disabled>
                    Select an option
                  </option>

                  {projectTypes.map((type) => (
                    <option
                      key={type}
                      value={type}
                    >
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

              {/* =====================================
                  LOCATION
              ====================================== */}

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
                  value={values.location}
                  onChange={handleChange}
                  className="field"
                  placeholder="Project location"
                />
              </div>

              {/* =====================================
                  MESSAGE
              ====================================== */}

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
                  value={values.message}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={
                    errors.message
                      ? "message-error"
                      : undefined
                  }
                  className="field resize-none"
                  placeholder="Tell us about your project..."
                />

                {errors.message && (
                  <p
                    id="message-error"
                    className="mt-2 text-xs text-red-400"
                  >
                    {errors.message}
                  </p>
                )}
              </div>
            </div>

            {/* =====================================
                SUBMIT / STATUS
            ====================================== */}

            <div className="flex flex-wrap items-center gap-5">

              <button
                type="submit"
                disabled={status === "loading"}
                className="btn-primary disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "loading" ? (
                  <>
                    <Loader2
                      size={16}
                      className="animate-spin"
                    />
                    Sending
                  </>
                ) : (
                  "Request a Consultation"
                )}
              </button>

              {/* SUCCESS */}
              {status === "success" && (
                <motion.span
                  initial={{
                    opacity: 0,
                    x: -10,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  className="flex items-center gap-2 text-sm text-champagne"
                >
                  <CheckCircle2 size={16} />

                  Thanks — we'll be in touch shortly.
                </motion.span>
              )}

              {/* ERROR */}
              {status === "error" && (
                <motion.span
                  initial={{
                    opacity: 0,
                    x: -10,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  className="flex items-center gap-2 text-sm text-red-400"
                >
                  <AlertCircle size={16} />

                  Something went wrong. Please try again.
                </motion.span>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}