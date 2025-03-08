import React from 'react'
import WhiteNavbar from '../components/WhiteNavbar'
import WhiteFooter from '../components/WhiteFooter'
import { assets } from '../assets/assets'

const Profile = () => {
  return (
    <div>
      <WhiteNavbar/>
        <div className='flex flex-col justify-center items-center h-40 bg-cover bg-center' style={{backgroundImage: `url(${assets.page_header})`}}>
            <h1 className='text-zinc-800 text-4xl'>My Account</h1>
            <h6 className='text-yellow-600 text-xl'>Shop</h6>
        </div>
        <div>
            {/* main container */}
            <div className='lg:px-40 px-5 py-8 w-full'>
                {/* side nav and contend */}
                <div className='grid grid-cols-1 lg:grid-cols-12 gap-5'>
                    {/* side nav */}
                    <div className='lg:col-span-4'>
                        <ul>
                            <li className='flex items-center gap-2 border-b border-gray-200 py-4 hover:text-yellow-600 cursor-pointer'>
                                <img src={assets.right_arrow_icon} alt="" className='w-3 h-3' />
                                <a href="" className='text-sm font-light'>Dashboard</a>
                            </li>
                            <li className='flex items-center gap-2 border-b border-gray-200 py-4 hover:text-yellow-600 cursor-pointer'>
                                <img src={assets.right_arrow_icon} alt="" className='w-3 h-3' />
                                <a href="" className='text-sm font-light'>Orders</a>
                            </li>
                            <li className='flex items-center gap-2 border-b border-gray-200 py-4 hover:text-yellow-600 cursor-pointer'>
                                <img src={assets.right_arrow_icon} alt="" className='w-3 h-3' />
                                <a href="" className='text-sm font-light'>Downloads</a>
                            </li>
                            <li className='flex items-center gap-2 border-b border-gray-200 py-4 hover:text-yellow-600 cursor-pointer'>
                                <img src={assets.right_arrow_icon} alt="" className='w-3 h-3' />
                                <a href="" className='text-sm font-light'>Addresses</a>
                            </li>
                            <li className='flex items-center gap-2 border-b border-gray-200 py-4 hover:text-yellow-600 cursor-pointer'>
                                <img src={assets.right_arrow_icon} alt="" className='w-3 h-3' />
                                <a href="" className='text-sm font-light'>Account Details</a>
                            </li>
                            <li className='border-b border-gray-200 py-4 hover:text-yellow-600 cursor-pointer'>
                                <a href="" className='text-sm font-light'>Sign Out</a>
                            </li>
                        </ul>
                    </div>

                    {/* content */}
                    <div className='lg:col-span-8'>

                    </div>
                </div>
            </div>
        </div>
      <WhiteFooter/>
    </div>
  )
}

export default Profile
