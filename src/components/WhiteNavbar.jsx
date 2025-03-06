import React from 'react';
import { assets } from '../assets/assets';

const WhiteNavbar = () => {
  return (
    <>
    <div className='flex items-center justify-between bg-white px-5 lg:px-40 py-8'>
      <div className='lg:hidden'>
        <img src={assets.menu_icon_black} alt="Menu" />
      </div>
      <div className='flex gap-10 items-center '>
        <div>
          <img src={assets.logo_icon} alt="Logo" />
        </div>
        <div className='hidden lg:flex'>
          <ul className='flex gap-8 text-gray-700 font-medium text-sm uppercase'>
            <li className='cursor-pointer hover:text-yellow-600 transition'>Home</li>
            <li className='cursor-pointer hover:text-yellow-600 transition'>Shop</li>
            <li className='cursor-pointer hover:text-yellow-600 transition'>Product</li>
            <li className='cursor-pointer hover:text-yellow-600 transition'>Pages</li>
            <li className='cursor-pointer hover:text-yellow-600 transition'>Blog</li>
            <li className='cursor-pointer hover:text-yellow-600 transition'>Elements</li>
          </ul>
        </div>
      </div>
      <div className='flex gap-5 items-center'>
        <div className='hidden lg:flex items-center border rounded-full border-gray-300 gap-3 px-5 py-1.5'>
          <input type="text" placeholder="Search..." className='outline-none flex-1' />
          <button>
            <img src={assets.search_icon_black} alt="Search" className='w-5 h-5' />
          </button>
        </div>
        <img src={assets.shuffle_icon} alt="Shuffle" className='w-6 h-6' />
        <img src={assets.cart_icon_black} alt="Cart" className='w-7 h-7' />
      </div>
    </div>
    </>
  );
};

export default WhiteNavbar;
