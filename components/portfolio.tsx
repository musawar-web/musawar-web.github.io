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
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          background: "rgba(8,12,9,0.86)",
          backdropFilter: "blur(18px)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            minHeight: "78px",
            padding: "0 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "24px",
          }}
        >
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src="/musawar.github.io/mk-logo.png"
              alt="Musawar logo"
              style={{
                height: "44px",
                width: "auto",
              }}
            />
          </Link>

          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "26px",
              flexWrap: "wrap",
              justifyContent: "flex-end",
            }}
          >
            <Link href="/about">About</Link>
            <Link href="/skills">Skills</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/experience">Experience</Link>

            <Link
              href="/contact"
              style={{
                padding: "12px 18px",
                borderRadius: "999px",
                background: "#bbf244",
                color: "#080c09",
                fontWeight: 800,
              }}
            >
              Let&apos;s Talk
            </Link>
          </nav>
        </div>
      </header>

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
          }}
        >
          <img
            src="/musawar.github.io/musawar.jpg"
            alt="Musawar"
            style={{
              width: "100%",
              borderRadius: "22px",
              objectFit: "cover",
            }}
          />
        </div>
      </section>
    </main>
  );
}
