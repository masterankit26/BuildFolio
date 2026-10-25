
import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import gsap from "gsap";

const HireMe = () => {
  const form = useRef(null);
  const pageRef = useRef(null);

  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const ctx = gsap.context(() => {
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reducedMotion) return;

      gsap.fromTo(
        ".hire-animate",
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
        }
      );

      gsap.to(".hire-orb", {
        y: -24,
        x: 18,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!form.current || status === "sending") return;

    setStatus("sending");
    setErrorMessage("");

    try {
      await emailjs.sendForm(
        "service_5g0dc9u",
        "template_0tbsuiw",
        form.current,
        "68cluGb3Fz_FPfLj-"
      );

      form.current.reset();
      setStatus("success");

      requestAnimationFrame(() => {
        gsap.fromTo(
          ".confirmation",
          { opacity: 0, y: 16 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
          }
        );
      });
    } catch (error) {
      console.error("EmailJS error:", error);

      setErrorMessage(
        "Your message could not be sent. Please try again or email me directly."
      );
      setStatus("error");
    }
  };

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-white placeholder:text-gray-500 outline-none transition duration-300 focus:border-emerald-300/60 focus:bg-white/[0.07] focus:ring-2 focus:ring-emerald-300/10";

  return (
    <main
      ref={pageRef}
      className="relative isolate min-h-screen overflow-hidden bg-[#080b14] px-4 py-12 text-white sm:px-8 sm:py-16"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="hire-orb absolute -left-24 top-20 h-72 w-72 rounded-full bg-emerald-400/10 blur-[110px]" />
        <div className="hire-orb absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-blue-500/15 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0d_1px,transparent_1px)] [background-size:28px_28px]" />
      </div>

      <div className="mx-auto max-w-6xl">
        {/* Top bar */}
        <header className="hire-animate mb-12 flex items-center justify-between">
          <a
            href="/"
            className="text-xl font-black tracking-tight sm:text-2xl"
          >
            AS<span className="text-emerald-300">.</span>
          </a>

          <a
            href="/"
            className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-300 transition hover:border-emerald-300/40 hover:text-white"
          >
            ← Back to portfolio
          </a>
        </header>

        <div className="grid items-start gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          {/* Left panel */}
          <section className="hire-animate pt-4 lg:sticky lg:top-12">
            <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-200">
              <span className="h-px w-8 bg-emerald-300" />
              Let's connect
            </p>

            <h1 className="text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl">
              Let's build
              <br />
              something
              <br />
              <span className="bg-gradient-to-r from-emerald-200 to-cyan-300 bg-clip-text text-transparent">
                meaningful.
              </span>
            </h1>

            <p className="mt-6 max-w-md text-base leading-8 text-gray-400">
              Looking for a developer for your team or project? Share
              the opportunity with me. I'd love to hear about the role
              and how I might contribute.
            </p>

            <div className="mt-10 space-y-4">
              <a
                href="mailto:masterankit262003@gmail.com"
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-4 transition hover:border-emerald-300/30 hover:bg-white/[0.06]"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-300/10 text-xl text-emerald-200">
                  ✉
                </span>
                <span className="min-w-0">
                  <span className="block text-xs text-gray-500">
                    Email me directly
                  </span>
                  <span className="mt-1 block break-all text-sm font-medium text-gray-200 transition group-hover:text-emerald-200">
                    masterankit262003@gmail.com
                  </span>
                </span>
                <span className="ml-auto text-gray-500 transition group-hover:-translate-y-1 group-hover:translate-x-1">
                  ↗
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/masterankit"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-4 transition hover:border-blue-300/30 hover:bg-white/[0.06]"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-400/10 font-bold text-blue-200">
                  in
                </span>
                <span>
                  <span className="block text-xs text-gray-500">
                    Connect professionally
                  </span>
                  <span className="mt-1 block text-sm font-medium text-gray-200 transition group-hover:text-blue-200">
                    LinkedIn Profile
                  </span>
                </span>
                <span className="ml-auto text-gray-500 transition group-hover:-translate-y-1 group-hover:translate-x-1">
                  ↗
                </span>
              </a>
            </div>

            <div className="mt-10 border-t border-white/10 pt-6">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                Areas of interest
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "Python",
                  "Full Stack",
                  "Data Analytics",
                  "AI / ML",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Contact form */}
          <section className="hire-animate rounded-[2rem] border border-white/10 bg-[#111625]/85 p-5 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-9 lg:p-10">
            <div className="mb-8">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-200">
                Contact form
              </p>

              <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                Tell me about the opportunity.
              </h2>

              <p className="mt-3 text-sm leading-6 text-gray-400">
                Fill in the details below and I'll get back to you.
              </p>
            </div>

            <form
              ref={form}
              onSubmit={sendEmail}
              onChange={() => {
                if (status === "success" || status === "error") {
                  setStatus("idle");
                  setErrorMessage("");
                }
              }}
              className="space-y-6"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="hire-name"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Your name
                  </label>
                  <input
                    id="hire-name"
                    type="text"
                    name="from_name"
                    placeholder="John Doe"
                    autoComplete="name"
                    required
                    maxLength={100}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="hire-email"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Work email
                  </label>
                  <input
                    id="hire-email"
                    type="email"
                    name="email"
                    placeholder="you@company.com"
                    autoComplete="email"
                    required
                    maxLength={254}
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="hire-company"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Company
                    <span className="ml-2 text-gray-600">(Optional)</span>
                  </label>
                  <input
                    id="hire-company"
                    type="text"
                    name="company"
                    placeholder="Company name"
                    autoComplete="organization"
                    maxLength={150}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="hire-role"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Opportunity type
                  </label>
                  <select
                    id="hire-role"
                    name="role"
                    required
                    defaultValue=""
                    className={`${inputClass} [color-scheme:dark]`}
                  >
                    <option value="" disabled>
                      Select an opportunity
                    </option>
                    <option value="Software Development Internship">
                      Software Development Internship
                    </option>
                    <option value="Full Stack Development">
                      Full Stack Development
                    </option>
                    <option value="Python Development">
                      Python Development
                    </option>
                    <option value="Data Analytics">
                      Data Analytics
                    </option>
                    <option value="AI / ML">
                      AI / ML
                    </option>
                    <option value="Other Opportunity">
                      Other
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="hire-message"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Message or job details
                </label>
                <textarea
                  id="hire-message"
                  name="message"
                  rows={6}
                  placeholder="Tell me about the role, requirements, team, or project..."
                  required
                  minLength={10}
                  maxLength={5000}
                  className={`${inputClass} resize-y`}
                />
              </div>

              {status === "success" && (
                <div
                  role="status"
                  aria-live="polite"
                  className="confirmation rounded-xl border border-emerald-300/20 bg-emerald-300/10 p-4 text-sm leading-6 text-emerald-200"
                >
                  <span className="font-bold">Message sent successfully!</span>
                  <br />
                  Thanks for reaching out. I'll get back to you soon.
                </div>
              )}

              {status === "error" && (
                <div
                  role="alert"
                  className="rounded-xl border border-red-300/20 bg-red-300/10 p-4 text-sm leading-6 text-red-200"
                >
                  {errorMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-emerald-300 px-6 py-4 font-bold text-[#07110e] transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-200 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
              >
                {status === "sending" ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-black/25 border-t-black" />
                    Sending message...
                  </>
                ) : (
                  <>
                    Send inquiry
                    <span className="transition-transform group-hover:translate-x-1">
                      ↗
                    </span>
                  </>
                )}
              </button>

              <p className="text-center text-xs leading-5 text-gray-500">
                Your details will be used to respond to this inquiry.
              </p>
            </form>
          </section>
        </div>

        <footer className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-center text-xs text-gray-500 sm:flex-row sm:text-left">
          <p>
            AS<span className="text-emerald-300">.</span> · Ankit Shaw
          </p>
          <p>Python · Full Stack · Data Analytics</p>
        </footer>
      </div>
    </main>
  );
};

export default HireMe;
