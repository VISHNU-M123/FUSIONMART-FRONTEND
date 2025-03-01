import React from 'react'
import { assets } from '../assets/assets'


const WhiteFooter = () => {
  return (
    <div className="bg-white w-full lg:pt-12 pt-5 pb-8">
        <hr className="my-5 mt-15 border-t border-neutral-200" />
        <div className='lg:mx-40 mx-5 my-5 grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-7 lg:gap-10'>
            <div className='mt-5 pt-5'>
                <div>
                    <img src={assets.logo_icon} alt="" />
                </div>
                <div className='mt-5'>
                    <p className='text-neutral-500 leading-7 text-sm font-light'>Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.</p>
                </div>
                <div className='flex gap-3 mt-5 pt-2'>
                    <img className='h-10 w-10 cursor-pointer' src={assets.facebook_icon} alt="" />
                    <img className='h-10 w-10 cursor-pointer' src={assets.twitter_icon} alt="" />
                    <img className='h-10 w-10 cursor-pointer' src={assets.instagram_icon} alt="" />
                    <img className='h-10 w-10 cursor-pointer' src={assets.youtube_icon} alt="" />
                    <img className='h-10 w-10 cursor-pointer' src={assets.pinterest_icon} alt="" />
                </div>
            </div>
            <div className='mt-5 pt-5'>
                <div>
                    <h1 className='font-semibold'>Useful Links</h1>
                </div>
                <div className='mt-5 leading-8 text-sm'>
                    <ul>
                        <li className='text-neutral-500 font-light hover:text-yellow-600 cursor-pointer'>About Molla</li>
                        <li className='text-neutral-500 font-light hover:text-yellow-600 cursor-pointer'>How to shop on Molla</li>
                        <li className='text-neutral-500 font-light hover:text-yellow-600 cursor-pointer'>FAQ</li>
                        <li className='text-neutral-500 font-light hover:text-yellow-600 cursor-pointer'>Contact Us</li>
                        <li className='text-neutral-500 font-light hover:text-yellow-600 cursor-pointer'>Log in</li>
                    </ul>
                </div>
            </div>
            <div className='mt-5 pt-5'>
                <div>
                    <h1 className='font-semibold'>Customer Services</h1>
                </div>
                <div className='mt-5 leading-8 text-sm'>
                    <ul>
                        <li className='text-neutral-500 font-light hover:text-yellow-600 cursor-pointer'>Payment Methods</li>
                        <li className='text-neutral-500 font-light hover:text-yellow-600 cursor-pointer'>Money-back guarantee!</li>
                        <li className='text-neutral-500 font-light hover:text-yellow-600 cursor-pointer'>Returns</li>
                        <li className='text-neutral-500 font-light hover:text-yellow-600 cursor-pointer'>Shipping</li>
                        <li className='text-neutral-500 font-light hover:text-yellow-600 cursor-pointer'>Terms and conditions</li>
                        <li className='text-neutral-500 font-light hover:text-yellow-600 cursor-pointer'>Privacy Policy</li>
                    </ul>
                </div>
            </div>
            <div className='mt-5 pt-5'>
                <div>
                    <h1 className='font-semibold'>My Account</h1>
                </div>
                <div className='mt-5 leading-8 text-sm'>
                    <ul>
                        <li className='text-neutral-500 font-light hover:text-yellow-600 cursor-pointer'>Sign In</li>
                        <li className='text-neutral-500 font-light hover:text-yellow-600 cursor-pointer'>View Cart</li>
                        <li className='text-neutral-500 font-light hover:text-yellow-600 cursor-pointer'>My Wishlist</li>
                        <li className='text-neutral-500 font-light hover:text-yellow-600 cursor-pointer'>Track My Order</li>
                        <li className='text-neutral-500 font-light hover:text-yellow-600 cursor-pointer'>Help</li>
                    </ul>
                </div>
            </div>
        </div>
        <hr className="lg:mx-35 mx-5 my-5 mt-15 border-t border-neutral-200" />
    </div>
  )
}

export default WhiteFooter
