import React from 'react'
import { assets } from '../assets/assets'

const FilteringSidebar = () => {
  return (
    <div className='w-72 px-4'>
        <div className='flex items-center justify-between w-full py-5'>
          <p className='text-sm'>Filters:</p>
          <p className='text-xs text-yellow-600'>Clean All</p>
        </div>
        <hr className='w-full border-t border-neutral-200' />
        <div className='py-5'>
            <div className='flex items-center justify-between w-full'>
                <h1 className='text-gray-900 text-xl'>Category</h1>
                <img src={assets.arrow_down_icon} alt="" />
            </div>
            <div className='mt-3 space-y-1'>
                <div className='flex items-center justify-between py-1'>
                    <div className='flex gap-3 items-center'>
                        <input type="checkbox" className='h-4 w-4' />
                        <p className='text-gray-800 text-sm'>Dresses</p>
                    </div>
                    <div className='bg-gray-100 w-5 h-5 flex justify-center items-center text-gray-500 text-sm'>3</div>
                </div>
                <div className='flex items-center justify-between py-1'>
                    <div className='flex gap-3 items-center'>
                        <input type="checkbox" className='h-4 w-4' />
                        <p className='text-gray-800 text-sm'>T-Shirts</p>
                    </div>
                    <div className='bg-gray-100 w-5 h-5 flex justify-center items-center text-gray-500 text-sm'>0</div>
                </div>
                <div className='flex items-center justify-between py-1'>
                    <div className='flex gap-3 items-center'>
                        <input type="checkbox" className='h-4 w-4' />
                        <p className='text-gray-800 text-sm'>Bags</p>
                    </div>
                    <div className='bg-gray-100 w-5 h-5 flex justify-center items-center text-gray-500 text-sm'>4</div>
                </div>
                <div className='flex items-center justify-between py-1'>
                    <div className='flex gap-3 items-center'>
                        <input type="checkbox" className='h-4 w-4' />
                        <p className='text-gray-800 text-sm'>Jackets</p>
                    </div>
                    <div className='bg-gray-100 w-5 h-5 flex justify-center items-center text-gray-500 text-sm'>2</div>
                </div>
                <div className='flex items-center justify-between py-1'>
                    <div className='flex gap-3 items-center'>
                        <input type="checkbox" className='h-4 w-4' />
                        <p className='text-gray-800 text-sm'>Shoes</p>
                    </div>
                    <div className='bg-gray-100 w-5 h-5 flex justify-center items-center text-gray-500 text-sm'>2</div>
                </div>
                <div className='flex items-center justify-between py-1'>
                    <div className='flex gap-3 items-center'>
                        <input type="checkbox" className='h-4 w-4' />
                        <p className='text-gray-800 text-sm'>Jumpers</p>
                    </div>
                    <div className='bg-gray-100 w-5 h-5 flex justify-center items-center text-gray-500 text-sm'>1</div>
                </div>
                <div className='flex items-center justify-between py-1'>
                    <div className='flex gap-3 items-center'>
                        <input type="checkbox" className='h-4 w-4' />
                        <p className='text-gray-800 text-sm'>Jeans</p>
                    </div>
                    <div className='bg-gray-100 w-5 h-5 flex justify-center items-center text-gray-500 text-sm'>1</div>
                </div>
                <div className='flex items-center justify-between py-1'>
                    <div className='flex gap-3 items-center'>
                        <input type="checkbox" className='h-4 w-4' />
                        <p className='text-gray-800 text-sm'>Sportwear</p>
                    </div>
                    <div className='bg-gray-100 w-5 h-5 flex justify-center items-center text-gray-500 text-sm'>0</div>
                </div>
            </div>
        </div>
        <hr className='w-full border-t border-neutral-200' />
        <div className="py-5">
            <div className='flex items-center justify-between w-full'>
                <h1 className='text-gray-900 text-xl'>Size</h1>
                <img src={assets.arrow_down_icon} alt="" />
            </div>
            <div className='mt-3 space-y-1'>
                <div className='w-full'>
                    <div className='flex items-center justify-between py-1'>
                        <div className='flex gap-3 items-center'>
                            <input type="checkbox" className='h-4 w-4' />
                            <p className='text-gray-800 text-sm'>XS</p>
                        </div>
                    </div>
                </div>
                <div className='w-full'>
                    <div className='flex items-center justify-between py-1'>
                        <div className='flex gap-3 items-center'>
                            <input type="checkbox" className='h-4 w-4' />
                            <p className='text-gray-800 text-sm'>S</p>
                        </div>
                    </div>
                </div>
                <div className='w-full'>
                    <div className='flex items-center justify-between py-1'>
                        <div className='flex gap-3 items-center'>
                            <input type="checkbox" className='h-4 w-4' />
                            <p className='text-gray-800 text-sm'>M</p>
                        </div>
                    </div>
                </div>
                <div className='w-full'>
                    <div className='flex items-center justify-between py-1'>
                        <div className='flex gap-3 items-center'>
                            <input type="checkbox" className='h-4 w-4' />
                            <p className='text-gray-800 text-sm'>L</p>
                        </div>
                    </div>
                </div>
                <div className='w-full'>
                    <div className='flex items-center justify-between py-1'>
                        <div className='flex gap-3 items-center'>
                            <input type="checkbox" className='h-4 w-4' />
                            <p className='text-gray-800 text-sm'>XL</p>
                        </div>
                    </div>
                </div>
                <div className='w-full'>
                    <div className='flex items-center justify-between py-1'>
                        <div className='flex gap-3 items-center'>
                            <input type="checkbox" className='h-4 w-4' />
                            <p className='text-gray-800 text-sm'>XXL</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr className='w-full border-t border-neutral-200' />
        <div className="py-5">
            <div className='flex items-center justify-between w-full'>
                <h1 className='text-gray-900 text-xl'>Color</h1>
                <img src={assets.arrow_down_icon} alt="" />
            </div>
            <div className='mt-3 space-y-1'>
                <div className='w-full'>
                    <div className='flex items-center justify-between py-1'>
                        <div className='flex gap-2.5 items-center'>
                            <div className='w-5 h-5 rounded-full bg-yellow-500'></div>
                            <div className='w-5 h-5 rounded-full bg-green-500'></div>
                            <div className='w-5 h-5 rounded-full bg-black'></div>
                            <div className='w-5 h-5 rounded-full bg-red-400'></div>
                            <div className='w-5 h-5 rounded-full bg-indigo-400'></div>
                            <div className='w-5 h-5 rounded-full bg-slate-400'></div>
                            <div className='w-5 h-5 rounded-full bg-slate-700'></div>
                            <div className='w-5 h-5 rounded-full bg-slate-900'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr className='w-full border-t border-neutral-200' />
        <div className="py-5">
            <div className='flex items-center justify-between w-full'>
                <h1 className='text-gray-900 text-xl'>Brand</h1>
                <img src={assets.arrow_down_icon} alt="" />
            </div>
            <div className='mt-3 space-y-1'>
                <div className='w-full'>
                    <div className='flex items-center justify-between py-1'>
                        <div className='flex gap-3 items-center'>
                            <input type="checkbox" className='h-4 w-4' />
                            <p className='text-gray-800 text-sm'>Next</p>
                        </div>
                    </div>
                </div>
                <div className='w-full'>
                    <div className='flex items-center justify-between py-1'>
                        <div className='flex gap-3 items-center'>
                            <input type="checkbox" className='h-4 w-4' />
                            <p className='text-gray-800 text-sm'>River Island</p>
                        </div>
                    </div>
                </div>
                <div className='w-full'>
                    <div className='flex items-center justify-between py-1'>
                        <div className='flex gap-3 items-center'>
                            <input type="checkbox" className='h-4 w-4' />
                            <p className='text-gray-800 text-sm'>Geox</p>
                        </div>
                    </div>
                </div>
                <div className='w-full'>
                    <div className='flex items-center justify-between py-1'>
                        <div className='flex gap-3 items-center'>
                            <input type="checkbox" className='h-4 w-4' />
                            <p className='text-gray-800 text-sm'>New Balance</p>
                        </div>
                    </div>
                </div>
                <div className='w-full'>
                    <div className='flex items-center justify-between py-1'>
                        <div className='flex gap-3 items-center'>
                            <input type="checkbox" className='h-4 w-4' />
                            <p className='text-gray-800 text-sm'>UGG</p>
                        </div>
                    </div>
                </div>
                <div className='w-full'>
                    <div className='flex items-center justify-between py-1'>
                        <div className='flex gap-3 items-center'>
                            <input type="checkbox" className='h-4 w-4' />
                            <p className='text-gray-800 text-sm'>F&F</p>
                        </div>
                    </div>
                </div>
                <div className='w-full'>
                    <div className='flex items-center justify-between py-1'>
                        <div className='flex gap-3 items-center'>
                            <input type="checkbox" className='h-4 w-4' />
                            <p className='text-gray-800 text-sm'>Nike</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr className='w-full border-t border-neutral-200' />
        <div className="py-5">
            <div className='flex items-center justify-between w-full'>
                <h1 className='text-gray-900 text-xl'>Price</h1>
                <img src={assets.arrow_down_icon} alt="" />
            </div>
            <div className='mt-3 space-y-1'>
                <div className='w-full'>
                    <div className='py-1'>
                        <div className='items-center space-y-5'>
                            <p className='text-sm font-light'>Price Range: <span className='text-yellow-600'>$0 - $850</span></p>
                            <div className='bg-gray-200 h-1 w-full'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FilteringSidebar
