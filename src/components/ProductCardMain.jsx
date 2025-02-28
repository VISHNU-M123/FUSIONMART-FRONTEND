import React from 'react'
import { assets } from '../assets/assets'

const ProductCardMain = () => {
  return (
    <div>
      <div className='flex items-center justify-center cursor-pointer'>
        <img src={assets.product_4} alt="" />
      </div>
      <div className='p-2'>
        <div className='text-center'>
            <p className='text-sm font-light text-gray-600 cursor-pointer'>Women</p>
            <h1 className='cursor-pointer text-gray-800 hover:text-yellow-600'>Brown paperbag waist pencil skirt</h1>
            <h1 className='text-yellow-600 cursor-pointer'>$60.00</h1>
        </div>
        <div className='flex flex-col sm:flex-row gap-2 py-2 justify-center items-center'>
          <div className='flex items-center'>
            <img src={assets.star_icon} alt="" className='h-4.5 w-4.5' />
            <img src={assets.star_icon_gray} alt="" className='h-4.5 w-4.5' />
            <img src={assets.star_icon_gray} alt="" className='h-4.5 w-4.5' />
            <img src={assets.star_icon_gray} alt="" className='h-4.5 w-4.5' />
            <img src={assets.star_icon_gray} alt="" className='h-4.5 w-4.5' />
          </div>
          <div className='items-center'>
            <p className='text-sm font-light text-gray-300'>( 2 Reviews )</p>
          </div>
        </div>
        <div className='flex gap-2 justify-center py-2'>
            <img src={assets.product_4_thumb} alt="" className='cursor-pointer w-8 h-8' />
            <img src={assets.product_4_2_thumb} alt="" className='cursor-pointer w-8 h-8' />
            <img src={assets.product_4_3_thumb} alt="" className='cursor-pointer w-8 h-8' />
        </div>
      </div>
    </div>
  )
}

export default ProductCardMain
