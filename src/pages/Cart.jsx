import React from 'react'
import WhiteNavbar from '../components/WhiteNavbar'
import { assets } from '../assets/assets'
import WhiteFooter from '../components/WhiteFooter'

const Cart = () => {
  return (
    <div>
      <WhiteNavbar/>
        <div className='flex flex-col justify-center items-center h-40 bg-cover bg-center' style={{backgroundImage: `url(${assets.page_header})`}}>
            <h1 className='text-zinc-800 text-4xl'>Shopping Cart</h1>
            <h6 className='text-yellow-600 text-xl'>Shop</h6>
        </div>
        {/* main container */}
        <div className='lg:px-40 px-5 py-8 w-full'>
            {/* table and card */}
            <div className='grid grid-cols-1 lg:grid-cols-12 gap-5'>
                {/* table container */}
                <div className='lg:col-span-9'>
                    {/* table */}
                    <table className='w-full'>
                        <thead className='border-b border-gray-300 hidden md:table-header-group'>
                            <tr>
                                <th className='text-neutral-500 text-sm font-light text-left pb-3'>Product</th>
                                <th className='text-neutral-500 text-sm font-light text-left pb-3'>Price</th>
                                <th className='text-neutral-500 text-sm font-light text-left pb-3'>Quantity</th>
                                <th className='text-neutral-500 text-sm font-light text-left pb-3'>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='border-b border-gray-300 grid grid-cols-1 gap-4 md:text-start text-center md:table-row'>
                                <td className='lg:py-8 block md:table-cell'>
                                    <div className='flex md:gap-8 gap-2 items-center justify-center md:justify-start'>
                                        <figure>
                                            <a href="">
                                                <img src={assets.cart_table_product} alt="" className='cursor-pointer' />
                                            </a>
                                        </figure>
                                        <h3 className='cursor-pointer text-start'>Beige knitted elastic runner shoes</h3>
                                    </div>
                                </td>
                                <td className='md:py-8'>$84.00</td>
                                <td className='md:py-8'>
                                    <div className='p-1'>
                                        <input type="text" className='outline-none border border-gray-300 w-24 px-2 py-1 text-center' />
                                    </div>
                                </td>
                                <td className='text-yellow-600 md:py-8'>$84.00</td>
                                <td className='md:py-8'>
                                    <button className='md:flex items-center justify-center'>
                                        <img src={assets.close_icon} alt="" className='cursor-pointer' />
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    {/* coupon code and update cart */}
                    <div className='flex flex-col md:flex-row justify-between gap-3 my-8'>
                        <div>
                            <form action="">
                                <div className='flex gap-2'>
                                    <input type="text" placeholder='coupon code' className='bg-gray-50 outline-none border border-yellow-600 py-2 px-5 text-sm font-light text-gray-600' />
                                    <div className='border border-yellow-600 py-2 px-3'>
                                        <button><img src={assets.right_arrow_icon} alt="" className='w-3 h-3' /></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <a href="" className='flex items-center gap-2 border border-gray-300 px-5 py-2 w-fit'>
                            <span className='text-sm font-light text-yellow-600'>UPDATE CART</span>
                            <img src={assets.reload_icon} alt="" className='w-3 h-3' />
                        </a>
                    </div>
                </div>

                {/* card div */}
                <div className='lg:col-span-3'>
                    <div className='bg-gray-50 p-8 border border-gray-400 border-dotted rounded-sm'>
                        <h3 className='flex items-center pb-4 font-medium'>Cart Total</h3>
                        <hr className='border-gray-300 w-full' />
                        <table className='w-full'>
                            <tbody className='w-full'>
                                <tr className='flex justify-between w-full py-4'>
                                    <td>Subtotal:</td>
                                    <td>$160.00</td>
                                </tr>
                                <hr className='w-full border-gray-300 my-2' />
                                <tr className='flex justify-between w-full py-4'>
                                    <td>Shipping:</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr className='flex justify-between w-full py-1.5'>
                                    <td>
                                        <div className='flex items-center gap-2'>
                                            <input type="radio" className='w-4 h-4' />
                                            <label className='text-sm font-light'>Free Shipping</label>
                                        </div>
                                    </td>
                                    <td className='text-sm font-light'>$0.00</td>
                                </tr>
                                <tr className='flex justify-between w-full py-1.5'>
                                    <td>
                                        <div className='flex items-center gap-2'>
                                            <input type="radio" className='w-4 h-4' />
                                            <label className='text-sm font-light'>Standard</label>
                                        </div>
                                    </td>
                                    <td className='text-sm font-light'>$10.00</td>
                                </tr>
                                <tr className='flex justify-between w-full py-1.5'>
                                    <td>
                                        <div className='flex items-center gap-2'>
                                            <input type="radio" className='w-4 h-4' />
                                            <label className='text-sm font-light'>Express</label>
                                        </div>
                                    </td>
                                    <td className='text-sm font-light'>$20.00</td>
                                </tr>
                                <hr className='w-full border-gray-300 my-4' />
                                <tr className='flex justify-between w-full py-1.5'>
                                    <td className='text-yellow-600'>Total:</td>
                                    <td className='text-yellow-600'>$160.00</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className='flex justify-center mt-4'>
                            <button className='border border-yellow-600 px-5 py-2 text-sm font-light text-yellow-600 cursor-pointer hover:bg-yellow-600 hover:text-white w-full'>PROCEED TO CHECKOUT</button>
                        </div>
                    </div>
                    <div className='flex items-center justify-center border border-gray-200 gap-3 mt-8 py-2 bg-gray-50 cursor-pointer'>
                        <button className='text-yellow-600 text-sm font-light cursor-pointer'>CONTINUE SHOPPING</button>
                        <img src={assets.reload_icon} alt="" className='w-3.5 h-3' />
                    </div>
                </div>
            </div>
        </div>
      <WhiteFooter/>  
    </div>
  )
}

export default Cart
