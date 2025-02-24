import React from 'react'
import { assets } from '../assets/assets'

const Login = () => {
  return (
    <div className='bg-gray-100 flex justify-center items-center min-h-screen'>
      <div className='bg-white px-15 py-10 w-full sm:w-96 lg:w-140'>
        <div className='flex'>
          <div className='w-full text-center'>
            <h1 className='text-2xl'>Sign In</h1>
            <hr className='border-yellow-600 border-1 mt-3' />
          </div>
          <div className='w-full text-center'>
            <h1 className='text-2xl'>Register</h1>
            <hr className='border-gray-300 border-1 mt-3' />
          </div>
        </div>
        <form className='mt-5 space-y-4'>
          <div>
            <p className='text-gray-400'>username or email address *</p>
            <input className='w-full px-5 py-2 mt-4 bg-gray-50 outline-none border border-gray-200' type="email" placeholder='Email' />
          </div>
          <div>
            <p className='text-gray-400'>password *</p>
            <input className='w-full px-5 py-2 mt-4 bg-gray-50 outline-none border border-gray-200' type="text" placeholder='Name' />
          </div>
          <div className='flex gap-4 items-center'>
            <div>
              <button className='px-5 py-2 gap-3 items-center justify-center flex border border-yellow-600 text-sm text-yellow-600'>LOG IN<img src={assets.right_arrow_icon} alt="" className='w-4 h-4' /></button>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="rememberMe" className="w-4 h-4 accent-gray-500" />
              <label htmlFor="rememberMe" className="text-gray-400">Remember Me</label>
            </div>
            <div>
              <p className='text-gray-400'>Forgot Your Password?</p>
            </div>
          </div>
        </form>
        <hr className="my-8 border-t border-neutral-200" />
        <p className='text-center text-gray-400'>or sign in with</p>
        <div className='flex items-center justify-center gap-5 my-7'>
          <div className=''>
            <button className='px-5 py-2 text-gray-500 border border-gray-200 flex gap-2'><img src={assets.google_icon} alt="" /> Login with google</button>
          </div>
          <div className=''>
            <button className='px-5 py-2 text-gray-500 border border-gray-200 flex gap-2'><img src={assets.facebook_login_icon} alt="" /> Login with facebook</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
