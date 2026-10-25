"use client";

export default function Navbar() {
  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
  ];

  return (
    <header className="site-header">
      <div className="navbar">
        <a href="#home" className="brand">
          <img
            src="/mk-logo.png"
            alt="Musawar MK Logo"
            className="brand-logo"
          />

          <div className="brand-text">
            <strong>Musawar Web</strong>
            <span>Shopify & Web Developer</span>
          </div>
        </a>

        <nav className="nav-links">
          {links.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}

          <a href="#contact" className="nav-contact">
            Let&apos;s Talk
          </a>
        </nav>
      </div>
    </header>
  );
}
