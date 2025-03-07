import React from 'react'
import WhiteNavbar from '../components/WhiteNavbar'
import WhiteFooter from '../components/WhiteFooter'
import { assets } from '../assets/assets'

const Checkout = () => {
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
            <div>
              <form action="">
                <input type="text" className='outline-none border border-yellow-600 border-dotted rounded-sm px-3 py-2' />
                <label className='text-gray-600 text-sm'>Have a Coupon ? <span className='text-yellow-600 text-sm'>Click here to enter your code</span></label>
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
                        <tr className='flex justify-between w-full py-4'>
                          <th>Product</th>
                          <th>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <a href="">Beige knitted elastic runner shoes</a>
                          </td>
                          <td>$84.00</td>
                        </tr>
                        <tr>
                          <td>
                            <a href="">Blue utility pinafore denimdress</a>
                          </td>
                          <td>$76.00</td>
                        </tr>
                        <tr>
                          <td>Subtotal:</td>
                          <td>$160.00</td>
                        </tr>
                        <tr>
                          <td>Shipping:</td>
                          <td>Free Shipping</td>
                        </tr>
                        <tr>
                          <td>Total:</td>
                          <td>$160.00</td>
                        </tr>
                      </tbody>
                    </table>

                    {/* main div payment */}
                    <div>
                      {/* direct bank transfer div */}
                      <div>
                        <div>
                          <h2>
                            <a href="">Direct Bank Transfer</a>
                          </h2>
                        </div>
                        <div>
                          <div>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account</div>
                        </div>
                      </div>
                    </div>
                    <button>
                      <span>Place Order</span>
                      <span>Proceed to Checkout</span>
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
