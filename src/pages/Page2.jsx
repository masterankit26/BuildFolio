
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const textLines = [
  { text: "Impactful", accent: false },
  { text: "Code", accent: true },
  { text: "is the", accent: false },
  { text: "Solution", accent: true },
  { text: "that", accent: false },
  { text: "works.", accent: true },
];

const Page2 = () => {
  const sectionRef = useRef(null);
  const lineRefs = useRef([]);
  const spotlightRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reducedMotion) {
        gsap.set(".reveal-line", {
          opacity: 1,
          rotateX: 0,
          y: 0,
          clipPath: "inset(0 0 0 0)",
        });
        return;
      }

      gsap.fromTo(
        ".intro-label",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      lineRefs.current.forEach((line, index) => {
        if (!line) return;

        gsap.fromTo(
          line,
          {
            rotateX: 65,
            y: 70,
            opacity: 0,
            clipPath: "inset(0 0 100% 0)",
            transformOrigin: "50% 100%",
          },
          {
            rotateX: 0,
            y: 0,
            opacity: 1,
            clipPath: "inset(0 0 0% 0)",
            duration: 1.05,
            ease: "power4.out",
            scrollTrigger: {
              trigger: line,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
            delay: index * 0.045,
          }
        );
      });

      gsap.fromTo(
        ".bottom-note",
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".bottom-note",
            start: "top 92%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.to(".accent-word", {
        backgroundPosition: "200% center",
        duration: 4,
        ease: "none",
        repeat: -1,
      });

      gsap.to(".decorative-ring", {
        rotate: 360,
        duration: 35,
        ease: "none",
        repeat: -1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handlePointerMove = (event) => {
    if (!spotlightRef.current) return;

    const rect = sectionRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    gsap.to(spotlightRef.current, {
      x,
      y,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  return (
    <section
      ref={sectionRef}
      onPointerMove={handlePointerMove}
      className="relative isolate overflow-hidden bg-[#08090d] px-4 py-24 text-white sm:px-8 sm:py-32 lg:px-12 lg:py-36"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(37,99,235,0.12),transparent_60%)]" />

        <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:70px_70px]" />

        <div
          ref={spotlightRef}
          className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-blue-500/10 blur-[100px]"
        />

        <div className="decorative-ring absolute -right-40 top-1/4 h-[30rem] w-[30rem] rounded-full border border-white/[0.045]" />

        <div className="absolute -right-20 top-1/3 h-72 w-72 rounded-full border border-blue-400/[0.07]" />
      </div>

      <div className="mx-auto max-w-[1600px]">
        {/* Intro label */}
        <div className="intro-label mb-20 flex flex-col gap-5 sm:mb-28 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-blue-400" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-300 sm:text-sm">
                The Developer Mindset
              </span>
            </div>

            <h2 className="max-w-2xl text-xl font-light tracking-wide text-gray-400 sm:text-2xl">
              Design it. Build it. Scale it.
              <span className="mt-2 block text-white">
                Ideas deserve great execution.
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-3 text-xs tracking-widest text-gray-500">
            <span className="h-2 w-2 animate-pulse rounded-full bg-blue-400" />
            CODE WITH PURPOSE
          </div>
        </div>

        {/* Main typography */}
        <div className="relative">
          <div className="pointer-events-none absolute -left-6 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-white/10 to-transparent lg:block" />

          <div className="space-y-1 sm:space-y-2">
            {textLines.map((item, index) => (
              <div
                key={item.text}
                className="overflow-hidden"
                style={{ perspective: "1000px" }}
              >
                <h1
                  ref={(el) => {
                    lineRefs.current[index] = el;
                  }}
                  className={[
                    "reveal-line select-none text-center font-black uppercase",
                    "text-[15vw] leading-[0.88] tracking-[-0.075em]",
                    "sm:text-[13vw] lg:text-[12vw]",
                    item.accent
                      ? "accent-word bg-gradient-to-r from-blue-400 via-cyan-200 to-violet-400 bg-[length:200%_auto] bg-clip-text text-transparent"
                      : "text-[#f3f4f6]",
                  ].join(" ")}
                >
                  {item.text}
                </h1>
              </div>
            ))}
          </div>

          {/* Decorative side markers */}
          <div className="pointer-events-none absolute left-0 top-1/2 hidden -translate-y-1/2 flex-col gap-3 text-[10px] tracking-[0.25em] text-gray-600 xl:flex">
            <span>BUILD</span>
            <span className="h-10 w-px bg-white/15" />
            <span>CREATE</span>
            <span className="h-10 w-px bg-white/15" />
            <span>INNOVATE</span>
          </div>
        </div>

        {/* Closing statement */}
        <div className="bottom-note mt-20 flex flex-col gap-8 border-t border-white/10 pt-8 sm:mt-28 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gray-500">
              My approach
            </p>

            <p className="mt-4 text-lg leading-8 text-gray-300 sm:text-xl">
              Turning complex problems into thoughtful solutions through
              <span className="text-white"> code, creativity, </span>
              and continuous learning.
            </p>
          </div>

          <a
            href="#projects"
            className="group inline-flex w-fit items-center gap-4 rounded-full border border-white/15 px-6 py-4 text-sm font-semibold transition duration-300 hover:border-blue-400/60 hover:bg-blue-400/10"
          >
            Explore my work
            <span className="text-blue-300 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
          </a>
        </div>

        {/* Bottom metadata */}
        <div className="mt-16 flex items-center justify-between border-t border-white/[0.06] pt-5 text-[10px] uppercase tracking-[0.2em] text-gray-600 sm:text-xs">
          <span>Ideas into reality</span>
          <span>02 / 03</span>
        </div>
      </div>
    </section>
  );
};

export default Page2;
