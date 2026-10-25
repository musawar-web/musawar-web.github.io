"use client";

import Link from "next/link";

export default function Portfolio() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#080c09",
        color: "white",
      }}
    >
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "110px 24px 90px",
          display: "grid",
          gridTemplateColumns: "1.1fr 0.9fr",
          gap: "54px",
          alignItems: "center",
        }}
      >
        <div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "9px 14px",
              borderRadius: "999px",
              border: "1px solid rgba(187,242,68,0.25)",
              background: "rgba(187,242,68,0.06)",
              color: "#bbf244",
              fontSize: "13px",
              fontWeight: 700,
              marginBottom: "24px",
            }}
          >
            ● Available for new projects
          </div>

          <h1
            style={{
              fontSize: "clamp(48px, 8vw, 94px)",
              lineHeight: 0.95,
              letterSpacing: "-0.05em",
              marginBottom: "26px",
            }}
          >
            Shopify &
            <br />
            Web Developer.
          </h1>

          <p
            style={{
              maxWidth: "650px",
              color: "#9ca3af",
              fontSize: "18px",
              lineHeight: 1.8,
              marginBottom: "32px",
            }}
          >
            I&apos;m Musawar, a web developer focused on building modern,
            responsive and professional digital experiences for brands and
            e-commerce businesses.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "14px",
            }}
          >
            <Link
              href="/projects"
              style={{
                minHeight: "52px",
                padding: "0 22px",
                borderRadius: "14px",
                background: "#bbf244",
                color: "#080c09",
                fontWeight: 800,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              View My Work
            </Link>

            <Link
              href="/contact"
              style={{
                minHeight: "52px",
                padding: "0 22px",
                borderRadius: "14px",
                border: "1px solid rgba(255,255,255,0.12)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
              }}
            >
              Contact Me
            </Link>
          </div>
        </div>

        <div
          style={{
            borderRadius: "28px",
            border: "1px solid rgba(255,255,255,0.1)",
            background: "rgba(255,255,255,0.03)",
            padding: "18px",
            overflow: "hidden",
          }}
        >
          <img
            src="/musawar.github.io/musawar.jpg"
            alt="Musawar"
            style={{
              width: "100%",
              display: "block",
              borderRadius: "22px",
              objectFit: "cover",
            }}
          />
        </div>
      </section>

      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "40px 24px 100px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "16px",
          }}
        >
          <div
            style={{
              padding: "24px",
              borderRadius: "20px",
              border: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(255,255,255,0.025)",
            }}
          >
            <div
              style={{
                color: "#bbf244",
                fontSize: "13px",
                fontWeight: 700,
                marginBottom: "10px",
              }}
            >
              SHOPIFY
            </div>

            <h3
              style={{
                fontSize: "21px",
                marginBottom: "8px",
              }}
            >
              Custom Development
            </h3>

            <p
              style={{
                color: "#9ca3af",
                lineHeight: 1.7,
                fontSize: "14px",
              }}
            >
              Custom sections, product layouts, collection pages and Shopify
              front-end development.
            </p>
          </div>

          <div
            style={{
              padding: "24px",
              borderRadius: "20px",
              border: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(255,255,255,0.025)",
            }}
          >
            <div
              style={{
                color: "#bbf244",
                fontSize: "13px",
                fontWeight: 700,
                marginBottom: "10px",
              }}
            >
              FRONTEND
            </div>

            <h3
              style={{
                fontSize: "21px",
                marginBottom: "8px",
              }}
            >
              Responsive Interfaces
            </h3>

            <p
              style={{
                color: "#9ca3af",
                lineHeight: 1.7,
                fontSize: "14px",
              }}
            >
              Modern responsive websites built for desktop, tablet and mobile.
            </p>
          </div>

          <div
            style={{
              padding: "24px",
              borderRadius: "20px",
              border: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(255,255,255,0.025)",
            }}
          >
            <div
              style={{
                color: "#bbf244",
                fontSize: "13px",
                fontWeight: 700,
                marginBottom: "10px",
              }}
            >
              E-COMMERCE
            </div>

            <h3
              style={{
                fontSize: "21px",
                marginBottom: "8px",
              }}
            >
              Better Shopping Experiences
            </h3>

            <p
              style={{
                color: "#9ca3af",
                lineHeight: 1.7,
                fontSize: "14px",
              }}
            >
              E-commerce interfaces focused on clean design, usability and
              customer experience.
            </p>
          </div>
        </div>
      </section>

      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "30px 24px 110px",
        }}
      >
        <div
          style={{
            padding: "42px",
            borderRadius: "28px",
            border: "1px solid rgba(187,242,68,0.18)",
            background:
              "linear-gradient(135deg, rgba(187,242,68,0.07), rgba(255,255,255,0.02))",
          }}
        >
          <p
            style={{
              color: "#bbf244",
              fontWeight: 700,
              marginBottom: "12px",
            }}
          >
            HAVE A PROJECT?
          </p>

          <h2
            style={{
              fontSize: "clamp(34px, 5vw, 58px)",
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
              marginBottom: "18px",
              maxWidth: "800px",
            }}
          >
            Let&apos;s build something professional together.
          </h2>

          <p
            style={{
              maxWidth: "650px",
              color: "#9ca3af",
              fontSize: "17px",
              lineHeight: 1.7,
              marginBottom: "26px",
            }}
          >
            If you need Shopify development, a website redesign or a modern
            responsive interface, send me your project details.
          </p>

          <Link
            href="/contact"
            style={{
              minHeight: "52px",
              padding: "0 22px",
              borderRadius: "14px",
              background: "#bbf244",
              color: "#080c09",
              fontWeight: 800,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Let&apos;s Talk
          </Link>
        </div>
      </section>
    </main>
  );
}
