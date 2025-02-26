import React from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  return (
    <div className="flex bg-neutral-800 h-15 lg:px-30 md:px-20 items-center justify-around sm:justify-between">
      <div className="lg:hidden sm:block">
        <img src={assets.menu_icon} alt="" />
      </div>
      <div className="hidden lg:block">
        <ul className="flex text-white gap-10">
            <li className="hover:text-yellow-600">Home</li>
            <li className="hover:text-yellow-600">Shop</li>
            <li className="hover:text-yellow-600">Elements</li>
            <li className="hover:text-yellow-600">Buy Molla</li>
        </ul>
      </div>
      <div>
        <img src={assets.logo_icon} alt="" />
      </div>
      <div className="flex gap-8 justify-between">
        <div className="hidden sm:block">
            <input type="text" placeholder="search" className="text-white outline-none" />
        </div>
        <img src={assets.cart_icon} alt="cart" />
        <img src={assets.wishlist_icon} alt="wishlist" />
      </div>
    </div>
  );
};

export default Navbar;
