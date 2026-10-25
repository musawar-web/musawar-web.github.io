export default function SkillsPage() {
  const skills = [
    "Shopify",
    "Liquid",
    "HTML",
    "CSS",
    "JavaScript",
    "WordPress",
    "Responsive Design",
    "E-commerce Development",
  ];

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
          MY SKILLS
        </p>

        <h1
          style={{
            fontSize: "clamp(42px, 7vw, 80px)",
            lineHeight: 1,
            marginBottom: "24px",
          }}
        >
          Technologies I work with.
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
          I use modern web technologies to build responsive, professional and
          conversion-focused websites for brands and e-commerce businesses.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "18px",
          }}
        >
          {skills.map((skill) => (
            <div
              key={skill}
              style={{
                padding: "28px",
                borderRadius: "20px",
                border: "1px solid rgba(255,255,255,0.1)",
                background: "rgba(255,255,255,0.03)",
              }}
            >
              <h3 style={{ fontSize: "20px" }}>{skill}</h3>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
