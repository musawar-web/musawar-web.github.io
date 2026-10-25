"use client";

import { motion } from "motion/react";

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
    text: "Custom Shopify storefront development with clean structure, responsive layouts and custom functionality.",
  },
  {
    number: "02",
    title: "Custom Liquid Sections",
    text: "Flexible Shopify sections built with Liquid that can be managed directly through theme settings.",
  },
  {
    number: "03",
    title: "Website Redesign",
    text: "Modern redesigns focused on stronger visual hierarchy, usability and a professional brand presence.",
  },
  {
    number: "04",
    title: "WordPress Development",
    text: "Custom WordPress development, page improvements, troubleshooting and website maintenance.",
  },
  {
    number: "05",
    title: "Responsive Development",
    text: "Interfaces carefully optimized for desktop, tablet and mobile screens.",
  },
  {
    number: "06",
    title: "Bug Fixing",
    text: "Frontend issues, layout problems, Shopify theme bugs and website functionality fixes.",
  },
];

const projects = [
  {
    title: "Saltite",
    category: "Shopify Development",
    description:
      "Custom Shopify sections, product layouts, calculators, collection experiences and responsive storefront development.",
    image: "/musawar.github.io/projects/saltite.png",
  },
  {
    title: "Skylite",
    category: "Website Development",
    description:
      "Professional website development focused on modern visual presentation, clean layouts and responsive interfaces.",
    image: "/musawar.github.io/projects/skylite.png",
  },
  {
    title: "NutriSalt",
    category: "Shopify Website",
    description:
      "Shopify website work focused on a cleaner visual system, organized product presentation and a professional user experience.",
    image: "/musawar.github.io/projects/nutrisalt.png",
  },
];

const experience = [
  {
    title: "Shopify Developer",
    type: "Current Focus",
    text: "Building custom Shopify sections, product templates, collection experiences and theme functionality using Liquid, CSS and JavaScript.",
  },
  {
    title: "Website Development",
    type: "Development",
    text: "Creating professional responsive websites with clean layouts, structured components and modern frontend development practices.",
  },
  {
    title: "UI Development",
    type: "Frontend",
    text: "Developing interfaces designed to work smoothly across desktop, tablet and mobile devices.",
  },
  {
    title: "WordPress Development",
    type: "WordPress",
    text: "Working with WordPress customization, troubleshooting, page improvements and website maintenance.",
  },
];

const reveal = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

