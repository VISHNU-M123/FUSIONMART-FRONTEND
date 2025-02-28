import React from 'react'
import WhiteNavbar from '../components/WhiteNavbar'
import { assets } from '../assets/assets'

const SingleProducts = () => {
  return (
    <div>
      <WhiteNavbar/>
      <div className='px-40 py-5'>

        {/* total content div */}
        <div className='flex gap-5'>

          {/* small and large div */}
            <div className='flex gap-2.5 w-5xl'>
              {/* small img div */}
                <div className='w-70 h-70 space-y-2.5'>
                    <div>
                      <img src={assets.single_product_small} alt="" className='w-full' />
                    </div>
                    <div>
                      <img src={assets.single_product_small_2} alt="" className='w-full' />
                    </div>
                    <div>
                      <img src={assets.single_product_small_3} alt="" className='w-full' />
                    </div>
                    <div>
                      <img src={assets.single_product_small_4} alt="" className='w-full' />
                    </div>
                </div>

                {/* large img div */}
                <div>
                  <img src={assets.single_product_big} alt="" />
                </div>
            </div>
            <div>
              <div>
                {/* product name */}
                <div className='space-y-2.5'>
                  <h1 className='text-2xl'>Dark yellow lace cut out swing dress</h1>
                  <div className='flex gap-2'>
                    <div className='flex'>
                      <img src={assets.star_icon} alt="" className='h-4.5 w-4.5' />
                      <img src={assets.star_icon} alt="" className='h-4.5 w-4.5' />
                      <img src={assets.star_icon} alt="" className='h-4.5 w-4.5' />
                      <img src={assets.star_icon_gray} alt="" className='h-4.5 w-4.5' />
                      <img src={assets.star_icon_gray} alt="" className='h-4.5 w-4.5' />
                    </div>
                    <div>
                      <p className='text-sm font-light text-gray-300'>( 2 Reviews )</p>
                    </div>
                  </div>
                  <h1 className='text-2xl text-yellow-600'>$84.00</h1>
                </div>

                {/* product description */}
                <div className='py-3'>
                  <p className='text-sm font-light text-gray-500 leading-loose'>Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing. Sed lectus.</p>
                </div>
                <div>
                  {/* color */}
                  <div></div>

                  {/* size */}
                  <div></div>

                  {/* quantity */}
                  <div></div>
                </div>

                {/* butons */}
                <div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SingleProducts
