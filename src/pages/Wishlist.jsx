import React from 'react'
import WhiteNavbar from '../components/WhiteNavbar'
import WhiteFooter from '../components/WhiteFooter'
import { assets } from '../assets/assets'

const Wishlist = () => {
  return (
    <div>
      <WhiteNavbar/>
        <div className='flex flex-col justify-center items-center h-40 bg-cover bg-center' style={{backgroundImage: `url(${assets.page_header})`}}>
            <h1 className='text-zinc-800 text-4xl'>Wishlist</h1>
            <h6 className='text-yellow-600 text-xl'>Shop</h6>
        </div>
        <div className='lg:px-40 px-5 py-8 w-full'>
          <div>
            <table className='w-full'>
              <thead className='border-b border-gray-300 hidden md:table-header-group'>
                <tr>
                  <th className='text-neutral-500 text-sm font-light text-left pb-3'>Product</th>
                  <th className='text-neutral-500 text-sm font-light text-left pb-3'>Price</th>
                  <th className='text-neutral-500 text-sm font-light text-left pb-3'>Stock Status</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr className='border-b border-gray-300 grid grid-cols-1 gap-4 md:text-start text-center md:table-row'>
                  <td className='md:py-8 block md:table-cell'>
                    <div className='flex md:gap-8 gap-2 items-center justify-center md:justify-start'>
                      <figure>
                        <a href="">
                          <img src={assets.cart_table_product} alt="" className='cursor-pointer' />
                        </a>
                      </figure>
                      <h3 className='cursor-pointer text-start hover:text-yellow-600'>
                        <a href="">Beige knitted elastic runner shoes</a>
                      </h3>
                    </div>
                  </td>
                  <td className='md:py-8'>$84.00</td>
                  <td className='md:py-8'><span className='text-lime-400'>In stock</span></td>
                  <td className='md:py-8'>
                    <div className=' flex itmes-center justify-center'>
                      <button className='flex gap-2  border border-yellow-600 px-8 py-2 text-xs font-light text-yellow-600 cursor-pointer'>
                        <img src={assets.cart_yellow_icon} alt="" className='h-4 w-4' />
                        ADD TO CART
                      </button>
                    </div>
                  </td>
                  <td className='md:py-8'>
                    <button className='md:flex items-center justify-center'>
                      <img src={assets.close_icon} alt="" className='cursor-pointer' />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      <WhiteFooter/>
    </div>
  )
}

export default Wishlist
