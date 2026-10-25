
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TiltText from "../components/TiltText";
import Page1ButtomText from "../components/Page1ButtomText";

gsap.registerPlugin(ScrollTrigger);

const Page1 = () => {
  const tiltRef = useRef(null);
  const containerRef = useRef(null);
  const backgroundRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const tilt = tiltRef.current;
    const background = backgroundRef.current;

    if (!container || !tilt) return;

    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (!reduceMotion) {
        gsap.fromTo(
          ".hero-intro",
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
          }
        );

        gsap.fromTo(
          tilt,
          { opacity: 0, x: 45, rotateY: -12 },
          {
            opacity: 1,
            x: 0,
            rotateY: 0,
            duration: 1.3,
            delay: 0.2,
            ease: "power4.out",
          }
        );

        gsap.fromTo(
          ".hero-bottom",
          { y: 25, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: 0.5,
            ease: "power3.out",
          }
        );

        if (background) {
          gsap.fromTo(
            background,
            { scale: 1.08 },
            { scale: 1, duration: 2, ease: "power2.out" }
          );
        }
      }
    }, container);

    const handleMouseMove = (event) => {
      if (
        !tilt ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        return;
      }

      const rect = container.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;

      gsap.to(tilt, {
        rotateY: (x - 0.5) * 12,
        rotateX: (0.5 - y) * 8,
        duration: 0.45,
        ease: "power2.out",
        transformPerspective: 1200,
        overwrite: "auto",
      });

      if (background) {
        gsap.to(background, {
          x: (0.5 - x) * 10,
          y: (0.5 - y) * 8,
          duration: 0.6,
          ease: "power2.out",
          overwrite: "auto",
        });
      }
    };

    const resetTilt = () => {
      gsap.to(tilt, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.7,
        ease: "power3.out",
      });

      if (background) {
        gsap.to(background, {
          x: 0,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
        });
      }
    };

    container.addEventListener("pointermove", handleMouseMove);
    container.addEventListener("pointerleave", resetTilt);

    return () => {
      container.removeEventListener("pointermove", handleMouseMove);
      container.removeEventListener("pointerleave", resetTilt);
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative isolate min-h-screen overflow-hidden bg-[#080b14] p-3 sm:p-5 lg:p-7"
    >
      <div className="relative min-h-[calc(100svh-1.5rem)] overflow-hidden rounded-[1.5rem] border border-white/10 sm:min-h-[calc(100svh-2.5rem)] sm:rounded-[2rem]">
        {/* Background image */}
        <div
          ref={backgroundRef}
          className="absolute -inset-4 bg-[url('/images/A.jpg')] bg-cover bg-center"
        />

        {/* Cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#080b14]/95 via-[#080b14]/65 to-[#080b14]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080b14] via-transparent to-[#080b14]/35" />

        {/* Ambient glow */}
        <div className="pointer-events-none absolute -right-20 top-1/4 h-80 w-80 rounded-full bg-emerald-400/10 blur-[110px]" />

        {/* Top navigation */}
        <header className="hero-intro relative z-20 flex items-center justify-between px-5 py-6 sm:px-9 sm:py-8 lg:px-12">
          <a
            href="#contact"
            className="text-xl font-black tracking-tight text-white sm:text-2xl"
          >
            AS<span className="text-emerald-300">.</span>
          </a>

          <span className="hidden text-xs uppercase tracking-[0.3em] text-white/50 sm:block">
            Developer Portfolio · 2026
          </span>

          <a
            href="mailto:masterankit262003@gmail.com"
            className="group rounded-full border border-white/20 bg-white/[0.06] px-4 py-2.5 text-sm font-semibold text-white backdrop-blur-xl transition duration-300 hover:border-emerald-200/60 hover:bg-emerald-300 hover:text-black sm:px-6 sm:py-3"
          >
            Hire Me <span className="ml-1">↗</span>
          </a>
        </header>

        {/* Main content */}
        <main className="relative z-10 flex min-h-[75svh] items-center px-6 pb-36 pt-12 sm:px-10 lg:min-h-[75svh] lg:px-16">
          <div className="grid w-full items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            {/* Intro */}
            <div className="max-w-xl">
              <div className="hero-intro mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-emerald-300" />
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-200 sm:text-sm">
                  Python · Full Stack · AI/ML
                </span>
              </div>

              <h1 className="hero-intro text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl">
                Turning
                <br />
                ideas into
                <br />
                <span className="bg-gradient-to-r from-emerald-200 to-cyan-300 bg-clip-text text-transparent">
                  reality.
                </span>
              </h1>

              <p className="hero-intro mt-6 max-w-md text-base leading-8 text-white/65 sm:text-lg">
                I'm Ankit Shaw — a Python and Data Analytics enthusiast
                exploring full-stack development, computer vision, and
                intelligent applications.
              </p>

              <div className="hero-intro mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-3 rounded-full bg-emerald-300 px-6 py-3.5 font-bold text-[#07110e] transition duration-300 hover:-translate-y-1 hover:bg-emerald-200"
                >
                  Explore my work
                  <span className="transition-transform group-hover:translate-x-1">
                    ↗
                  </span>
                </a>

                <a
                  href="https://github.com/masterankit26"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/20 px-6 py-3.5 font-medium text-white transition duration-300 hover:border-white/50 hover:bg-white/10"
                >
                  GitHub ↗
                </a>
              </div>
            </div>

            {/* Interactive title */}
            <div className="flex min-w-0 items-center justify-center lg:justify-end">
              <div className="w-full max-w-2xl [perspective:1200px]">
                <TiltText ref={tiltRef} />
              </div>
            </div>
          </div>
        </main>

        {/* Bottom information */}
        <div className="hero-bottom absolute inset-x-0 bottom-0 z-10 flex flex-col gap-5 border-t border-white/10 bg-black/20 px-5 py-5 backdrop-blur-md sm:flex-row sm:items-end sm:justify-between sm:px-9 sm:py-6 lg:px-12">
          <Page1ButtomText />

          <a
            href="#about"
            className="group flex items-center gap-3 self-start text-xs uppercase tracking-[0.2em] text-white/60 transition hover:text-emerald-200 sm:self-auto"
          >
            Scroll to explore
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/20 transition group-hover:translate-y-1 group-hover:border-emerald-200/50">
              ↓
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Page1;
