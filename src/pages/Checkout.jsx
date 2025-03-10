import React, { useState } from 'react'
import WhiteNavbar from '../components/WhiteNavbar'
import WhiteFooter from '../components/WhiteFooter'
import { assets } from '../assets/assets'

const Checkout = () => {

  const [selectedMethod, setSelectedMethod] = useState("")
  const [isFocused, setIsFocused] = useState(false)
  return (
    <div>
      <WhiteNavbar/>
        <div className='flex flex-col justify-center items-center h-40 bg-cover bg-center' style={{backgroundImage: `url(${assets.page_header})`}}>
            <h1 className='text-zinc-800 text-4xl'>Checkout</h1>
            <h6 className='text-yellow-600 text-xl'>Shop</h6>
        </div>
        {/* main container */}
        <div>
          {/* form and card main */}
          <div className='lg:px-40 px-5 py-8 w-full'>
            {/* coupon code div */}
            <div className='relative md:w-sm w-full'>
              <form action="">
                <label className={`absolute left-3 top-2.5 text-gray-600 text-sm transition-all duration-300 truncate w-[90%] ${isFocused ? "opacity-0" : "opacity-100"}`}>Have a Coupon ? <span className='text-yellow-600 text-sm'>Click here to enter your code</span></label>
                <input type="text" className={`outline-none border border-gray-600 ${isFocused ? "border-yellow-600" : "border-gray-600"} border-dotted rounded-sm px-3 py-2 w-full relative`} onFocus={() => setIsFocused(true)} onBlur={(e) => setIsFocused(e.target.value !== "")} />
              </form>
            </div>

            {/* main form */}
            <form action="">
              {/* form and card */}
              <div className='grid grid-cols-1 lg:grid-cols-12 gap-5'>
                {/* form */}
                <div className='lg:col-span-9 space-y-4'>
                  <h2 className='font-medium mt-8'>Billing Details</h2>
                  {/* first name last name */}
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    {/* first name */}
                    <div className='flex flex-col'>
                      <label className='text-gray-500 font-light text-sm'>First Name *</label>
                      <input type="text" className='outline-none border border-gray-200 bg-gray-50 px-5 py-2 text-gray-500 font-light text-sm' />
                    </div>
                    {/* last name */}
                    <div className='flex flex-col'>
                      <label className='text-gray-500 font-light text-sm'>Last Name *</label>
                      <input type="text" className='outline-none border border-gray-200 bg-gray-50 px-5 py-2 text-gray-500 font-light text-sm' />
                    </div>
                  </div>
                  <label className='text-gray-500 font-light text-sm'>Company Name (Optional)</label>
                  <input type="text" className='outline-none border border-gray-200 bg-gray-50 px-5 py-2 w-full text-gray-500 font-light text-sm' />
                  <label className='text-gray-500 font-light text-sm'>Country</label>
                  <input type="text" className='outline-none border border-gray-200 bg-gray-50 px-5 py-2 w-full text-gray-500 font-light text-sm' />
                  <label className='text-gray-500 font-light text-sm'>Street address *</label>
                  <input type="text" className='outline-none border border-gray-200 bg-gray-50 px-5 py-2 w-full placeholder:text-sm placeholder:font-light placeholder:text-gray-500 text-gray-500 font-light text-sm' placeholder='house number and street name' />
                  <input type="text" className='outline-none border border-gray-200 bg-gray-50 px-5 py-2 w-full placeholder:text-sm placeholder:font-light placeholder:text-gray-500 text-gray-500 font-light text-sm' placeholder='appartments, suite, unit etc...' />
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    <div className='flex flex-col'>
                      <label className='text-gray-500 font-light text-sm'>Town / City *</label>
                      <input type="text" className='outline-none border border-gray-200 bg-gray-50 px-5 py-2 text-gray-500 font-light text-sm' />
                    </div>
                    <div className='flex flex-col'>
                      <label className='text-gray-500 font-light text-sm'>State/Country</label>
                      <input type="text" className='outline-none border border-gray-200 bg-gray-50 px-5 py-2 text-gray-500 font-light text-sm' />
                    </div>
                  </div>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    <div className='flex flex-col'>
                      <label className='text-gray-500 font-light text-sm'>Postcode / ZIP *</label>
                      <input type="text" className='outline-none border border-gray-200 bg-gray-50 px-5 py-2 text-gray-500 font-light text-sm' />
                    </div>
                    <div className='flex flex-col'>
                      <label className='text-gray-500 font-light text-sm'>Phone *</label>
                      <input type="text" className='outline-none border border-gray-200 bg-gray-50 px-5 py-2 text-gray-500 font-light text-sm' />
                    </div>
                  </div>
                  <label className='text-gray-500 font-light text-sm'>Email address *</label>
                  <input type="text" className='outline-none border border-gray-200 bg-gray-50 px-5 py-2 w-full text-gray-500 font-light text-sm' />
                  <div className='flex gap-2'>
                    <input type="checkbox" className='h-4 w-4' />
                    <label className='text-sm text-gray-700'>Create an account ?</label>
                  </div>
                  <div className='flex gap-2'>
                    <input type="checkbox" className='h-4 w-4' />
                    <label className='text-sm text-gray-700'>Ship to a different address?</label>
                  </div>
                  <label className='text-gray-500 font-light text-sm'>Order notes (optional)</label>
                  <textarea name="" className='outline-none border border-gray-200 bg-gray-50 px-5 py-3 w-full text-gray-500 font-light text-sm placeholder:text-gray-500 h-40' id="" placeholder='Notes about your order, e.g. special notes for delivery'></textarea>
                </div>
                {/* card */}
                <div className='lg:col-span-3'>
                  <div className='bg-gray-50 p-8 border border-gray-400 border-dotted rounded-sm'>
                    <h3 className='flex items-center pb-4 font-medium'>Your Order</h3>
                    <hr className='border-gray-300 w-full' />
                    <table className='w-full'>
                      <thead className='w-full'>
                        <tr>
                          <th className='font-normal text-left pt-4'>Product</th>
                          <th className='font-normal text-right pt-4'>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className='border-b border-gray-200'>
                          <td className='py-4'>
                            <a href="" className='text-sm font-light text-gray-500 text-left'>Beige knitted elastic runner shoes</a>
                          </td>
                          <td className='text-sm font-light text-gray-500 text-right py-4'>$84.00</td>
                        </tr>
                        <tr className='border-b border-gray-200'>
                          <td className='py-4'>
                            <a href="" className='text-sm font-light text-gray-500 text-left'>Blue utility pinafore denimdress</a>
                          </td>
                          <td className='text-sm font-light text-gray-500 text-right py-4'>$76.00</td>
                        </tr>
                        <tr className='border-b border-gray-200'>
                          <td className='font-normal text-left py-6'>Subtotal:</td>
                          <td className='font-normal text-right py-6'>$160.00</td>
                        </tr>
                        <tr className='border-b border-gray-200'>
                          <td className='text-sm font-light text-gray-500 text-left py-4'>Shipping:</td>
                          <td className='text-sm font-light text-gray-500 text-right py-4'>Free Shipping</td>
                        </tr>
                        <tr>
                          <td className='font-normal text-yellow-600 text-left py-6'>Total:</td>
                          <td className='font-normal text-yellow-600 text-right py-6'>$160.00</td>
                        </tr>
                      </tbody>
                    </table>

                    {/* main div payment */}
                    <div>
                      {/* direct bank transfer div */}
                      <div>
                        <div className='py-1.5'>
                          <h2 className='flex items-center gap-3 cursor-pointer' onClick={() => setSelectedMethod(selectedMethod === "bank" ? "null" : "bank")}>
                            <input type="radio" className='w-4 h-4' checked={selectedMethod === "bank"} />
                            <a href="" className='font-light text-sm'>Direct bank transfer</a>
                          </h2>
                        </div>
                        <div className={`pl-5 my-2 transition-opacity duration-300 ${selectedMethod === "bank" ? "opacity-100" : "opacity-0 hidden"}`}>
                          <div className='text-gray-400 font-light text-xs pl-2'>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account</div>
                        </div>
                      </div>

                      {/* check payment div */}
                      <div>
                        <div className='py-1.5'>
                          <h2 className='flex items-center gap-3 cursor-pointer' onClick={() => setSelectedMethod(selectedMethod === "check" ? "null" : "check")}>
                            <input type="radio" className='w-4 h-4' checked={selectedMethod === "check"} />
                            <a href="" className='font-light text-sm'>check Payment</a>
                          </h2>
                        </div>
                        <div className={`pl-5 my-2 transition-opacity duration-300 ${selectedMethod === "check" ? "opacity-100" : "opacity-0 hidden"}`}>
                          <div className='text-gray-400 font-light text-xs pl-2'>Ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.</div>
                        </div>
                      </div>

                      {/* cash on delivery */}
                      <div>
                        <div className='py-1.5'>
                          <h2 className='flex items-center gap-3 cursor-pointer' onClick={() => setSelectedMethod(selectedMethod === "cod" ? "null" : "cod")}>
                            <input type="radio" className='w-4 h-4' checked={selectedMethod === "cod"} />
                            <a href="" className='font-light text-sm'>Cash on Delivery</a>
                          </h2>
                        </div>
                        <div className={`pl-5 my-2 transition-opacity duration-300 ${selectedMethod === "cod" ? "opacity-100" : "opacity-0 hidden"}`}>
                          <div className='text-gray-400 font-light text-xs pl-2'>Quisque volutpat mattis eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.</div>
                        </div>
                      </div>

                      {/* paypal */}
                      <div>
                        <div className='py-1.5'>
                          <h2 className='flex items-center gap-3 cursor-pointer' onClick={() => setSelectedMethod(selectedMethod === "paypal" ? "null" : "paypal")}>
                            <input type="radio" className='w-4 h-4' checked={selectedMethod === "paypal"} />
                            <a href="" className='font-light text-sm'>PayPal</a>
                          </h2>
                        </div>
                        <div className={`pl-5 my-2 transition-opacity duration-300 ${selectedMethod === "paypal" ? "opacity-100" : "opacity-0 hidden"}`}>
                          <div className='text-gray-400 font-light text-xs pl-2'>Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.</div>
                        </div>
                      </div>

                      {/* credit card */}
                      <div>
                        <div className='py-1.5'>
                          <h2 className='flex items-center gap-3 cursor-pointer' onClick={() => setSelectedMethod(selectedMethod === "card" ? "null" : "card")}>
                            <input type="radio" className='w-4 h-4' checked={selectedMethod === "card"} />
                            <a href="" className='font-light text-sm'>Credit Card</a>
                          </h2>
                          <div className="mt-2 pl-5 ">
                            <img src={assets.payments_summary} alt="Payment Methods" className="w-fit h-auto object-contain pl-2" />
                          </div>
                        </div>
                        <div className={`pl-5 my-2 transition-opacity duration-300 ${selectedMethod === "card" ? "opacity-100" : "opacity-0 hidden"}`}>
                          <div className='text-gray-400 font-light text-xs pl-2'>Donec nec justo eget felis facilisis fermentum.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Lorem ipsum dolor sit ame.</div>
                        </div>
                      </div>
                    </div>
                    <button className='text-yellow-600 text-sm border border-yellow-600 flex items-center justify-center w-full mt-8 py-4 cursor-pointer hover:bg-yellow-600 group relative overflow-hidden'>
                      <span className='absolute transition-opacity duration-300 group-hover:opacity-0'>Place Order</span>
                      <span className='text-white absolute opacity-0 transition-opacity duration-300 group-hover:opacity-100'>Proceed to Checkout</span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      <WhiteFooter/>
    </div>
  )
}

export default Checkout
