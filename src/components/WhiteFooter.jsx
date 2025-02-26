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
                    <img className='h-10 w-10' src={assets.facebook_icon} alt="" />
                    <img className='h-10 w-10' src={assets.twitter_icon} alt="" />
                    <img className='h-10 w-10' src={assets.instagram_icon} alt="" />
                    <img className='h-10 w-10' src={assets.youtube_icon} alt="" />
                    <img className='h-10 w-10' src={assets.pinterest_icon} alt="" />
                </div>
            </div>
            <div className='mt-5 pt-5'>
                <div>
                    <h1 className='font-semibold'>Useful Links</h1>
                </div>
                <div className='mt-5 leading-8 text-sm'>
                    <p className='text-neutral-500 font-light'>About Molla</p>
                    <p className='text-neutral-500 font-light'>How to shop on Molla</p>
                    <p className='text-neutral-500 font-light'>FAQ</p>
                    <p className='text-neutral-500 font-light'>Contact Us</p>
                    <p className='text-neutral-500 font-light'>Log in</p>
                </div>
            </div>
            <div className='mt-5 pt-5'>
                <div>
                    <h1 className='font-semibold'>Customer Services</h1>
                </div>
                <div className='mt-5 leading-8 text-sm'>
                    <p className='text-neutral-500 font-light'>Payment Methods</p>
                    <p className='text-neutral-500 font-light'>Money-back guarantee!</p>
                    <p className='text-neutral-500 font-light'>Returns</p>
                    <p className='text-neutral-500 font-light'>Shipping</p>
                    <p className='text-neutral-500 font-light'>Terms and conditions</p>
                    <p className='text-neutral-500 font-light'>Privacy Policy</p>
                </div>
            </div>
            <div className='mt-5 pt-5'>
                <div>
                    <h1 className='font-semibold'>My Account</h1>
                </div>
                <div className='mt-5 leading-8 text-sm'>
                    <p className='text-neutral-500 font-light'>Sign In</p>
                    <p className='text-neutral-500 font-light'>View Cart</p>
                    <p className='text-neutral-500 font-light'>My Wishlist</p>
                    <p className='text-neutral-500 font-light'>Track My Order</p>
                    <p className='text-neutral-500 font-light'>Help</p>
                </div>
            </div>
        </div>
        <hr className="lg:mx-35 mx-5 my-5 mt-15 border-t border-neutral-200" />
    </div>
  )
}

export default WhiteFooter
