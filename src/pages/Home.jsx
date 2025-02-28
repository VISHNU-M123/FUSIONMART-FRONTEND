import React from "react";
import Navbar from "../components/Navbar";
import { assets } from "../assets/assets";
import ProductCard from "../components/ProductCard";
import BlackFooter from "../components/BlackFooter";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div>
        <img src={assets.banner} alt="" className="w-full lg:h-screen object-cover" />
      </div>
      <div className="mx-auto max-w-[1200px] px-5 my-5 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <div className="flex justify-center my-8 py-8">
        <button className="border border-yellow-600 px-5 py-2 text-sm font-light cursor-pointer">VIEW MORE PRODUCTS</button>
      </div>
      <BlackFooter />
    </div>
  );
};

export default Home;
