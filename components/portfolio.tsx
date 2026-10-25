"use client";

import { motion } from "motion/react";

const base = "/musawar.github.io";

const skills = [
  "Shopify",
  "Liquid",
  "HTML",
  "CSS",
  "JavaScript",
  "WordPress",
  "Responsive UI",
  "Git & GitHub",
];

const services = [
  {
    number: "01",
    title: "Shopify Development",
    text: "Custom Shopify storefronts, theme customization, product layouts and advanced Liquid sections.",
  },
  {
    number: "02",
    title: "WordPress Development",
    text: "Professional WordPress websites, custom layouts, troubleshooting and website improvements.",
  },
  {
    number: "03",
    title: "Custom Liquid Sections",
    text: "Flexible Shopify sections that can be managed directly from the Shopify theme editor.",
  },
  {
    number: "04",
    title: "Website Development",
    text: "Modern responsive websites with clean UI, structured layouts and strong visual presentation.",
  },
  {
    number: "05",
    title: "Website Redesign",
    text: "Improving existing websites with better layout, presentation, responsiveness and usability.",
  },
  {
    number: "06",
    title: "Bug Fixing",
    text: "Fixing Shopify, WordPress, frontend layout and functionality issues.",
  },
];

const projects = [
  {
    title: "Saltite",
    type: "Shopify Development",
    description:
      "Custom Shopify development including sections, product layouts and interactive functionality.",
    image: `${base}/projects/saltite.png`,
  },
  {
    title: "Skylite",
    type: "Website Development",
    description:
      "Responsive website development with a clean and professional visual experience.",
    image: `${base}/projects/skylite.png`,
  },
  {
    title: "NutriSalt",
    type: "Shopify Development",
    description:
      "Shopify website development with improved structure, product presentation and responsive design.",
    image: `${base}/projects/nutrisalt.png`,
  },
];

const clientLogos = [
  {
    name: "Saltite",
    image: `${base}/projects/saltite.png`,
  },
  {
    name: "Skylite",
    image: `${base}/projects/skylite.png`,
  },
  {
    name: "NutriSalt",
    image: `${base}/projects/nutrisalt.png`,
  },
];

const experience = [
  {
    title: "Shopify Developer",
    category: "Current Focus",
    description:
      "Working with Shopify Liquid, custom sections, product templates, responsive storefronts and theme functionality.",
  },
  {
    title: "WordPress Developer",
    category: "Web Development",
    description:
      "Building, customizing and troubleshooting WordPress websites with responsive layouts and professional presentation.",
  },
  {
    title: "Frontend Development",
    category: "Development",
    description:
      "Creating responsive user interfaces with HTML, CSS and JavaScript.",
  },
  {
    title: "UI Development",
    category: "Interface",
    description:
      "Building clean and structured layouts designed to work across desktop, tablet and mobile devices.",
  },
];

