import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Page3 = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      contentRef.current,
      {
        y: 100,
        opacity: 0,
        rotateY: 90,
      },
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
  }, []);

  return (
    <div
      ref={sectionRef}
      className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-16 font-serif"
    >
      <div
        ref={contentRef}
        className="max-w-4xl w-full bg-white text-black rounded-2xl shadow-2xl p-10 space-y-6"
      >
        <h2 className="text-3xl font-bold text-center uppercase">Connect With Me</h2>

        <div className="space-y-2 text-lg">
          <p>
            <span className="font-semibold">Phone:</span> +91 9907196257
          </p>
          <p>
            <span className="font-semibold">Email:</span> masterankit26@gmail.com
          </p>
          <p>
            <span className="font-semibold">
              <a
                href="https://github.com/masterankit26"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800 transition duration-300"
              >
                GitHub
              </a>
            </span>
          </p>
          <p>
            <span className="font-semibold">
              <a
                href="https://www.linkedin.com/in/masterankit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800 transition duration-300"
              >
                LinkedIn
              </a>
            </span>
          </p>
          <p>
            <span className="font-semibold">
              <a
                href="/Ankit.pdf"
                download
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Download My Resume
              </a>
            </span>
          </p>
        </div>

        <hr className="border-gray-300" />

        <div className="space-y-2 text-lg">
          <h3 className="text-xl font-bold">Education:</h3>
          <p>
            Kalyani Government Engineering College <br />
            B.Tech in Information Technology <br />
            Batch: 2023 - 2027
          </p>
        </div>

        <div className="space-y-2 text-lg">
          <h3 className="text-xl font-bold">Languages & Frameworks : </h3>
          <p>
            TECHNICAL SKILLS :
            ● Programming - C++, Python, JavaScript, Java
            ● Database - MySQL, MongoDB, Firebase
            ● Frameworks/ Libraries - ReactJS, NodeJS, Flask, ExpressJS
            ● ML Libraries - Numpy, Pandas, Matplotlib, Seaborn, Scikit Learn, Tesseract OCR, YOLOv8, OpenCV
            ● Software - Visual Studio Code, Git & GitHub, Cursor AI
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page3;
