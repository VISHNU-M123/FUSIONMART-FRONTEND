import React from "react";
import { assets } from "../assets/assets";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {

  const location = useLocation()
  return (
    <div className="flex bg-neutral-800 h-15 lg:px-30 md:px-20 items-center justify-around sm:justify-between">
      <div className="lg:hidden sm:block">
        <img src={assets.menu_icon} alt="" />
      </div>
      <div className="hidden lg:block">
        <ul className="flex text-white gap-10">
            <Link to='/' className={`hover:text-yellow-600 cursor-pointer text-sm ${location.pathname === '/' ? "text-yellow-600" : ""}`}>HOME</Link>
            <Link to='/allProducts' className={`hover:text-yellow-600 cursor-pointer text-sm ${location.pathname === '/allProducts' ? "text-yellow-600" : ""}`}>SHOP</Link>
            <li className="hover:text-yellow-600 cursor-pointer text-sm">ELEMENTS</li>
            <li className="hover:text-yellow-600 cursor-pointer text-sm">BUY MOLLA</li>
        </ul>
      </div>
      <div>
        <img src={assets.logo_icon} alt="" className="cursor-pointer" />
      </div>
      <div className="flex gap-8 justify-between">
        <div className="hidden sm:block">
            <input type="text" placeholder="search" className="text-white outline-none" />
        </div>
        <Link to='/cart'><img src={assets.cart_icon} alt="cart" className="cursor-pointer" /></Link>
        <Link to='/wishlist'><img src={assets.wishlist_icon} alt="wishlist" className="cursor-pointer" /></Link>
      </div>
    </div>
  );
};

export default Navbar;
