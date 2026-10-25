"use client";

import { motion } from "motion/react";
import { useRef } from "react";

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
  const projectScroller = useRef<HTMLDivElement>(null);

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    if (!projectScroller.current) return;

    projectScroller.current.scrollLeft += event.deltaY;
  };

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

      <section id="projects" className="section-block projects-section">
        <div className="section-container">
          <div className="section-label">
            <span>04</span>
            PROJECTS
          </div>

          <div className="projects-header">
            <div>
              <h2>
                Selected
                <br />
                <em>projects.</em>
              </h2>

              <p>
                A few projects where I&apos;ve worked on Shopify, WordPress,
                frontend development and responsive website experiences.
              </p>
            </div>

            <div className="scroll-note">
              <span>←</span>
              Scroll to explore
              <span>→</span>
            </div>
          </div>
        </div>

        <div
          ref={projectScroller}
          onWheel={handleWheel}
          className="project-scroller"
        >
          <div className="project-spacer" />

          {projects.map((project, index) => (
            <motion.article
              className="project-slide"
              key={project.title}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="project-content">
                <span className="project-number">
                  0{index + 1}
                </span>

                <span className="project-type">
                  {project.type}
                </span>

                <h3>{project.title}</h3>

                <p>{project.description}</p>
              </div>

              <div className="project-logo-area">
                <div className="project-circle" />

                <motion.img
                  src={project.image}
                  alt={`${project.title} logo`}
                  animate={{
                    y: [0, -7, 0],
                  }}
                  transition={{
                    duration: 4 + index,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </motion.article>
          ))}

          <div className="project-spacer" />
        </div>
      </section>

      {/* EXPERIENCE */}

      <section
        id="experience"
        className="section-block section-container"
      >
        <div className="section-label">
          <span>05</span>
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

      <section id="contact" className="contact-section section-container">
        <div className="contact-panel">
          <div className="contact-copy">
            <div className="section-label">
              <span>06</span>
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

      <footer className="footer section-container">
        <div className="footer-brand">
          <img
            src={`${base}/mk-logo.png`}
            alt="Musawar Logo"
          />

          <div>
            <strong>Musawar Web</strong>
            <span>Shopify & Web Developer</span>
          </div>
        </div>

        <a href="#home">Back to top ↑</a>
      </footer>
    </main>
  );
}
