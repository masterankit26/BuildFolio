
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  {
    title: "Programming",
    items: ["Python", "JavaScript", "Java"],
  },
  {
    title: "Frontend",
    items: ["React.js", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["Flask", "FastAPI", "Express.js", "REST APIs"],
  },
  {
    title: "Data Analytics",
    items: ["Pandas", "NumPy", "Data Cleaning", "Visualization"],
  },
  {
    title: "AI & Computer Vision",
    items: ["OpenCV", "YOLOv8", "Object Detection"],
  },
  {
    title: "Databases",
    items: ["MySQL", "MongoDB", "Firebase"],
  },
];

const projects = [
  {
    number: "01",
    title: "CCTV Surveillance System",
    category: "AI · Computer Vision",
    description:
      "A computer-vision-based surveillance prototype for detecting people and monitoring safety conditions in real time.",
    features: [
      "Restricted-zone monitoring",
      "Helmet detection using YOLOv8",
      "Configurable monitoring zones",
      "Event logging and alerts",
    ],
    tech: ["Python", "OpenCV", "YOLOv8"],
    color: "from-blue-500/20 to-cyan-400/5",
  },
  {
    number: "02",
    title: "Smart Precision Farming",
    category: "Full Stack · Agriculture",
    description:
      "A location-aware agricultural dashboard that brings weather forecasts and geolocation data together to support smarter monitoring.",
    features: [
      "Weather forecast integration",
      "Location-aware dashboard",
      "Flask-powered backend",
      "Environmental data visualization",
    ],
    tech: ["Python", "Flask", "React", "Firebase"],
    color: "from-emerald-500/20 to-teal-400/5",
  },
];

const socials = [
  {
    label: "GitHub",
    detail: "Explore my code",
    href: "https://github.com/masterankit26",
    icon: "⌘",
  },
  {
    label: "LinkedIn",
    detail: "Connect professionally",
    href: "https://www.linkedin.com/in/masterankit",
    icon: "in",
  },
  {
    label: "Email",
    detail: "Let's talk",
    href: "mailto:masterankit262003@gmail.com",
    icon: "✉",
  },
];

