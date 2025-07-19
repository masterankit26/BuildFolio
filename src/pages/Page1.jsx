
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import TiltText from '../components/TiltText';
import Page1ButtomText from '../components/Page1ButtomText';

const Page1 = () => {
  const tiltRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { width, height, left, top } = containerRef.current.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;

      const centerX = width / 2;
      const centerY = height / 2;

      const rotateY = ((x - centerX) / centerX) * 10; // Max 10deg
      const rotateX = -((y - centerY) / centerY) * 10;

      gsap.to(tiltRef.current, {
        rotateY,
        rotateX,
        duration: 0.35,
        ease: 'power2.out',
        transformPerspective: 1000,
        transformOrigin: 'center center',
      });
    };
  


    const container = containerRef.current;
    container.addEventListener('mousemove', handleMouseMove);

    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className='h-screen bg-red-200 p-7'>
      <div className='relative h-full w-full shadow-xl shadow-gray-600 bg-[url(images/p2.jpg)] rounded-3xl bg-cover bg-center bg-no-repeat'>

        {/* Tilted Text */}
        <div className='absolute top-[55%] right-10 transform -translate-y-1/2 sm:right-16 md:right-24 lg:right-32'>
          <TiltText ref={tiltRef} />
        </div>

        {/* Bottom Skills */}
        <Page1ButtomText />
      </div>
    </div>
  );
};

export default Page1;



