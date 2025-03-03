import React, { useRef } from 'react'
import WhiteNavbar from '../components/WhiteNavbar'
import { assets } from '../assets/assets'
import WhiteFooter from '../components/WhiteFooter'
import ProductCardMain from '../components/ProductCardMain'

const SingleProducts = () => {

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if(scrollRef.current){
      scrollRef.current.scrollBy({left: -300, behavior: "smooth"})
    }
  }

  const scrollRight = () => {
    if(scrollRef.current){
      scrollRef.current.scrollBy({left: 300, behavior: "smooth"})
    }
  }
  return (
    <div>
      <WhiteNavbar/>
      <div className='lg:px-40 px-5 py-5'>

        {/* total content div */}
        <div className='flex flex-col lg:flex-row lg:gap-5'>

          {/* small and large div */}
            <div className='flex flex-col lg:flex-row gap-2 lg:w-5xl'>
              {/* small img div */}
                <div className='lg:w-70 lg:h-70 lg:order-1 order-2 flex flex-row lg:flex-col space-y-2.5 gap-2 lg:gap-0 lg:justify-start md:justify-center'>
                    <div>
                      <img src={assets.single_product_small} alt="" />
                    </div>
                    <div>
                      <img src={assets.single_product_small_2} alt="" />
                    </div>
                    <div>
                      <img src={assets.single_product_small_3} alt="" />
                    </div>
                    <div>
                      <img src={assets.single_product_small_4} alt="" />
                    </div>
                </div>

                {/* large img div */}
                <div className='lg:order-2 order-1'>
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
                <div className='space-y-5'>
                  {/* color */}
                  <div className='flex items-center gap-6'>
                    <div>
                      <p className='text-gray-600 text-sm'>Color:</p>
                    </div>
                    <div className='flex gap-2'>
                      <img src={assets.single_product_small_thumb_1} alt="" />
                      <img src={assets.single_product_small_thumb_2} alt="" />
                    </div>
                  </div>

                  {/* size */}
                  <div className='flex items-center gap-9'>
                    <div>
                      <p className='text-gray-600 text-sm'>Size:</p>
                    </div>
                    <div>
                      <select className='border border-gray-300 outline-none px-3 w-full py-2 text-sm font-light text-gray-400'>
                        <option value="">Select a Size</option>
				  					    <option value="Low-High">Small</option>
				  					    <option value="High-Low">Medium</option>
				  					    <option value="A-Z">Large</option>
				  					    <option value="Z-A">Extra Large</option>
                      </select>
                    </div>
                  </div>

                  {/* quantity */}
                  <div className='flex items-center gap-10'>
                    <div>
                      <p className='text-gray-600 text-sm'>Qty:</p>
                    </div>
                    <div className='w-33'>
                      <input type="text" className='border border-gray-300 outline-none px-3 w-full py-2 text-sm font-light text-gray-400' />
                    </div>
                  </div>
                </div>

                {/* butons */}
                <div className='flex flex-col md:flex-row gap-4 lg:gap-8 lg:items-center md:items-center items-start py-5'>
                  <div className='flex gap-2 items-center justify-center border border-yellow-600 px-10 py-2'>
                    <div className='h-4 w-4'>
                      <img src={assets.cart_yellow_icon} alt="" />
                    </div>
                    <a className='text-yellow-600 text-sm'>ADD TO CART</a>
                  </div>
                  <div className='flex gap-2 items-center justify-center'>
                    <div className='h-4 w-4'>
                      <img src={assets.wishlist_yellow_icon} alt="" />
                    </div>
                    <a className='text-sm text-gray-600'>add to wishlist</a>
                  </div>
                  <div className='flex gap-2 items-center justify-center'>
                    <div className='h-4 w-4'>
                      <img src={assets.shuffle_icon_yellow} alt="" />
                    </div>
                    <a className='text-sm text-gray-600'>add to compare</a>
                  </div>
                </div>
              </div>
              <hr className='my-2 border-t border-neutral-200' />
              <div className='flex flex-col lg:flex-row lg:justify-between justify-center items-center py-4 lg:py-2 gap-3 lg:gap-0'>
                <div className='flex gap-2 items-center'>
                  <p className='text-gray-600 text-sm'>Category:</p>
                  <p className='text-gray-600 text-sm'>Women, Dresses, Yellow</p>
                </div>
                <div className='flex gap-2 items-center'>
                  <p className='text-gray-600 text-sm'>Share:</p>
                  <div className='flex gap-1.5'>
                    <img src={assets.facebook_icon} alt="" className='w-7 h-7' />
                    <img src={assets.twitter_icon} alt="" className='w-7 h-7' />
                    <img src={assets.instagram_icon} alt="" className='w-7 h-7' />
                    <img src={assets.pinterest_icon} alt="" className='w-7 h-7' />
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
      <hr className="lg:mx-40 mx-5 my-5 mt-10 border-t border-neutral-200" />
      <div className='flex items-center justify-center py-5'>
        <h1 className='text-2xl font-medium'>You May Also Like</h1>
      </div>
      <div>
        <div className='flex items-center lg:px-25 py-5 gap-5'>
          <div className='w-10 h-10 cursor-pointer flex-shrink-0' onClick={scrollLeft}>
            <img src={assets.arrow_left} alt="" className='w-full'  />
          </div>
          <div ref={scrollRef} className='flex gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory w-full'>
            {Array(6).fill(null).map((_, index) => (
            <div key={index} className="snap-start flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
              <ProductCardMain />
            </div>
            ))}
          </div>
          <div className='w-10 h-10 cursor-pointer flex-shrink-0' onClick={scrollRight}>
            <img src={assets.arrow_right} alt="" className='w-full'  />
          </div>
        </div>
      </div>
      <WhiteFooter/>
    </div>
  )
}

export default SingleProducts
