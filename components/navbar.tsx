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
        <a href="#home" className="brand-logo" aria-label="Musawar home">
          <img
            src="/musawar.github.io/mk-logo.png"
            alt="Musawar MK Logo"
          />
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
