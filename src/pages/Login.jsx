import React, { useState } from 'react'
import { assets } from '../assets/assets'

const Login = () => {

  const [isRegister, setIsRegister] = useState(false);
  
  return (
    <div className='bg-gray-100 flex justify-center items-center min-h-screen md:p-20'>
      <div className='bg-white px-10 py-10 w-full md:w-full sm:w-96 lg:w-140'>
        <div className='flex cursor-pointer'>
          <div onClick={() => setIsRegister(false)} className='w-full text-center'>
            <h1 className='text-2xl'>Sign In</h1>
            <hr className={`border-1 mt-3 ${isRegister ? 'border-gray-300 ' : 'border-yellow-600 '}`} />
          </div>
          <div onClick={() => setIsRegister(true)} className='w-full text-center'>
            <h1 className='text-2xl'>Register</h1>
            <hr className={`border-1 mt-3 ${isRegister ? 'border-yellow-600 ' : 'border-gray-300 '}`} />
          </div>
        </div>
        <form className='mt-5 space-y-4'>
          {isRegister && (
            <>
              <div>
                <p className='text-gray-400'>Name *</p>
                <input className='w-full px-5 py-2 mt-4 bg-gray-50 outline-none border border-gray-200' type="text" placeholder='Name' />
              </div>
              <div>
                <p className='text-gray-400'>Mobile Number *</p>
                <input className='w-full px-5 py-2 mt-4 bg-gray-50 outline-none border border-gray-200' type="tel" placeholder='Mobile Number' />
              </div>
            </>
          )}
          <div>
            <p className='text-gray-400'>Email address *</p>
            <input className='w-full px-5 py-2 mt-4 bg-gray-50 outline-none border border-gray-200' type="email" placeholder='Email' />
          </div>
          <div>
            <p className='text-gray-400'>Password *</p>
            <input className='w-full px-5 py-2 mt-4 bg-gray-50 outline-none border border-gray-200' type="password" placeholder='Password' />
          </div>
          <div className='flex flex-col sm:flex-row gap-4 md:gap-5 items-center'>
            <div className='w-full sm:w-auto'>
              <button className='px-5 py-2 gap-3 items-center justify-center flex border border-yellow-600 text-sm text-yellow-600 w-full sm:w-auto'>
                {isRegister ? 'SIGN UP' : 'LOG IN'}
                <img src={assets.right_arrow_icon} alt="" className='w-4 h-4' />
              </button>
            </div>
            {!isRegister && (
              <>
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="rememberMe" className="w-4 h-4 accent-gray-500" />
                  <label htmlFor="rememberMe" className="text-gray-400">Remember Me</label>
                </div>
                <div>
                  <p className='text-gray-400 cursor-pointer'>Forgot Your Password?</p>
                </div>
              </>
            )}
            {isRegister && (
              <div>
                <p onClick={() => setIsRegister(false)} className='text-gray-400 cursor-pointer'>Already have an account ?</p>
              </div>
            )}
          </div>
        </form>
        <hr className="my-8 border-t border-neutral-200" />
        <p className='text-center text-gray-400'>or sign in with</p>
        <div className='flex flex-col sm:flex-row items-center justify-center gap-5 my-7'>
          <div className='w-full sm:w-auto'>
            <button className='px-5 py-2 text-gray-500 border border-gray-200 flex gap-2 w-full sm:w-auto items-center justify-center'><img src={assets.google_icon} alt="" /> Login with google</button>
          </div>
          <div className='w-full sm:w-auto'>
            <button className='px-5 py-2 text-gray-500 border border-gray-200 flex gap-2 w-full sm:w-auto items-center justify-center'><img src={assets.facebook_login_icon} alt="" /> Login with facebook</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
