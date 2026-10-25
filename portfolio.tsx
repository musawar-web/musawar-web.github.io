"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Github,
  Linkedin,
  Mail,
  Menu,
  MonitorSmartphone,
  MoveRight,
  ShoppingBag,
  Sparkles,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const projects = [
  {
    title: "Saltite",
    eyebrow: "Shopify / Ecommerce",
    description:
      "Custom product experiences, reusable Liquid sections, calculators, responsive UI, structured content, and conversion-focused storefront improvements.",
    image: `${BASE_PATH}/projects/saltite.png`,
    href: "https://saltite.com/",
    stack: ["Shopify", "Liquid", "JavaScript", "CSS"],
    className: "md:col-span-2",
  },
  {
    title: "Skylite",
    eyebrow: "Corporate / Web",
    description:
      "A cleaner business-level digital presentation with stronger hierarchy, visual systems, and responsive front-end craftsmanship.",
    image: `${BASE_PATH}/projects/skylite.png`,
    href: "https://skylite.com/",
    stack: ["Frontend", "UI", "Responsive"],
    className: "md:col-span-1",
  },
  {
    title: "NutriSalt",
    eyebrow: "Migration / Ecommerce",
    description:
      "Ecommerce redesign and platform migration focused on product architecture, collection browsing, merchandising, and scalable Shopify foundations.",
    image: `${BASE_PATH}/projects/nutrisalt.png`,
    href: "https://nutrisalt.us/",
    stack: ["Shopify", "Migration", "UX", "SEO"],
    className: "md:col-span-1",
  },
  {
    title: "Custom Store Systems",
    eyebrow: "Development / Systems",
    description:
      "Modular sections, calculators, advanced product storytelling, schema controls, and reusable components built for real business workflows.",
    image: null,
    href: "#contact",
    stack: ["Architecture", "Components", "Performance"],
    className: "md:col-span-2",
  },
];

const experiences = [
  {
    period: "Now",
    role: "Shopify Developer",
    detail: "Custom storefronts, Liquid sections, product experiences, calculators, and responsive ecommerce UI.",
  },
  {
    period: "Frontend",
    role: "Interface Development",
    detail: "Modern HTML, CSS, JavaScript, responsive systems, interaction design, and performance-focused implementation.",
  },
  {
    period: "Ecommerce",
    role: "Store Experience",
    detail: "Collection architecture, merchandising, product presentation, conversions, migrations, and business-focused UX improvements.",
  },
];

const skills = [
  "Shopify",
  "Liquid",
  "HTML",
  "CSS",
  "JavaScript",
  "Next.js",
  "Responsive UI",
  "WordPress",
  "Git & GitHub",
  "Ecommerce UX",
];

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
};

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/[0.025] px-3 py-1.5 text-[11px] font-medium text-zinc-300">
      {children}
    </span>
  );
}

