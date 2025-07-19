
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className='fixed w-full z-10 p-20 flex items-center justify-end'>
      <button
        onClick={() => navigate('/hire-me')}
        className='bg-black border-4 text-xl px-6 py-3 rounded-full text-amber-50 hover:bg-gray-500 font-serif transition duration-300'
      >
        Hire Me!
      </button>

      
    </div>
  );
};

export default Header;