const Page3 = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reducedMotion) {
        gsap.set(".reveal", { autoAlpha: 1, y: 0, rotateX: 0 });
        return;
      }

      gsap.fromTo(
        ".hero-content",
        { autoAlpha: 0, y: 45, rotateX: 5 },
        {
          autoAlpha: 1,
          y: 0,
          rotateX: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.12,
        }
      );

      gsap.utils.toArray(".reveal").forEach((element) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, y: 45 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      gsap.to(".orb-one", {
        x: 35,
        y: -25,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".orb-two", {
        x: -25,
        y: 30,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative min-h-screen overflow-hidden bg-[#080b14] px-4 py-20 text-white sm:px-8 lg:px-12"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="orb-one absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-600/20 blur-[110px]" />
        <div className="orb-two absolute -right-32 top-[38%] h-80 w-80 rounded-full bg-violet-600/20 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff12_1px,transparent_1px)] [background-size:28px_28px] opacity-40" />
      </div>

      <div
        ref={contentRef}
        className="relative z-10 mx-auto max-w-6xl"
      >
        {/* Navigation */}
        <nav className="hero-content mb-20 flex items-center justify-between">
          <a
            href="#contact"
            className="text-lg font-bold tracking-tight"
          >
            AS<span className="text-blue-400">.</span>
          </a>

          <div className="flex items-center gap-5 text-sm text-gray-400 sm:gap-8">
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#projects" className="transition hover:text-white">
              Projects
            </a>
            <a href="#skills" className="transition hover:text-white">
              Skills
            </a>
            <a href="#connect" className="transition hover:text-white">
              Contact
            </a>
          </div>
        </nav>

        {/* Hero */}
        <div className="grid items-center gap-12 lg:grid-cols-[1.35fr_0.65fr]">
          <div>
            <div className="hero-content mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] px-4 py-2 text-xs font-medium tracking-wide text-emerald-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              PORTFOLIO · INFORMATION TECHNOLOGY
            </div>

            <p className="hero-content mb-3 text-lg text-gray-400">
              Hello, I'm
            </p>

            <h1 className="hero-content text-5xl font-black leading-tight tracking-tight sm:text-7xl">
              Ankit
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-300 bg-clip-text text-transparent">
                Shaw.
              </span>
            </h1>

            <h2 className="hero-content mt-5 text-xl font-medium text-gray-200 sm:text-2xl">
              Python Developer & Data Analytics Enthusiast
            </h2>

            <p className="hero-content mt-5 max-w-xl text-base leading-8 text-gray-400">
              I build practical applications using Python, full-stack
              technologies, computer vision, and data-driven systems.
              I enjoy turning ideas into useful digital experiences and
              exploring how technology can solve real-world problems.
            </p>

            <div className="hero-content mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-xl bg-blue-600 px-6 py-3 font-semibold shadow-lg shadow-blue-600/20 transition duration-300 hover:-translate-y-1 hover:bg-blue-500"
              >
                Explore My Work ↗
              </a>

              <a
                href="https://drive.google.com/file/d/1JpuhxMlKxavfCRr6KUEBXnrhSbueawtC/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/15 bg-white/[0.04] px-6 py-3 font-semibold transition duration-300 hover:-translate-y-1 hover:border-blue-400/50 hover:bg-white/[0.08]"
              >
                View Resume ↓
              </a>
            </div>
          </div>

          {/* Profile card */}
          <div className="hero-content relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-blue-500/40 via-violet-500/20 to-cyan-400/30 blur-xl" />

            <div className="relative rounded-[2rem] border border-white/10 bg-[#111625]/90 p-7 shadow-2xl backdrop-blur-xl sm:p-9">
              <div className="mb-8 flex items-center justify-between">
                <span className="text-xs tracking-[0.25em] text-gray-500">
                  DEVELOPER PROFILE
                </span>
                <span className="text-xl text-blue-400">✳</span>
              </div>

              <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-3xl border border-blue-400/30 bg-gradient-to-br from-blue-500/20 to-violet-500/20 text-4xl font-black text-blue-300 shadow-lg shadow-blue-500/10">
                AS
              </div>

              <h3 className="mt-6 text-center text-2xl font-bold">
                Ankit Shaw
              </h3>
              <p className="mt-2 text-center text-sm text-gray-400">
                B.Tech · Information Technology
              </p>

              <div className="my-7 h-px bg-white/10" />

              <div className="space-y-4 text-sm">
                <div className="flex justify-between gap-4">
                  <span className="text-gray-500">University</span>
                  <span className="text-right text-gray-200">KGEC</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-gray-500">Graduation</span>
                  <span className="text-gray-200">2027</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-gray-500">Focus</span>
                  <span className="text-right text-gray-200">
                    Python · AI · Data
                  </span>
                </div>
              </div>

              <div className="mt-7 flex flex-wrap gap-2">
                {["Problem Solving", "Development", "Innovation"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-gray-300"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        {/* About */}
        <div id="about" className="reveal mt-32 scroll-mt-10">
          <SectionHeading
            eyebrow="A LITTLE ABOUT ME"
            title="Building with curiosity."
          />

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-7 sm:p-9">
              <span className="text-2xl text-blue-400">✦</span>
              <h3 className="mt-5 text-xl font-bold">Who I Am</h3>
              <p className="mt-4 leading-8 text-gray-400">
                I am an Information Technology student at Kalyani
                Government Engineering College, with hands-on project
                experience in Python applications, computer vision,
                and data-driven systems. I like learning new tools,
                experimenting with ideas, and developing applications
                that connect software with real-world needs.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-7 sm:p-9">
              <span className="text-2xl text-violet-400">⌘</span>
              <h3 className="mt-5 text-xl font-bold">What I Enjoy</h3>
              <p className="mt-4 leading-8 text-gray-400">
                From building interactive React interfaces to exploring
                object detection with OpenCV and YOLOv8, I enjoy working
                across different parts of software development. I am
                especially interested in machine learning, data analysis,
                and real-time monitoring applications.
              </p>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="reveal mt-28">
          <SectionHeading
            eyebrow="MY ACADEMIC JOURNEY"
            title="Education."
          />

          <div className="relative space-y-5 border-l border-blue-400/30 pl-6 sm:pl-8">
            <EducationCard
              year="2023 — 2027"
              title="Bachelor of Technology"
              subtitle="Kalyani Government Engineering College"
              detail="Information Technology · CGPA: 6.5/10"
              tag="Undergraduate"
            />

            <EducationCard
              year="2022"
              title="Class XII · CBSE"
              subtitle="Kanchrapara Harnett English Medium School"
              detail="Percentage: 70.2%"
              tag="Higher Secondary"
            />

            <EducationCard
              year="2020"
              title="Class X · ICSE"
              subtitle="Modern English Academy, Barrackpore"
              detail="Percentage: 69.6%"
              tag="Secondary"
            />
          </div>
        </div>

        {/* Skills */}
        <div id="skills" className="reveal mt-28 scroll-mt-10">
          <SectionHeading
            eyebrow="MY TECH TOOLKIT"
            title="Skills & technologies."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill, index) => (
              <div
                key={skill.title}
                className="group rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-white/[0.06]"
              >
                <div className="mb-5 flex items-center justify-between">
                  <h3 className="font-bold">{skill.title}</h3>
                  <span className="text-sm text-blue-400">
                    0{index + 1}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-white/[0.08] bg-[#0b1020] px-3 py-2 text-xs text-gray-300 transition group-hover:border-blue-400/20"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div id="projects" className="reveal mt-28 scroll-mt-10">
          <SectionHeading
            eyebrow="SELECTED WORK"
            title="Projects I've built."
          />

          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.number}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-[#101523] transition duration-300 hover:-translate-y-2 hover:border-blue-400/40"
              >
                <div
                  className={`relative overflow-hidden bg-gradient-to-br ${project.color} p-7 sm:p-9`}
                >
                  <div className="absolute -right-8 -top-12 h-40 w-40 rounded-full border border-white/10 transition duration-500 group-hover:scale-125" />
                  <div className="absolute -right-2 top-0 h-28 w-28 rounded-full border border-white/10" />

                  <div className="relative flex items-start justify-between gap-4">
                    <span className="rounded-full border border-white/15 bg-black/20 px-3 py-1 text-xs text-gray-300">
                      {project.category}
                    </span>
                    <span className="text-4xl font-black text-white/20">
                      {project.number}
                    </span>
                  </div>

                  <h3 className="relative mt-9 max-w-sm text-2xl font-bold leading-snug sm:text-3xl">
                    {project.title}
                  </h3>
                </div>

                <div className="p-7 sm:p-9">
                  <p className="leading-7 text-gray-400">
                    {project.description}
                  </p>

                  <h4 className="mt-7 text-sm font-semibold text-gray-200">
                    Key features
                  </h4>

                  <ul className="mt-4 space-y-3">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex gap-3 text-sm text-gray-400"
                      >
                        <span className="text-emerald-400">↗</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 flex flex-wrap gap-2 border-t border-white/10 pt-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-blue-400/10 px-3 py-1.5 text-xs font-medium text-blue-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Achievement */}
        <div className="reveal mt-28">
          <SectionHeading
            eyebrow="MILESTONES"
            title="Achievements & highlights."
          />

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-amber-300/20 bg-gradient-to-br from-amber-300/[0.08] to-transparent p-7">
              <span className="text-3xl">🏆</span>
              <h3 className="mt-4 text-lg font-bold">
                Smart India Hackathon 2025
              </h3>
              <p className="mt-3 leading-7 text-gray-400">
                Participated with team Study Hub; the team was waitlisted.
              </p>
            </div>

            <div className="rounded-2xl border border-blue-300/20 bg-gradient-to-br from-blue-300/[0.08] to-transparent p-7">
              <span className="text-3xl">⚡</span>
              <h3 className="mt-4 text-lg font-bold">
                Hands-on Project Development
              </h3>
              <p className="mt-3 leading-7 text-gray-400">
                Developed prototypes involving full-stack application
                development, computer vision, and environmental monitoring.
              </p>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div id="connect" className="reveal mt-28 scroll-mt-10">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-blue-600/15 via-[#111625] to-violet-600/15 p-7 sm:p-12 lg:p-16">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-500/15 blur-3xl" />

            <div className="relative">
              <p className="text-sm font-semibold tracking-[0.25em] text-blue-300">
                LET'S CONNECT
              </p>

              <h2 className="mt-5 max-w-2xl text-4xl font-black leading-tight sm:text-6xl">
                Have an idea?
                <br />
                <span className="text-gray-400">Let's build it.</span>
              </h2>

              <p className="mt-5 max-w-xl leading-8 text-gray-400">
                Interested in software development, technology, or
                collaborative projects? Feel free to reach out.
                I'd be happy to connect.
              </p>

              <a
                href="mailto:masterankit262003@gmail.com"
                className="mt-8 inline-flex items-center gap-3 rounded-xl bg-white px-6 py-3.5 font-bold text-[#080b14] transition duration-300 hover:-translate-y-1 hover:bg-blue-100"
              >
                Get in touch <span>↗</span>
              </a>

              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={
                      social.label === "Email" ? undefined : "_blank"
                    }
                    rel={
                      social.label === "Email"
                        ? undefined
                        : "noopener noreferrer"
                    }
                    className="rounded-2xl border border-white/10 bg-black/20 p-5 transition duration-300 hover:border-blue-400/40 hover:bg-white/[0.05]"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-400/10 font-bold text-blue-300">
                      {social.icon}
                    </div>
                    <h3 className="mt-4 font-bold">{social.label}</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {social.detail}
                    </p>
                  </a>
                ))}
              </div>

              <div className="mt-8 rounded-xl border border-white/10 bg-black/20 p-5">
                <p className="text-xs uppercase tracking-widest text-gray-500">
                  Direct contact
                </p>
                <a
                  href="mailto:masterankit262003@gmail.com"
                  className="mt-3 block break-all text-sm text-gray-200 transition hover:text-blue-300"
                >
                  masterankit262003@gmail.com
                </a>
                <a
                  href="tel:+919907196257"
                  className="mt-2 block text-sm text-gray-300 transition hover:text-blue-300"
                >
                  +91 9907196257
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
        <footer className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center text-sm text-gray-500 sm:flex-row sm:text-left">
          <a href="#contact" className="font-bold text-gray-300">
            ANKIT SHAW<span className="text-blue-400">.</span>
          </a>

          <p>Designed with curiosity · Built with React & GSAP</p>

          <a
            href="#contact"
            className="transition hover:text-white"
          >
            Back to top ↑
          </a>
        </footer>
      </div>
    </section>
  );
};

function SectionHeading({ eyebrow, title }) {
  return (
    <div className="mb-10">
      <p className="mb-3 text-xs font-semibold tracking-[0.25em] text-blue-400">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
        {title}
      </h2>
      <div className="mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-blue-500 to-violet-500" />
    </div>
  );
}

function EducationCard({ year, title, subtitle, detail, tag }) {
  return (
    <div className="relative rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:border-blue-400/30 hover:bg-white/[0.06] sm:p-7">
      <span className="absolute -left-[33px] top-8 h-3 w-3 rounded-full border-2 border-blue-400 bg-[#080b14] sm:-left-[41px]" />

      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="text-sm font-semibold text-blue-300">{year}</span>
        <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-400">
          {tag}
        </span>
      </div>

      <h3 className="mt-4 text-lg font-bold">{title}</h3>
      <p className="mt-2 text-sm text-gray-300">{subtitle}</p>
      <p className="mt-2 text-sm text-gray-500">{detail}</p>
    </div>
  );
}

export default Page3;