function SectionHeading({ label, title, copy }: { label: string; title: string; copy?: string }) {
  return (
    <motion.div {...reveal} className="max-w-3xl">
      <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[.22em] text-lime-300">
        <span className="h-1.5 w-1.5 rounded-full bg-lime-300 shadow-[0_0_14px_rgba(190,242,100,.9)]" />
        {label}
      </div>
      <h2 className="text-balance text-4xl font-semibold tracking-[-.045em] text-white sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {copy && <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">{copy}</p>}
    </motion.div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const links = ["Projects", "Experience", "About", "Contact"];

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6">
      <div className="glass mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-3 py-2.5 sm:px-4">
        <a href="#home" className="flex items-center gap-3" aria-label="Musawar home">
          <div className="relative h-10 w-10 overflow-hidden rounded-xl border border-white/10 bg-black">
            <Image src={`${BASE_PATH}/mk-logo.png`} alt="Musawar logo" fill className="object-cover" priority />
          </div>
          <div className="hidden sm:block">
            <div className="text-sm font-semibold tracking-tight text-white">Musawar</div>
            <div className="text-[10px] uppercase tracking-[.18em] text-zinc-500">Web Developer</div>
          </div>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-sm text-zinc-400 transition hover:text-white">
              {link}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <div className="rounded-full border border-lime-300/15 bg-lime-300/[0.06] px-3 py-2 text-xs text-lime-200">
            <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-lime-300 shadow-[0_0_10px_rgba(190,242,100,.9)]" />
            Available for hire
          </div>
          <a href="#contact" className="rounded-xl bg-lime-300 px-4 py-2.5 text-sm font-semibold text-[#0b1009] transition hover:bg-lime-200">
            Let&apos;s Talk
          </a>
        </div>

        <button
          className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 text-zinc-200 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="glass mx-auto mt-2 max-w-7xl rounded-2xl p-4 lg:hidden">
          <nav className="grid gap-1">
            {links.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 text-sm text-zinc-300 hover:bg-white/[0.04] hover:text-white">
                {link}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="mt-2 rounded-xl bg-lime-300 px-4 py-3 text-center text-sm font-semibold text-[#0b1009]">
              Let&apos;s Talk
            </a>
          </nav>
        </motion.div>
      )}
    </header>
  );
}

