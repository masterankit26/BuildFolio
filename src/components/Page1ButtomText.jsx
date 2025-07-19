/*import React from 'react'

const Page1ButtomText = () => {
  return (
    <div className='absolute left-0 p-24 flex items-end justify-between buttom-0 w-full text-white font-serif'>
        <div>
            <h2 className='text-4xl font-serif text-black'>JavaScript | MERN</h2>
            <h3 className='text-4xl font-serif text-black'>Data Analyst | AI/ML</h3>

        </div>
    </div>
  )
}

export default Page1ButtomText
*/
import React from 'react';

const Page1ButtomText = () => {
  return (
    <div className='absolute bottom-2 left-6 sm:left-10 px-4 py-2 rounded-md shadow-md'>
      <div className='text-white text-sm sm:text-base leading-relaxed font-semibold text-left'>
        <h2 className='text-3xl font-serif text-amber-50'><span className='text-blue-300'>JavaScript </span>| MERN</h2>
        <h3 className='text-3xl font-serif text-amber-50'>Data Analyst | <span className='text-amber-300'>Python</span></h3>
      </div>
    </div>
  );
};

export default Page1ButtomText;
