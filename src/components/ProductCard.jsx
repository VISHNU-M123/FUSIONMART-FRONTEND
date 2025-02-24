import React, { useState } from 'react'
import { assets } from '../assets/assets'

const ProductCard = () => {

    const [image, setImage] = useState(assets.product_1)
  return (
    <div>
      <div className='mb-3'>
        <img src={image} alt="" onMouseEnter={() => setImage(assets.product_2)} onMouseLeave={() => setImage(assets.product_1)} />
      </div>
      <div>
        <div>
            <h2 className='text-zinc-300'>CLOTHING</h2>
        </div>
        <div>
            <h2>Linen-Blend Dress</h2>
        </div>
        <div>
            <h2 className='text-yellow-600'>$60.00</h2>
        </div>
        <div className='flex gap-1.5 mt-1.5'>
            <div className='h-3.5 w-3.5 rounded-full bg-amber-700'></div>
            <div className='h-3.5 w-3.5 rounded-full bg-indigo-700'></div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
