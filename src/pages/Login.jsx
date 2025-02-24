import React from 'react'
import { assets } from '../assets/assets'

const Login = () => {
  return (
    <div className='bg-gray-100 flex justify-center items-center min-h-screen'>
      <div className='bg-white p-15 w-full sm:w-96 lg:w-140'>
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
        <form className='mt-5 space-y-6'>
          <div>
            <p className='text-gray-400'>username or email address *</p>
            <input className='w-full px-5 py-2.5 mt-4 bg-gray-50 outline-none border border-gray-200' type="email" placeholder='Email' />
          </div>
          <div>
            <p className='text-gray-400'>password *</p>
            <input className='w-full px-5 py-2.5 mt-4 bg-gray-50 outline-none border border-gray-200' type="text" placeholder='Name' />
          </div>
          <div className='flex gap-3 items-center justify-center'>
            <div>
              <button className='px-5 py-2 gap-3 items-center justify-center flex border border-yellow-600 text-sm text-yellow-600'>LOG IN<img src={assets.right_arrow_icon} alt="" className='w-4 h-4' /></button>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="rememberMe" className="w-4 h-4" />
              <label htmlFor="rememberMe" className="text-gray-400">Remember Me</label>
            </div>
            <div>
              <p className='text-gray-400'>Forgot Your Password?</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