export default function Portfolio() {
  return (
    <main className="portfolio">
      <div className="background-grid" />
      <div className="blue-glow glow-one" />
      <div className="blue-glow glow-two" />

      {/* HERO */}

      <section id="home" className="hero section-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <div className="availability">
            <span />
            Available for new projects
          </div>

          <h1>
            Shopify &
            <br />
            <em>Web Developer.</em>
          </h1>

          <p className="hero-description">
            I&apos;m Musawar, a Shopify, WordPress and frontend developer
            building responsive, modern and professional websites with strong
            attention to layout, functionality and user experience.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="primary-button">
              View Projects
              <span>↗</span>
            </a>

            <a href="#contact" className="secondary-button">
              Let&apos;s Talk
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <strong>Shopify</strong>
              <span>Development</span>
            </div>

            <div>
              <strong>WordPress</strong>
              <span>Development</span>
            </div>

            <div>
              <strong>Frontend</strong>
              <span>Responsive UI</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="hero-image-wrapper"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75 }}
        >
          <div className="hero-image-glow" />

          <div className="hero-image-card">
            <img
              src={`${base}/musawar.jpg`}
              alt="Musawar"
              className="hero-image"
            />

            <div className="image-info">
              <strong>Musawar</strong>
              <span>Shopify & Web Developer</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ABOUT */}

      <section id="about" className="section-block section-container">
        <div className="section-label">
          <span>01</span>
          ABOUT
        </div>

        <div className="about-layout">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>
              Creating clean and
              <br />
              <em>functional websites.</em>
            </h2>
          </motion.div>

          <motion.div
            className="about-copy"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="about-main">
              I&apos;m Musawar, a Shopify, WordPress and web developer focused
              on building responsive and professional digital experiences.
            </p>

            <p>
              My Shopify work includes custom Liquid sections, product pages,
              collection layouts, theme customization and frontend
              functionality.
            </p>

            <p>
              I also work with WordPress, including website development,
              customization, redesigns, troubleshooting and responsive layout
              improvements.
            </p>

            <p>
              My goal is to build websites that look professional, work
              properly and remain easy to use across all screen sizes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SKILLS */}

      <section id="skills" className="section-block section-container">
        <div className="section-label">
          <span>02</span>
          SKILLS
        </div>

        <div className="section-heading-row">
          <h2>
            Tools I use to
            <br />
            <em>build websites.</em>
          </h2>

          <p>
            Technologies and platforms I regularly work with for Shopify,
            WordPress and frontend development.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              className="skill-card"
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              whileHover={{ y: -6 }}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{skill}</strong>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SERVICES */}

      <section className="section-block section-container">
        <div className="section-label">
          <span>03</span>
          SERVICES
        </div>

        <div className="section-heading-row">
          <h2>
            What I can
            <br />
            <em>help you with.</em>
          </h2>
        </div>

        <div className="services-list">
          {services.map((service) => (
            <motion.div
              key={service.title}
              className="service-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span>{service.number}</span>

              <h3>{service.title}</h3>

              <p>{service.text}</p>

              <b>↗</b>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}

      <section id="projects" className="section-block section-container">
        <div className="section-label">
          <span>04</span>
          PROJECTS
        </div>

        <div className="projects-title-row">
          <h2>
            Selected
            <br />
            <em>projects.</em>
          </h2>

          <p>
            A focused selection of Shopify, WordPress and frontend work.
          </p>
        </div>

        <div className="professional-projects">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="professional-project-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              whileHover={{ y: -6 }}
            >
              <div className="professional-logo-area">
                <img
                  src={project.image}
                  alt={`${project.title} logo`}
                />
              </div>

              <div className="professional-project-info">
                <span className="project-category">{project.type}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* MOVING CLIENT LOGOS */}

      <section className="clients-section">
        <div className="section-container clients-heading">
          <div className="section-label">
            <span>05</span>
            SELECTED BRANDS
          </div>

          <h2>
            Brands I&apos;ve
            <br />
            <em>worked with.</em>
          </h2>
        </div>

        <div className="clients-marquee">
          <div className="clients-marquee-track">
            <div className="clients-marquee-group">
              {[...clientLogos, ...clientLogos, ...clientLogos].map(
                (client, index) => (
                  <div
                    className="client-logo-item"
                    key={`a-${client.name}-${index}`}
                  >
                    <img
                      src={client.image}
                      alt={`${client.name} logo`}
                    />
                  </div>
                )
              )}
            </div>

            <div
              className="clients-marquee-group"
              aria-hidden="true"
            >
              {[...clientLogos, ...clientLogos, ...clientLogos].map(
                (client, index) => (
                  <div
                    className="client-logo-item"
                    key={`b-${client.name}-${index}`}
                  >
                    <img
                      src={client.image}
                      alt=""
                    />
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}

      <section
        id="experience"
        className="section-block section-container"
      >
        <div className="section-label">
          <span>06</span>
          EXPERIENCE
        </div>

        <div className="section-heading-row">
          <h2>
            Development
            <br />
            <em>experience.</em>
          </h2>
        </div>

        <div className="experience-list">
          {experience.map((item, index) => (
            <motion.div
              className="experience-row"
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="experience-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div>
                <small>{item.category}</small>
                <h3>{item.title}</h3>
              </div>

              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}

      <section
        id="contact"
        className="contact-section section-container"
      >
        <div className="contact-panel">
          <div className="contact-copy">
            <div className="section-label">
              <span>07</span>
              CONTACT
            </div>

            <h2>
              Have a project
              <br />
              <em>in mind?</em>
            </h2>

            <p>
              Tell me what you need and send the project details. I&apos;ll
              get back to you.
            </p>

            <div className="contact-links">
              <a href="mailto:musawarkahloon991@gmail.com">
                Email ↗
              </a>

              <a
                href="https://wa.me/92332728620"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp ↗
              </a>

              <a
                href="https://www.instagram.com/musawar__kahloon?exln=ejdpeWxwd2hldjFm&utm_source=qr"
                target="_blank"
                rel="noreferrer"
              >
                Instagram ↗
              </a>
            </div>
          </div>

          <form
            className="contact-form"
            action="https://formsubmit.co/musawarkahloon991@gmail.com"
            method="POST"
          >
            <input
              type="hidden"
              name="_subject"
              value="New Portfolio Project"
            />

            <input
              type="hidden"
              name="_captcha"
              value="false"
            />

            <label>
              Name
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
              />
            </label>

            <label>
              Email
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                required
              />
            </label>

            <label>
              Service
              <select name="service" defaultValue="">
                <option value="" disabled>
                  Select service
                </option>

                <option>Shopify Development</option>
                <option>WordPress Development</option>
                <option>Custom Liquid Section</option>
                <option>Website Development</option>
                <option>Website Redesign</option>
                <option>Bug Fixing</option>
              </select>
            </label>

            <label>
              Project details
              <textarea
                name="message"
                rows={5}
                placeholder="Tell me about your project..."
                required
              />
            </label>

            <button type="submit">
              Send Project
              <span>↗</span>
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}

      <footer className="footer section-container">
        <div className="footer-socials">
          <a
            href="https://www.instagram.com/musawar__kahloon?exln=ejdpeWxwd2hldjFm&utm_source=qr"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="footer-social-link"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="5"
              />

              <circle
                cx="12"
                cy="12"
                r="4"
              />

              <circle
                cx="17.5"
                cy="6.5"
                r="1"
                className="social-dot"
              />
            </svg>

            <span>Instagram</span>
          </a>

          <a
            href="https://wa.me/92332728620"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="footer-social-link"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 3a8.5 8.5 0 0 0-7.3 12.9L3.5 20.5l4.7-1.2A8.5 8.5 0 1 0 12 3Z" />

              <path d="M8.4 8.1c.2-.5.5-.5.8-.5h.5c.2 0 .4.1.5.4l.8 1.9c.1.3.1.5-.1.7l-.6.8c-.2.2-.1.4 0 .6.8 1.4 1.9 2.4 3.4 3 .3.1.5.1.7-.1l.9-1c.2-.2.4-.3.7-.2l1.9.9c.3.1.4.3.4.5 0 .5-.2 1.5-.7 2-.5.5-1.4.8-2.2.8-1.2 0-3.1-.6-5.2-2.5-1.6-1.5-2.8-3.3-3.1-4.6-.3-1.2 0-2 .5-2.7Z" />
            </svg>

            <span>WhatsApp</span>
          </a>
        </div>

        <div className="footer-copyright">
          © {new Date().getFullYear()} Musawar Web. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
