
import React, { forwardRef } from 'react';

const TiltText = forwardRef((props, ref) => {
  return (
    <div ref={ref} className='text-right text-white font-serif will-change-transform'>
      <h1 className='text-[3vw] sm:text-3xl md:text-3.5xl lg:text-4.5xl uppercase font-bold leading-tight'>
        I'm <span className='text-green-200'>Full Stack</span>
      </h1>
      <h1 className='text-[3vw] sm:text-2xl md:text-2.5xl lg:text-3.5xl uppercase font-semibold'>
        <span className='text-green-200 font-extrabold'>Web</span> Developer
      </h1>
      <h1 className='text-[3.5vw] sm:text-2xl md:text-2.5xl lg:text-3.5xl uppercase font-medium'>
        with <span className='text-green-200 font-extrabold'>AI/ML</span>
      </h1>
    </div>
  );
});

export default TiltText;