export default function Portfolio() {
  return (
    <main className="portfolio">
      <div className="background-grid" />
      <div className="aurora aurora-one" />
      <div className="aurora aurora-two" />

      {/* HERO */}
      <section id="home" className="hero section-container">
        <motion.div
          className="hero-content"
          initial="hidden"
          animate="show"
          variants={reveal}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            className="availability"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <span className="availability-dot" />
            Available for new projects
          </motion.div>

          <h1>
            Shopify &amp;
            <br />
            <span>Web Developer.</span>
          </h1>

          <p className="hero-description">
            I&apos;m Musawar. I create modern Shopify stores, custom web
            experiences and responsive interfaces built around clean design,
            functionality and strong attention to detail.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="primary-button">
              View My Work
              <span>↗</span>
            </a>

            <a href="#contact" className="secondary-button">
              Contact Me
            </a>
          </div>

          <div className="hero-mini-stats">
            <div>
              <strong>Shopify</strong>
              <span>Development</span>
            </div>

            <div>
              <strong>Frontend</strong>
              <span>Development</span>
            </div>

            <div>
              <strong>Responsive</strong>
              <span>UI Design</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: 60, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
        >
          <div className="photo-glow" />

          <div className="photo-frame">
            <img
              src="/musawar.github.io/musawar.jpg"
              alt="Musawar - Shopify and Web Developer"
              className="profile-photo"
            />

            <div className="photo-label">
              <span>Musawar</span>
              <small>Shopify &amp; Web Developer</small>
            </div>
          </div>

          <motion.div
            className="floating-card floating-card-top"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span>01</span>
            Custom Shopify
          </motion.div>

          <motion.div
            className="floating-card floating-card-bottom"
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span>02</span>
            Responsive UI
          </motion.div>
        </motion.div>
      </section>

      {/* MARQUEE */}
      <section className="marquee-section">
        <div className="marquee-track">
          <span>SHOPIFY</span>
          <i>✦</i>
          <span>LIQUID</span>
          <i>✦</i>
          <span>JAVASCRIPT</span>
          <i>✦</i>
          <span>WORDPRESS</span>
          <i>✦</i>
          <span>RESPONSIVE UI</span>
          <i>✦</i>
          <span>SHOPIFY</span>
          <i>✦</i>
          <span>LIQUID</span>
          <i>✦</i>
          <span>JAVASCRIPT</span>
          <i>✦</i>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="content-section section-container">
        <motion.div
          className="section-heading"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={reveal}
          transition={{ duration: 0.65 }}
        >
          <div className="section-eyebrow">
            <span>01</span>
            ABOUT
          </div>

          <h2>
            Building digital experiences
            <br />
            <span>with purpose.</span>
          </h2>
        </motion.div>

        <div className="about-grid">
          <motion.div
            className="about-intro"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={reveal}
            transition={{ duration: 0.65 }}
          >
            <p className="large-copy">
              I&apos;m Musawar, a Shopify and web developer focused on turning
              ideas into clean, responsive and professional websites.
            </p>

            <p>
              My work includes Shopify theme customization, custom Liquid
              sections, frontend development, WordPress development,
              responsive interfaces and website troubleshooting.
            </p>

            <p>
              I focus on clarity, usability and polished presentation while
              keeping websites practical and easy to manage.
            </p>

            <a href="#contact" className="text-link">
              Work with me <span>↗</span>
            </a>
          </motion.div>

          <motion.div
            className="about-panel"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <div className="about-panel-row">
              <span>Primary Focus</span>
              <strong>Shopify Development</strong>
            </div>

            <div className="about-panel-row">
              <span>Development</span>
              <strong>Frontend &amp; WordPress</strong>
            </div>

            <div className="about-panel-row">
              <span>Approach</span>
              <strong>Responsive &amp; Clean</strong>
            </div>

            <div className="about-panel-row">
              <span>Speciality</span>
              <strong>Custom Liquid Sections</strong>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="content-section section-container">
        <motion.div
          className="section-heading"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={reveal}
          transition={{ duration: 0.65 }}
        >
          <div className="section-eyebrow">
            <span>02</span>
            SKILLS
          </div>

          <h2>
            Technologies &
            <br />
            <span>tools I work with.</span>
          </h2>
        </motion.div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              className="skill-card"
              key={skill}
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.06,
              }}
              whileHover={{
                y: -8,
              }}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{skill}</strong>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="content-section section-container">
        <motion.div
          className="section-heading"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={reveal}
          transition={{ duration: 0.65 }}
        >
          <div className="section-eyebrow">
            <span>03</span>
            SERVICES
          </div>

          <h2>
            What I can
            <br />
            <span>help you build.</span>
          </h2>
        </motion.div>

        <div className="services-list">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              className="service-row"
              initial={{
                opacity: 0,
                x: -30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.55,
                delay: index * 0.05,
              }}
            >
              <span className="service-number">{service.number}</span>

              <h3>{service.title}</h3>

              <p>{service.text}</p>

              <span className="service-arrow">↗</span>
            </motion.article>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="content-section section-container">
        <motion.div
          className="section-heading projects-heading"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={reveal}
          transition={{ duration: 0.65 }}
        >
          <div>
            <div className="section-eyebrow">
              <span>04</span>
              PROJECTS
            </div>

            <h2>
              Selected
              <br />
              <span>work.</span>
            </h2>
          </div>

          <p>
            A selection of projects where I&apos;ve worked on Shopify,
            frontend interfaces and professional website development.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.article
              className="project-card"
              key={project.title}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.65,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -10,
              }}
            >
              <div className="project-image">
                <div className="project-orb" />

                <img src={project.image} alt={`${project.title} logo`} />
              </div>

              <div className="project-info">
                <div className="project-topline">
                  <span>{project.category}</span>
                  <span>0{index + 1}</span>
                </div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="content-section section-container">
        <motion.div
          className="section-heading"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={reveal}
          transition={{ duration: 0.65 }}
        >
          <div className="section-eyebrow">
            <span>05</span>
            EXPERIENCE
          </div>

          <h2>
            Work &
            <br />
            <span>development focus.</span>
          </h2>
        </motion.div>

        <div className="experience-list">
          {experience.map((item, index) => (
            <motion.div
              className="experience-item"
              key={item.title}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
              }}
            >
              <div className="experience-index">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div>
                <span className="experience-type">{item.type}</span>
                <h3>{item.title}</h3>
              </div>

              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact-section section-container">
        <motion.div
          className="contact-box"
          initial={{
            opacity: 0,
            scale: 0.96,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <div className="contact-copy">
            <div className="section-eyebrow">
              <span>06</span>
              LET&apos;S TALK
            </div>

            <h2>
              Have a project
              <br />
              <span>in mind?</span>
            </h2>

            <p>
              Tell me what you&apos;re building and what you need help with.
              Send your project details and I&apos;ll get back to you.
            </p>

            <div className="contact-direct">
              <a href="mailto:musawarkahloon991@gmail.com">
                musawarkahloon991@gmail.com
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
              value="New Portfolio Enquiry"
            />

            <input type="hidden" name="_captcha" value="false" />

            <div className="form-field">
              <label htmlFor="name">Your name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="service">What do you need?</label>
              <select id="service" name="service" defaultValue="" required>
                <option value="" disabled>
                  Select a service
                </option>
                <option>Shopify Development</option>
                <option>Custom Liquid Section</option>
                <option>Website Development</option>
                <option>Website Redesign</option>
                <option>WordPress Development</option>
                <option>Bug Fixing</option>
              </select>
            </div>

            <div className="form-field">
              <label htmlFor="message">Project details</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Tell me about your project..."
                required
              />
            </div>

            <button type="submit" className="submit-button">
              Send Project Enquiry
              <span>↗</span>
            </button>
          </form>
        </motion.div>
      </section>

      <footer className="footer section-container">
        <div>
          <img
            src="/musawar.github.io/mk-logo.png"
            alt="Musawar MK logo"
          />
        </div>

        <p>Shopify &amp; Web Developer</p>

        <a href="#home">Back to top ↑</a>
      </footer>
    </main>
  );
}
