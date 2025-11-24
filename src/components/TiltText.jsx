
import React, { forwardRef } from 'react';

const TiltText = forwardRef((props, ref) => {
  return (
    <div ref={ref} className='text-right text-white font-serif will-change-transform'>
      <h1 className='text-[5vw] sm:text-4xl md:text-4xl lg:text-5xl uppercase font-bold leading-tight'>
        I'm <span className='text-white'>Full Stack</span>
      </h1>
      <h1 className='text-[4vw] sm:text-2xl md:text-3xl lg:text-4xl uppercase font-semibold'>
        <span className='text-green-200 font-extrabold'>Web</span> Developer
      </h1>
      <h1 className='text-[3.5vw] sm:text-xl md:text-2xl lg:text-3xl uppercase font-medium'>
        with <span className='text-black font-extrabold'>AI/ML</span>
      </h1>
    </div>
  );
});

export default TiltText;
