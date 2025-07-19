
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Page2 = () => {
  const linesRef = useRef([]);

  useEffect(() => {
    linesRef.current.forEach((line, index) => {
      gsap.fromTo(
        line,
        {
          rotateX: 90,
          opacity: 0,
          transformOrigin: 'top center',
        },
        {
          scrollTrigger: {
            trigger: line,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
          rotateX: 0,
          opacity: 1,
          duration: 1,
          ease: 'power4.out',
          delay: index * 0.05,
        }
      );
    });
  }, []);

  const textLines = ['Impactful', 'Code', 'is the', 'Solution', 'that', 'works!'];

  return (
    <div className='bg-white text-black text-center px-4 py-20'>
      
     
      <h3 className='text-gray-500 font-serif text-base sm:text-lg md:text-xl lg:text-3xl mb-10'>
        Kalyani Government Engineering College — Information Technology '27
      </h3>

      
      <div className='space-y-3 sm:space-y-4 md:space-y-5'>
        {textLines.map((line, index) => (
          <h1
            key={index}
            ref={(el) => (linesRef.current[index] = el)}
            className='font-serif text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[16vw] uppercase leading-none'
          >
            {line}
          </h1>
        ))}
      </div>
    </div>
  );
};

export default Page2;
