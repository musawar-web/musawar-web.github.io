const experience = [
  {
    label: "PRESENT",
    title: "Shopify Developer",
    description:
      "Creating custom Shopify sections, product templates, collection layouts, calculators and responsive interfaces.",
  },
  {
    label: "E-COMMERCE",
    title: "Website Development",
    description:
      "Building and improving online stores with focus on design, functionality and customer experience.",
  },
  {
    label: "FRONT END",
    title: "UI Development",
    description:
      "Creating responsive layouts using HTML, CSS and JavaScript for desktop, tablet and mobile devices.",
  },
  {
    label: "WORDPRESS",
    title: "WordPress Development",
    description:
      "Website customization, troubleshooting and migration work for WordPress websites.",
  },
];

export default function ExperiencePage() {
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
          maxWidth: "1100px",
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
          EXPERIENCE
        </p>

        <h1
          style={{
            fontSize: "clamp(42px, 7vw, 80px)",
            lineHeight: 1,
            marginBottom: "24px",
          }}
        >
          What I&apos;ve been working on.
        </h1>

        <p
          style={{
            color: "#9ca3af",
            maxWidth: "700px",
            fontSize: "18px",
            lineHeight: 1.7,
            marginBottom: "50px",
          }}
        >
          My development experience is focused primarily on e-commerce
          websites, Shopify customization and front-end development.
        </p>

        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          {experience.map((item) => (
            <div
              key={item.title}
              style={{
                display: "grid",
                gridTemplateColumns: "140px 1fr",
                gap: "30px",
                padding: "30px 0",
                borderBottom: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <div
                style={{
                  color: "#bbf244",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                }}
              >
                {item.label}
              </div>

              <div>
                <h2
                  style={{
                    fontSize: "24px",
                    marginBottom: "10px",
                  }}
                >
                  {item.title}
                </h2>

                <p
                  style={{
                    color: "#9ca3af",
                    lineHeight: 1.7,
                    maxWidth: "700px",
                  }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
