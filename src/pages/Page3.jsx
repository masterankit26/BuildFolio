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
        { y: 100, opacity: 0, rotateY: 45 },
        {
          y: 0,
          opacity: 1,
          rotateY: 0,
          duration: 1.2,
          ease: "power3.out",
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
      className="relative min-h-screen overflow-hidden flex items-center justify-center px-6 py-16"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-500 animate-gradient bg-[length:400%_400%] opacity-90"></div>

      {/* Glassmorphic overlay */}
      <div className="absolute inset-0 backdrop-blur-sm bg-black/20"></div>

      {/* Main Content */}
      <motion.div
        ref={contentRef}
        className="relative max-w-4xl w-full bg-white/80 text-gray-900 rounded-3xl shadow-2xl p-10 space-y-6 border border-white/40"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-extrabold text-center uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500">
          Connect With Me
        </h2>

        <div className="space-y-3 text-lg">
          <p>
            <span className="font-semibold">📞 Phone:</span> +91 9907196257
          </p>
          <p>
            <span className="font-semibold">📧 Email:</span>{" "}
            <a
              href="mailto:masterankit262003@gmail.com"
              className="text-blue-600 hover:text-blue-800 underline transition duration-300"
            >
              masterankit262003@gmail.com
            </a>
          </p>
          <p>
            <span className="font-semibold">💻 GitHub:</span>{" "}
            <a
              href="https://github.com/masterankit26"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline transition duration-300"
            >
              masterankit26
            </a>
          </p>
          <p>
            <span className="font-semibold">🔗 LinkedIn:</span>{" "}
            <a
              href="https://www.linkedin.com/in/masterankit"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline transition duration-300"
            >
              masterankit
            </a>
          </p>

          <motion.a
            href="/Ankit.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block mt-4 bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition"
          >
            Download My Resume
          </motion.a>
        </div>

        <hr className="border-gray-300" />

        <div className="space-y-2 text-lg">
          <h3 className="text-2xl font-bold text-indigo-700">Education 🎓</h3>
          <p>
            <span className="font-semibold">
              Kalyani Government Engineering College
            </span>
            <br />
            B.Tech in Information Technology <br />
            <span className="text-gray-600">Batch: 2023 - 2027</span>
          </p>
        </div>

        <div className="space-y-2 text-lg">
          <h3 className="text-2xl font-bold text-indigo-700">
            Skills & Frameworks ⚙️
          </h3>
          <p className="leading-relaxed">
            <strong>Programming:</strong> C++, Python, JavaScript, Java <br />
            <strong>Database:</strong> MySQL, MongoDB, Firebase <br />
            <strong>Frameworks / Libraries:</strong> React.js, Node.js, Flask,
            Express.js, FastAPI, Email.js <br />
            <strong>ML Libraries:</strong> NumPy, Pandas, Matplotlib, Seaborn,
            Scikit Learn, Tesseract OCR, YOLOv8, OpenCV <br />
            <strong>Software:</strong> VS Code, Git & GitHub, Cursor AI
          </p>
        </div>
      </motion.div>

      {/* Add background motion animation */}
      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 10s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default Page3;
