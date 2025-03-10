import React, { useState } from 'react'
import WhiteNavbar from '../components/WhiteNavbar'
import WhiteFooter from '../components/WhiteFooter'
import { assets } from '../assets/assets'

const Profile = () => {

    const [isSelected, setIsSelected] = useState("Dashboard")
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
                <div className='grid grid-cols-1 md:grid-cols-12 gap-5'>
                    {/* side nav */}
                    <div className='md:col-span-4'>
                        <ul>
                            <li onClick={() => setIsSelected("Dashboard")} className={`flex items-center gap-2 border-b border-gray-200 py-4 cursor-pointer ${isSelected === "Dashboard" ? "text-yellow-600" : "hover:text-yellow-600"}`}>
                                {isSelected === "Dashboard" && (
                                  <img src={assets.right_arrow_icon} alt="" className='w-3 h-3' />  
                                )}
                                <a href="#" className='text-sm font-light'>Dashboard</a>
                            </li>
                            <li onClick={() => setIsSelected("Orders")} className={`flex items-center gap-2 border-b border-gray-200 py-4 cursor-pointer ${isSelected === "Orders" ? "text-yellow-600" : "hover:text-yellow-600"}`}>
                                {isSelected === "Orders" && (
                                    <img src={assets.right_arrow_icon} alt="" className='w-3 h-3' />
                                )}
                                <a href="#" className='text-sm font-light'>Orders</a>
                            </li>
                            <li onClick={() => setIsSelected("Downloads")} className={`flex items-center gap-2 border-b border-gray-200 py-4 cursor-pointer ${isSelected === "Downloads" ? "text-yellow-600" : "hover:text-yellow-600"}`}>
                                {isSelected === "Downloads" && (
                                    <img src={assets.right_arrow_icon} alt="" className='w-3 h-3' />
                                )}
                                <a href="#" className='text-sm font-light'>Downloads</a>
                            </li>
                            <li onClick={() => setIsSelected("Addresses")} className={`flex items-center gap-2 border-b border-gray-200 py-4 cursor-pointer ${isSelected === "Addresses" ? "text-yellow-600" : "hover:text-yellow-600"}`}>
                                {isSelected === "Addresses" && (
                                    <img src={assets.right_arrow_icon} alt="" className='w-3 h-3' />
                                )}
                                <a href="#" className='text-sm font-light'>Addresses</a>
                            </li>
                            <li onClick={() => setIsSelected("Account Details")} className={`flex items-center gap-2 border-b border-gray-200 py-4 cursor-pointer ${isSelected === "Account Details" ? "text-yellow-600" : "hover:text-yellow-600"}`}>
                                {isSelected === "Account Details" && (
                                    <img src={assets.right_arrow_icon} alt="" className='w-3 h-3' />
                                )}
                                <a href="#" className='text-sm font-light'>Account Details</a>
                            </li>
                            <li onClick={() => setIsSelected("Sign Out")} className={`border-b border-gray-200 py-4 cursor-pointer ${isSelected === "Sign Out" ? "text-yellow-600" : "hover:text-yellow-600"}`}>
                                <a href="#" className='text-sm font-light'>Sign Out</a>
                            </li>
                        </ul>
                    </div>

                    {/* content */}
                    <div className='md:col-span-8'>
                        <div>
                            {/* dashboard */}
                            {isSelected === "Dashboard" && (
                               <div className='pt-4'>
                                    <p className='font-light text-sm text-gray-500 leading-7'>Hello <span className='text-black'>User</span> (not <span className='text-black'>User</span> ? <span className='text-yellow-600'>Log out</span>)</p>
                                    <p className='font-light text-sm text-gray-500 leading-7'>Fron your account dashboard you can view your <span className='text-yellow-600 underline underline-offset-4'>recend orders,</span> manage your <span className='text-yellow-600'>shipping and billing addresses,</span> and <span className='text-yellow-600'>edit your password and account details.</span></p>
                                </div> 
                            )}

                            {/* orders */}
                            {isSelected === "Orders" && (
                                <div className='pt-4'>
                                    <p className='font-light text-sm text-gray-500'>No orders has been made yet.</p>
                                    <button className='flex items-center justify-center border border-yellow-600 px-5 py-2 text-sm text-yellow-600 gap-3 mt-4'>GO SHOP <img src={assets.right_arrow_icon} alt="" className='w-3 h-3' /></button>
                                </div>
                            )}

                            {/* downloads */}
                            {isSelected === "Downloads" && (
                                <div className='pt-4'>
                                    <p className='font-light text-sm text-gray-500'>No downloads available yet.</p>
                                    <button className='flex items-center justify-center border border-yellow-600 px-5 py-2 text-sm text-yellow-600 gap-3 mt-4'>GO SHOP <img src={assets.right_arrow_icon} alt="" className='w-3 h-3' /></button>
                                </div>
                            )}

                            {/* addresses */}
                            {isSelected === "Addresses" && (
                               <div className='pt-4'>
                                    <p className='font-light text-sm text-gray-500'>The following addresses will be used on the checkout page by default.</p>
                                    <div className='mt-4 lg:flex gap-5 space-y-5 lg:space-y-0'>
                                        {/* col lg 6 div */}
                                        <div className='w-full'>
                                            {/* card main */}
                                            <div className='border border-gray-200 bg-gray-50'>
                                                {/* card */}
                                                <div className='p-8 space-y-3'>
                                                    <h3 className='text-xl font-medium'>Billing address</h3>
                                                    <p className='font-light text-sm text-gray-500'>User Name</p>
                                                    <p className='font-light text-sm text-gray-500'>User Company</p>
                                                    <p className='font-light text-sm text-gray-500'>John str</p>
                                                    <p className='font-light text-sm text-gray-500'>New York, NY 10001</p>
                                                    <p className='font-light text-sm text-gray-500'>1-234-987-6543</p>
                                                    <p className='font-light text-sm text-gray-500'>yourmail@mail.com</p>
                                                    <a href="" className='flex items-center text-sm font-light text-yellow-600 gap-1'>Edit <img src={assets.edit_icon} alt="" className='w-3 h-3' /></a>
                                                </div>
                                            </div>
                                        </div>
                                
                                        {/* col lg 6 div */}
                                        <div className='w-full'>
                                            {/* card main */}
                                            <div className='border border-gray-200 bg-gray-50'>
                                                {/* card */}
                                                <div className='p-8 space-y-3'>
                                                    <h3 className='text-xl font-medium'>Shipping Address</h3>
                                                    <p className='font-light text-sm text-gray-500'>You have not setup this type of address yet.</p>
                                                    <a href="" className='flex items-center text-sm font-light text-yellow-600 gap-1'>Edit <img src={assets.edit_icon} alt="" className='w-3 h-3' /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                            )}

                            {/* accound details */}
                            {isSelected === "Account Details" && (
                                <div className='pt-4'>
                                    <form action="" className='space-y-4'>
                                        {/* name div */}
                                        <div className='flex flex-col sm:flex-row gap-5'>
                                            {/* first name */}
                                            <div className='flex flex-col w-full space-y-2'>
                                                <label htmlFor="" className='text-sm font-light text-gray-500'>First Name *</label>
                                                <input type="text" className='outline-none border border-gray-200 bg-gray-50 px-5 py-2 text-sm font-light text-gray-500' />
                                            </div>
                                            {/* last name */}
                                            <div className='flex flex-col w-full space-y-2'>
                                                <label htmlFor="" className='text-sm font-light text-gray-500'>Last Name *</label>
                                                <input type="text" className='outline-none border border-gray-200 bg-gray-50 px-5 py-2 text-sm font-light text-gray-500' />
                                            </div>
                                        </div>

                                        <div className='flex flex-col space-y-2'>
                                            <label htmlFor="" className='text-sm font-light text-gray-500'>Display Name</label>
                                            <input type="text" className='outline-none border border-gray-200 bg-gray-50 px-5 py-2 w-full text-sm font-light text-gray-500' />
                                            <small className='text-xs font-light text-gray-500'>This will be how your name will be displayed in the account section and in reviews</small>
                                        </div>

                                        <div className='flex flex-col space-y-2'>
                                            <label htmlFor="" className='text-sm font-light text-gray-500'>Email address</label>
                                            <input type="email" className='outline-none border border-gray-200 bg-gray-50 px-5 py-2 w-full text-sm font-light text-gray-500' />
                                        </div>

                                        <div className='flex flex-col space-y-2'>
                                            <label htmlFor="" className='text-sm font-light text-gray-500'>Current password (leave blank to leave unchanged)</label>
                                            <input type="password" className='outline-none border border-gray-200 bg-gray-50 px-5 py-2 w-full text-sm font-light text-gray-500' />
                                        </div>

                                        <div className='flex flex-col space-y-2'>
                                            <label htmlFor="" className='text-sm font-light text-gray-500'>New password (leave blank to leave unchanged)</label>
                                            <input type="password" className='outline-none border border-gray-200 bg-gray-50 px-5 py-2 w-full text-sm font-light text-gray-500' />
                                        </div>

                                        <div className='flex flex-col space-y-2'>
                                            <label htmlFor="" className='text-sm font-light text-gray-500'>Confirm new password</label>
                                            <input type="password" className='outline-none border border-gray-200 bg-gray-50 px-5 py-2 w-full text-sm font-light text-gray-500' />
                                        </div>
                                        <button className='flex items-center justify-center border border-yellow-600 px-5 py-2 text-sm text-yellow-600 gap-3'>
                                            <span>SAVE CHANGES</span>
                                            <img src={assets.right_arrow_icon} alt="" className='w-3 h-3' />
                                        </button>
                                    </form>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
      <WhiteFooter/>
    </div>
  )
}

export default Profile