function Terminal() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick((v) => (v + 1) % 3), 1800);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="glass glow-hover relative overflow-hidden rounded-[28px] p-3"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(190,242,100,.09),transparent_28%)]" />
      <div className="relative overflow-hidden rounded-[22px] border border-white/8 bg-[#090d09]">
        <div className="flex items-center justify-between border-b border-white/8 px-4 py-3">
          <div className="flex gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-zinc-700"/><span className="h-2.5 w-2.5 rounded-full bg-zinc-700"/><span className="h-2.5 w-2.5 rounded-full bg-zinc-700"/></div>
          <span className="font-mono text-[10px] text-zinc-600">musawar.dev / latest-work</span>
          <div className="h-2.5 w-10 rounded-full bg-lime-300/10" />
        </div>

        <div className="grid gap-4 p-4 sm:p-5">
          <div className="rounded-2xl border border-white/8 bg-white/[0.025] p-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[.2em] text-zinc-500">Current focus</p>
                <h3 className="mt-2 text-xl font-medium tracking-tight text-white">Commerce interfaces that feel engineered.</h3>
              </div>
              <div className="hidden rounded-xl border border-lime-300/15 bg-lime-300/[0.06] p-3 text-lime-200 sm:block"><Code2 size={20}/></div>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-2">
              {[['03','Featured'],['10+','Skills'],['100%','Responsive']].map(([n,l]) => (
                <div key={l} className="rounded-xl border border-white/8 bg-black/20 p-3">
                  <div className="text-lg font-semibold text-white">{n}</div>
                  <div className="mt-1 text-[10px] uppercase tracking-[.14em] text-zinc-600">{l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/8 bg-black/30 p-4 font-mono text-xs leading-6 text-zinc-400">
              <div><span className="text-lime-300">const</span> craft = <span className="text-zinc-200">&#123;</span></div>
              <div className="pl-4">design: <span className="text-lime-200">&quot;clean&quot;</span>,</div>
              <div className="pl-4">code: <span className="text-lime-200">&quot;scalable&quot;</span>,</div>
              <div className="pl-4">details: <span className="text-lime-200">true</span></div>
              <div><span className="text-zinc-200">&#125;</span></div>
            </div>
            <div className="rounded-2xl border border-white/8 bg-white/[0.025] p-4">
              <div className="flex items-center justify-between text-xs text-zinc-500"><span>Build pipeline</span><CheckCircle2 size={14} className="text-lime-300"/></div>
              <div className="mt-4 space-y-3">
                {["Design system", "Responsive UI", "Performance"].map((label, i) => (
                  <div key={label}>
                    <div className="mb-1.5 flex justify-between text-[10px] text-zinc-500"><span>{label}</span><span>{tick >= i ? "ready" : "syncing"}</span></div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-white/5"><motion.div className="h-full rounded-full bg-lime-300" animate={{ width: tick >= i ? "100%" : "58%" }} transition={{ duration: .8 }}/></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Portfolio() {
  return (
    <main id="home" className="noise relative overflow-hidden bg-[#080c09]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[980px] grid-bg" />
      <div className="aurora a"/><div className="aurora b"/><div className="aurora c"/>
      <Navbar />

      <section className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-14 px-5 pb-20 pt-36 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:px-10 lg:pt-32">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, ease: [0.22,1,0.36,1] }}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-lime-300/15 bg-lime-300/[0.05] px-3.5 py-2 text-xs font-medium text-lime-200">
            <Sparkles size={13}/> Shopify Developer · Frontend Engineer
          </div>
          <h1 className="text-balance max-w-4xl text-5xl font-semibold leading-[.95] tracking-[-.06em] text-white sm:text-6xl lg:text-7xl xl:text-[84px]">
            I build digital products with <span className="lime-text">precision</span> and edge.
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
            I&apos;m Musawar — a Shopify and web developer crafting high-performance ecommerce experiences, custom interfaces, and polished front-end systems that make brands feel premium.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <motion.a whileHover={{ y: -3, scale: 1.01 }} whileTap={{ scale: .98 }} href="#projects" className="inline-flex items-center gap-2 rounded-xl bg-lime-300 px-5 py-3.5 text-sm font-semibold text-[#0a1007] shadow-[0_0_30px_rgba(163,230,53,.15)]">
              Explore my work <MoveRight size={16}/>
            </motion.a>
            <motion.a whileHover={{ y: -3 }} href="mailto:musawarkahloon991@gmail.com" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.025] px-5 py-3.5 text-sm font-medium text-white backdrop-blur-xl">
              <Mail size={16}/> Email me
            </motion.a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-5 text-xs text-zinc-500">
            <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-lime-300 shadow-[0_0_10px_rgba(190,242,100,.9)]"/>Available for selected projects</span>
            <span>Pakistan · Remote worldwide</span>
          </div>
        </motion.div>
        <Terminal />
      </section>

      <section className="border-y border-white/7 bg-white/[0.012] py-5">
        <div className="marquee-mask mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6 text-[11px] font-medium uppercase tracking-[.2em] text-zinc-600 sm:justify-between">
          <span>Shopify</span><span>Liquid</span><span>Next.js</span><span>JavaScript</span><span>Responsive UI</span><span>Ecommerce</span><span>GitHub</span>
        </div>
      </section>

      <section id="projects" className="relative mx-auto max-w-7xl px-5 py-28 sm:px-8 lg:px-10 lg:py-36">
        <SectionHeading label="Selected Work" title="Projects built around real business problems." copy="A mix of ecommerce systems, interface work, migrations, and custom development — designed to be useful first, then unforgettable." />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.href}
              target={project.href.startsWith("http") ? "_blank" : undefined}
              rel={project.href.startsWith("http") ? "noreferrer" : undefined}
              {...reveal}
              transition={{ ...reveal.transition, delay: index * .06 }}
              whileHover={{ y: -6 }}
              className={`glass glow-hover group relative min-h-[360px] overflow-hidden rounded-[26px] p-5 sm:p-6 ${project.className}`}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(163,230,53,.07),transparent_26%)] opacity-0 transition duration-500 group-hover:opacity-100" />
              <div className="relative flex h-full flex-col">
                <div className="flex items-start justify-between gap-4">
                  <div className="text-[11px] font-medium uppercase tracking-[.18em] text-lime-200/70">{project.eyebrow}</div>
                  <ArrowUpRight className="text-zinc-600 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-lime-300" size={18}/>
                </div>
                <div className="mt-6 flex min-h-28 items-center justify-center rounded-2xl border border-white/8 bg-black/25 p-6">
                  {project.image ? (
                    <Image src={project.image} alt={`${project.title} logo`} width={420} height={160} className="max-h-20 w-auto object-contain" />
                  ) : (
                    <div className="flex items-center gap-3 text-zinc-500"><MonitorSmartphone size={30}/><Code2 size={28}/><ShoppingBag size={28}/></div>
                  )}
                </div>
                <div className="mt-7">
                  <h3 className="text-2xl font-medium tracking-tight text-white sm:text-3xl">{project.title}</h3>
                  <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-400">{project.description}</p>
                </div>
                <div className="mt-auto flex flex-wrap gap-2 pt-6">{project.stack.map((tech) => <Pill key={tech}>{tech}</Pill>)}</div>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      <section id="experience" className="border-y border-white/7 bg-[#090e0a]/75">
        <div className="mx-auto max-w-7xl px-5 py-28 sm:px-8 lg:px-10 lg:py-36">
          <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
            <SectionHeading label="Experience" title="Engineering the details that make interfaces feel right." copy="I work across the visual and technical layers — turning requirements into reusable, responsive systems instead of one-off pages." />
            <div className="space-y-3">
              {experiences.map((item, i) => (
                <motion.div key={item.role} {...reveal} transition={{ ...reveal.transition, delay: i * .06 }} className="glass glow-hover rounded-2xl p-5 sm:p-6">
                  <div className="grid gap-4 sm:grid-cols-[110px_1fr]">
                    <div className="text-xs font-semibold uppercase tracking-[.18em] text-lime-300">{item.period}</div>
                    <div><h3 className="text-xl font-medium tracking-tight text-white">{item.role}</h3><p className="mt-2 text-sm leading-6 text-zinc-400">{item.detail}</p></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div {...reveal} className="mt-16 grid gap-4 lg:grid-cols-[1.1fr_.9fr]">
            <div className="glass rounded-[26px] p-6 sm:p-8">
              <div className="flex items-center gap-3"><BriefcaseBusiness size={20} className="text-lime-300"/><h3 className="text-lg font-medium text-white">Technical toolkit</h3></div>
              <div className="mt-6 flex flex-wrap gap-2.5">{skills.map((skill) => <Pill key={skill}>{skill}</Pill>)}</div>
            </div>
            <div className="glass rounded-[26px] p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[.18em] text-zinc-500">Principle</p>
              <blockquote className="mt-4 text-2xl font-medium leading-9 tracking-tight text-white">“Make the interface feel obvious — then make the implementation reusable.”</blockquote>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-5 py-28 sm:px-8 lg:px-10 lg:py-36">
        <div className="grid items-center gap-12 lg:grid-cols-[.85fr_1.15fr]">
          <motion.div {...reveal} className="glass glow-hover relative mx-auto w-full max-w-md overflow-hidden rounded-[30px] p-3">
            <div className="relative aspect-[4/4.6] overflow-hidden rounded-[23px] border border-white/8 bg-black">
              <Image src={`${BASE_PATH}/musawar.jpg`} alt="Musawar" fill className="object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/45 to-transparent p-6 pt-28">
                <p className="text-2xl font-medium tracking-tight text-white">Musawar</p>
                <p className="mt-1 text-sm text-zinc-400">Shopify & Web Developer</p>
              </div>
            </div>
          </motion.div>
          <div>
            <SectionHeading label="About" title="A developer who cares about the product, not just the code." />
            <motion.div {...reveal} className="mt-7 space-y-5 text-base leading-8 text-zinc-400">
              <p>I focus on ecommerce and front-end work where the details directly affect how a business is perceived: structure, speed, responsiveness, interaction, hierarchy, and maintainability.</p>
              <p>My work spans Shopify theme customization, custom Liquid sections, product pages, calculators, responsive interfaces, platform migrations, WordPress, and modern React/Next.js experiences.</p>
            </motion.div>
            <motion.div {...reveal} className="mt-8 grid gap-3 sm:grid-cols-2">
              {["Clean, reusable development", "Business-first problem solving", "Responsive by default", "Polished visual execution"].map((item) => (
                <div key={item} className="glass flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-zinc-300"><CheckCircle2 size={16} className="text-lime-300"/>{item}</div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section id="contact" className="px-5 pb-8 sm:px-8 lg:px-10">
        <motion.div {...reveal} className="glass relative mx-auto max-w-7xl overflow-hidden rounded-[32px] p-6 sm:p-10 lg:p-14">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-lime-300/10 blur-[90px]" />
          <div className="relative grid gap-10 lg:grid-cols-[1fr_.95fr]">
            <div>
              <div className="mb-4 text-xs font-semibold uppercase tracking-[.2em] text-lime-300">Start a conversation</div>
              <h2 className="text-balance text-4xl font-semibold tracking-[-.05em] text-white sm:text-5xl lg:text-6xl">Let&apos;s build something extraordinary together.</h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-zinc-400">Tell me what you&apos;re building, what needs fixing, or where the current experience is falling short.</p>
              <div className="mt-8 flex flex-wrap gap-2.5">
                <a href="mailto:musawarkahloon991@gmail.com" className="inline-flex items-center gap-2 rounded-xl bg-lime-300 px-4 py-3 text-sm font-semibold text-[#0b1009]"><Mail size={16}/>Email</a>
                <a href="https://github.com/musawarkahloon12-bit" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.025] px-4 py-3 text-sm text-zinc-200"><Github size={16}/>GitHub</a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.025] px-4 py-3 text-sm text-zinc-200"><Linkedin size={16}/>LinkedIn</a>
              </div>
            </div>

            <form action="https://formsubmit.co/musawarkahloon991@gmail.com" method="POST" className="grid gap-3">
              <input type="hidden" name="_subject" value="New portfolio enquiry"/>
              <input type="hidden" name="_captcha" value="false"/>
              <div className="grid gap-3 sm:grid-cols-2">
                <label className="grid gap-2 text-xs text-zinc-500">Name<input required name="name" className="rounded-xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-700 focus:border-lime-300/40" placeholder="Your name"/></label>
                <label className="grid gap-2 text-xs text-zinc-500">Email<input required type="email" name="email" className="rounded-xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-700 focus:border-lime-300/40" placeholder="you@example.com"/></label>
              </div>
              <label className="grid gap-2 text-xs text-zinc-500">Project type<select name="project_type" className="rounded-xl border border-white/10 bg-[#0b100c] px-4 py-3 text-sm text-zinc-300 outline-none focus:border-lime-300/40"><option>Shopify development</option><option>Website redesign</option><option>Frontend development</option><option>Ecommerce migration</option><option>Other</option></select></label>
              <label className="grid gap-2 text-xs text-zinc-500">Project details<textarea required name="message" rows={5} className="resize-none rounded-xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-700 focus:border-lime-300/40" placeholder="Tell me about the project, goals, and timeline..."/></label>
              <button type="submit" className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-lime-300 px-5 py-3.5 text-sm font-semibold text-[#0b1009] transition hover:bg-lime-200">Send project brief <ArrowUpRight size={16}/></button>
            </form>
          </div>
        </motion.div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
        <div className="flex items-center gap-3"><div className="relative h-8 w-8 overflow-hidden rounded-lg border border-white/8 bg-black"><Image src={`${BASE_PATH}/mk-logo.png`} alt="Musawar logo" fill className="object-cover"/></div><span>© {new Date().getFullYear()} Musawar. Crafted with intent.</span></div>
        <div className="flex gap-5"><a href="#projects" className="hover:text-zinc-300">Projects</a><a href="#about" className="hover:text-zinc-300">About</a><a href="#contact" className="hover:text-zinc-300">Contact</a></div>
      </footer>
    </main>
  );
}
