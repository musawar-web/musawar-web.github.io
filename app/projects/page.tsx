const projects = [
  {
    title: "Saltite",
    description:
      "Shopify development including custom sections, product layouts, calculators and responsive improvements.",
    image: "/musawar.github.io/projects/saltite.png",
    tags: ["Shopify", "Liquid", "JavaScript", "CSS"],
  },
  {
    title: "Skylite",
    description:
      "Business-focused website work with modern branding, responsive layouts and clean UI presentation.",
    image: "/musawar.github.io/projects/skylite.png",
    tags: ["Web Design", "Frontend", "Responsive UI"],
  },
  {
    title: "NutriSalt",
    description:
      "E-commerce redesign and migration focused on creating a cleaner and more professional shopping experience.",
    image: "/musawar.github.io/projects/nutrisalt.png",
    tags: ["Shopify", "E-commerce", "Migration", "UI Design"],
  },
];

export default function ProjectsPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "130px 24px 80px",
        background: "#080c09",
        color: "white",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <p
          style={{
            color: "#bbf244",
            fontWeight: 700,
            marginBottom: "16px",
          }}
        >
          SELECTED WORK
        </p>

        <h1
          style={{
            fontSize: "clamp(42px, 7vw, 80px)",
            lineHeight: 1,
            marginBottom: "24px",
          }}
        >
          Projects I&apos;ve worked on.
        </h1>

        <p
          style={{
            color: "#9ca3af",
            maxWidth: "700px",
            fontSize: "18px",
            lineHeight: 1.7,
            marginBottom: "48px",
          }}
        >
          A selection of web and e-commerce projects focused on clean design,
          responsive development and better user experience.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "22px",
          }}
        >
          {projects.map((project) => (
            <article
              key={project.title}
              style={{
                border: "1px solid rgba(255,255,255,0.1)",
                background: "rgba(255,255,255,0.03)",
                borderRadius: "24px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  minHeight: "190px",
                  padding: "30px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <img
                  src={project.image}
                  alt={`${project.title} logo`}
                  style={{
                    maxWidth: "80%",
                    maxHeight: "100px",
                    objectFit: "contain",
                  }}
                />
              </div>

              <div style={{ padding: "28px" }}>
                <h2
                  style={{
                    fontSize: "26px",
                    marginBottom: "12px",
                  }}
                >
                  {project.title}
                </h2>

                <p
                  style={{
                    color: "#9ca3af",
                    lineHeight: 1.7,
                    marginBottom: "20px",
                  }}
                >
                  {project.description}
                </p>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                  }}
                >
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        padding: "8px 12px",
                        borderRadius: "999px",
                        fontSize: "12px",
                        border: "1px solid rgba(187,242,68,0.25)",
                        color: "#bbf244",
                        background: "rgba(187,242,68,0.06)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
