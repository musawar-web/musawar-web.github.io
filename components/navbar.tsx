"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
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
  );
}
