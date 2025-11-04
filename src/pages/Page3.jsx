import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const Page3 = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { y: 120, opacity: 0, rotateY: 15 },
        {
          y: 0,
          opacity: 1,
          rotateY: 0,
          duration: 1.4,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-16"
    >
      {/* ✨ Animated gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#1e3a8a,_#7e22ce,_#db2777)] bg-[length:300%_300%] animate-gradient opacity-90"></div>

      {/* ✨ Floating particle glow effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-white rounded-full opacity-40 blur-sm animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${6 + Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      {/* ✨ Main content card */}
      <motion.div
        ref={contentRef}
        className="relative z-10 max-w-5xl w-full bg-white/10 backdrop-blur-lg text-white rounded-3xl p-10 space-y-6 shadow-2xl border border-white/20 hover:border-white/40 transition-all duration-500"
        whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(255,255,255,0.25)" }}
      >
        <h2 className="text-5xl font-extrabold text-center uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400 drop-shadow-lg">
          Connect With Me
        </h2>

        {/* ✨ Contact Section */}
        <div className="space-y-3 text-lg text-gray-100 text-center">
          <p>
            <span className="font-semibold text-indigo-300">📞 Phone:</span>{" "}
            +91 9907196257
          </p>
          <p>
            <span className="font-semibold text-indigo-300">📧 Email:</span>{" "}
            <a
              href="mailto:masterankit262003@gmail.com"
              className="text-pink-300 hover:text-pink-400 underline transition"
            >
              masterankit262003@gmail.com
            </a>
          </p>
          <p>
            <span className="font-semibold text-indigo-300">💻 GitHub:</span>{" "}
            <a
              href="https://github.com/masterankit26"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-300 hover:text-pink-400 underline transition"
            >
              masterankit26
            </a>
          </p>
          <p>
            <span className="font-semibold text-indigo-300">🔗 LinkedIn:</span>{" "}
            <a
              href="https://www.linkedin.com/in/masterankit"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-300 hover:text-pink-400 underline transition"
            >
              masterankit
            </a>
          </p>

          <motion.a
            href="/Ankit.pdf"
            download
            whileHover={{
              scale: 1.1,
              background: "linear-gradient(to right, #6366f1, #ec4899)",
              boxShadow: "0 0 20px rgba(236,72,153,0.5)",
            }}
            className="inline-block mt-4 bg-gradient-to-r from-indigo-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold shadow-md transition"
          >
            📄 Download My Resume
          </motion.a>
        </div>

        <hr className="border-gray-400/50 my-8" />

        {/* ✨ Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-2 text-lg"
        >
          <h3 className="text-2xl font-bold text-indigo-300">🎓 Education</h3>
          <p className="text-gray-100 leading-relaxed">
            Kalyani Government Engineering College <br />
            <span className="text-pink-300">B.Tech in Information Technology</span> <br />
            Batch: <span className="text-indigo-300">2023 - 2027</span>
          </p>
        </motion.div>

        {/* ✨ Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="space-y-3 text-lg"
        >
          <p className="leading-relaxed text-gray-100">
            <strong className="text-pink-300">Programming:</strong> C++, Python, JavaScript, Java <br />
            <strong className="text-pink-300">Database:</strong> MySQL, MongoDB, Firebase <br />
            <strong className="text-pink-300">Frameworks:</strong> React.js, Node.js, Flask, Express.js, FastAPI, Email.js <br />
            <strong className="text-pink-300">ML Libraries:</strong> NumPy, Pandas, Matplotlib, Seaborn, Scikit Learn, Tesseract OCR, YOLOv8, OpenCV <br />
            <strong className="text-pink-300">Software:</strong> VS Code, Git & GitHub, Cursor AI
          </p>
        </motion.div>
      </motion.div>

      {/* ✨ Animations */}
      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 10s ease infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); opacity: 0.3; }
          50% { transform: translateY(-30px); opacity: 0.6; }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Page3;
