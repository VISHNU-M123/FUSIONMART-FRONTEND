import React from 'react';
import { assets } from '../assets/assets';

const BlackFooter = () => {
  return (
    <div className="bg-neutral-800 w-full lg:pt-12 pt-5 pb-8">
      <div className="lg:mx-35 mx-5 my-5 grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-7 lg:gap-5">
        <div className="flex gap-3 items-start">
          <div className="mt-3">
            <img src={assets.rocket_icon} alt="Free Shipping" className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-white font-medium">Free Shipping</h1>
            <p className="text-neutral-500">Orders $50 or more</p>
          </div>
        </div>

        <div className="flex gap-3 items-start">
          <div className="mt-3">
            <img src={assets.reset_left} alt="Free Returns" className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-white font-medium">Free Returns</h1>
            <p className="text-neutral-500">Within 30 days</p>
          </div>
        </div>

        <div className="flex gap-3 items-start">
          <div className="mt-3">
            <img src={assets.error_icon} alt="Discount" className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-white font-medium">Get 20% Off 1 Item</h1>
            <p className="text-neutral-500">When you sign up</p>
          </div>
        </div>

        <div className="flex gap-3 items-start">
          <div className="mt-3">
            <img src={assets.life_ring} alt="Support" className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-white font-medium">We Support</h1>
            <p className="text-neutral-500">24/7 amazing services</p>
          </div>
        </div>
      </div>
      <hr className="lg:mx-35 mx-5 my-5 mt-15 border-t border-neutral-500" />
      <div className='lg:mx-35 mx-5 my-5 grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-7 lg:gap-7'>
        <div className='mt-5 pt-5'>
            <div>
                <img src={assets.logo_footer} alt="" />
            </div>
            <div className='mt-5'>
                <p className='text-neutral-500 leading-7'>Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.</p>
            </div>
            <div className='flex gap-3 mt-5 pt-2'>
                <img className='h-10 w-10' src={assets.facebook_icon} alt="" />
                <img className='h-10 w-10' src={assets.twitter_icon} alt="" />
                <img className='h-10 w-10' src={assets.instagram_icon} alt="" />
                <img className='h-10 w-10' src={assets.youtube_icon} alt="" />
                <img className='h-10 w-10' src={assets.pinterest_icon} alt="" />
            </div>
        </div>
        <div className='mt-5 pt-5'>
            <div>
                <h1 className='text-white font-medium'>Useful Links</h1>
            </div>
            <div className='mt-5 leading-8'>
                <p className='text-neutral-500'>About Molla</p>
                <p className='text-neutral-500'>How to shop on Molla</p>
                <p className='text-neutral-500'>FAQ</p>
                <p className='text-neutral-500'>Contact Us</p>
                <p className='text-neutral-500'>Log in</p>
            </div>
        </div>
        <div className='mt-5 pt-5'>
            <div>
                <h1 className='text-white font-medium'>Customer Services</h1>
            </div>
            <div className='mt-5 leading-8'>
                <p className='text-neutral-500'>Payment Methods</p>
                <p className='text-neutral-500'>Money-back guarantee!</p>
                <p className='text-neutral-500'>Returns</p>
                <p className='text-neutral-500'>Shipping</p>
                <p className='text-neutral-500'>Terms and conditions</p>
                <p className='text-neutral-500'>Privacy Policy</p>
            </div>
        </div>
        <div className='mt-5 pt-5'>
            <div>
                <h1 className='text-white font-medium'>My Account</h1>
            </div>
            <div className='mt-5 leading-8'>
                <p className='text-neutral-500'>Sign In</p>
                <p className='text-neutral-500'>View Cart</p>
                <p className='text-neutral-500'>My Wishlist</p>
                <p className='text-neutral-500'>Track My Order</p>
                <p className='text-neutral-500'>Help</p>
            </div>
        </div>
      </div>
      <hr className="lg:mx-35 mx-5 my-5 mt-15 border-t border-neutral-500" />
    </div>
  );
};

export default BlackFooter;