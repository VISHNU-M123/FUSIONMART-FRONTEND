import React from 'react'
import { assets } from '../assets/assets'

const FilteringSidebar = () => {
  return (
    <div className='lg:w-72 w-full md:w-full px-4'>
        <div className='flex items-center justify-between w-full py-5'>
          <p className='text-sm'>Filters:</p>
          <p className='text-xs text-yellow-600 cursor-pointer'>Clean All</p>
        </div>
        <hr className='w-full border-t border-neutral-200' />
        <div className='py-5'>
            <div className='flex items-center justify-between w-full'>
                <h1 className='text-gray-900 text-xl cursor-pointer'>Category</h1>
                <img src={assets.arrow_down_icon} alt="" className='cursor-pointer' />
            </div>
            <div className='mt-3 space-y-1'>
                <div className='flex items-center justify-between py-1'>
                    <div className='flex gap-3 items-center'>
                        <input type="checkbox" className='h-4 w-4 cursor-pointer' />
                        <p className='text-gray-800 text-sm cursor-pointer'>Dresses</p>
                    </div>
                    <div className='bg-gray-100 w-5 h-5 flex justify-center items-center text-gray-500 text-sm'>3</div>
                </div>
                <div className='flex items-center justify-between py-1'>
                    <div className='flex gap-3 items-center'>
                        <input type="checkbox" className='h-4 w-4 cursor-pointer' />
                        <p className='text-gray-800 text-sm cursor-pointer'>T-Shirts</p>
                    </div>
                    <div className='bg-gray-100 w-5 h-5 flex justify-center items-center text-gray-500 text-sm'>0</div>
                </div>
                <div className='flex items-center justify-between py-1'>
                    <div className='flex gap-3 items-center'>
                        <input type="checkbox" className='h-4 w-4 cursor-pointer' />
                        <p className='text-gray-800 text-sm cursor-pointer'>Bags</p>
                    </div>
                    <div className='bg-gray-100 w-5 h-5 flex justify-center items-center text-gray-500 text-sm'>4</div>
                </div>
                <div className='flex items-center justify-between py-1'>
                    <div className='flex gap-3 items-center'>
                        <input type="checkbox" className='h-4 w-4 cursor-pointer' />
                        <p className='text-gray-800 text-sm cursor-pointer'>Jackets</p>
                    </div>
                    <div className='bg-gray-100 w-5 h-5 flex justify-center items-center text-gray-500 text-sm'>2</div>
                </div>
                <div className='flex items-center justify-between py-1'>
                    <div className='flex gap-3 items-center'>
                        <input type="checkbox" className='h-4 w-4 cursor-pointer' />
                        <p className='text-gray-800 text-sm cursor-pointer'>Shoes</p>
                    </div>
                    <div className='bg-gray-100 w-5 h-5 flex justify-center items-center text-gray-500 text-sm'>2</div>
                </div>
                <div className='flex items-center justify-between py-1'>
                    <div className='flex gap-3 items-center'>
                        <input type="checkbox" className='h-4 w-4 cursor-pointer' />
                        <p className='text-gray-800 text-sm cursor-pointer'>Jumpers</p>
                    </div>
                    <div className='bg-gray-100 w-5 h-5 flex justify-center items-center text-gray-500 text-sm'>1</div>
                </div>
                <div className='flex items-center justify-between py-1'>
                    <div className='flex gap-3 items-center'>
                        <input type="checkbox" className='h-4 w-4 cursor-pointer' />
                        <p className='text-gray-800 text-sm cursor-pointer'>Jeans</p>
                    </div>
                    <div className='bg-gray-100 w-5 h-5 flex justify-center items-center text-gray-500 text-sm'>1</div>
                </div>
                <div className='flex items-center justify-between py-1'>
                    <div className='flex gap-3 items-center'>
                        <input type="checkbox" className='h-4 w-4 cursor-pointer' />
                        <p className='text-gray-800 text-sm cursor-pointer'>Sportwear</p>
                    </div>
                    <div className='bg-gray-100 w-5 h-5 flex justify-center items-center text-gray-500 text-sm'>0</div>
                </div>
            </div>
        </div>
        <hr className='w-full border-t border-neutral-200' />
        <div className="py-5">
            <div className='flex items-center justify-between w-full'>
                <h1 className='text-gray-900 text-xl cursor-pointer'>Size</h1>
                <img src={assets.arrow_down_icon} alt="" className="cursor-pointer" />
            </div>
            <div className='mt-3 space-y-1'>
                <div className='w-full'>
                    <div className='flex items-center justify-between py-1'>
                        <div className='flex gap-3 items-center'>
                            <input type="checkbox" className='h-4 w-4 cursor-pointer' />
                            <p className='text-gray-800 text-sm cursor-pointer'>XS</p>
                        </div>
                    </div>
                </div>
                <div className='w-full'>
                    <div className='flex items-center justify-between py-1'>
                        <div className='flex gap-3 items-center'>
                            <input type="checkbox" className='h-4 w-4 cursor-pointer' />
                            <p className='text-gray-800 text-sm cursor-pointer'>S</p>
                        </div>
                    </div>
                </div>
                <div className='w-full'>
                    <div className='flex items-center justify-between py-1'>
                        <div className='flex gap-3 items-center'>
                            <input type="checkbox" className='h-4 w-4 cursor-pointer' />
                            <p className='text-gray-800 text-sm cursor-pointer'>M</p>
                        </div>
                    </div>
                </div>
                <div className='w-full'>
                    <div className='flex items-center justify-between py-1'>
                        <div className='flex gap-3 items-center'>
                            <input type="checkbox" className='h-4 w-4 cursor-pointer' />
                            <p className='text-gray-800 text-sm cursor-pointer'>L</p>
                        </div>
                    </div>
                </div>
                <div className='w-full'>
                    <div className='flex items-center justify-between py-1'>
                        <div className='flex gap-3 items-center'>
                            <input type="checkbox" className='h-4 w-4 cursor-pointer' />
                            <p className='text-gray-800 text-sm cursor-pointer'>XL</p>
                        </div>
                    </div>
                </div>
                <div className='w-full'>
                    <div className='flex items-center justify-between py-1'>
                        <div className='flex gap-3 items-center'>
                            <input type="checkbox" className='h-4 w-4 cursor-pointer' />
                            <p className='text-gray-800 text-sm cursor-pointer'>XXL</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr className='w-full border-t border-neutral-200' />
        <div className="py-5">
            <div className='flex items-center justify-between w-full'>
                <h1 className='text-gray-900 text-xl cursor-pointer'>Color</h1>
                <img src={assets.arrow_down_icon} alt="" className="cursor-pointer" />
            </div>
            <div className='mt-3 space-y-1'>
                <div className='w-full'>
                    <div className='flex items-center justify-between py-1'>
                        <div className='flex gap-2.5 items-center'>
                            <div className='w-5 h-5 rounded-full bg-yellow-500 cursor-pointer'></div>
                            <div className='w-5 h-5 rounded-full bg-green-500 cursor-pointer'></div>
                            <div className='w-5 h-5 rounded-full bg-black cursor-pointer'></div>
                            <div className='w-5 h-5 rounded-full bg-red-400 cursor-pointer'></div>
                            <div className='w-5 h-5 rounded-full bg-indigo-400 cursor-pointer'></div>
                            <div className='w-5 h-5 rounded-full bg-slate-400 cursor-pointer'></div>
                            <div className='w-5 h-5 rounded-full bg-slate-700 cursor-pointer'></div>
                            <div className='w-5 h-5 rounded-full bg-slate-900 cursor-pointer'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr className='w-full border-t border-neutral-200' />
        <div className="py-5">
            <div className='flex items-center justify-between w-full'>
                <h1 className='text-gray-900 text-xl cursor-pointer'>Brand</h1>
                <img src={assets.arrow_down_icon} alt="" className="cursor-pointer" />
            </div>
            <div className='mt-3 space-y-1'>
                <div className='w-full'>
                    <div className='flex items-center justify-between py-1'>
                        <div className='flex gap-3 items-center'>
                            <input type="checkbox" className='h-4 w-4 cursor-pointer' />
                            <p className='text-gray-800 text-sm cursor-pointer'>Next</p>
                        </div>
                    </div>
                </div>
                <div className='w-full'>
                    <div className='flex items-center justify-between py-1'>
                        <div className='flex gap-3 items-center'>
                            <input type="checkbox" className='h-4 w-4 cursor-pointer' />
                            <p className='text-gray-800 text-sm cursor-pointer'>River Island</p>
                        </div>
                    </div>
                </div>
                <div className='w-full'>
                    <div className='flex items-center justify-between py-1'>
                        <div className='flex gap-3 items-center'>
                            <input type="checkbox" className='h-4 w-4 cursor-pointer' />
                            <p className='text-gray-800 text-sm cursor-pointer'>Geox</p>
                        </div>
                    </div>
                </div>
                <div className='w-full'>
                    <div className='flex items-center justify-between py-1'>
                        <div className='flex gap-3 items-center'>
                            <input type="checkbox" className='h-4 w-4 cursor-pointer' />
                            <p className='text-gray-800 text-sm cursor-pointer'>New Balance</p>
                        </div>
                    </div>
                </div>
                <div className='w-full'>
                    <div className='flex items-center justify-between py-1'>
                        <div className='flex gap-3 items-center'>
                            <input type="checkbox" className='h-4 w-4 cursor-pointer' />
                            <p className='text-gray-800 text-sm cursor-pointer'>UGG</p>
                        </div>
                    </div>
                </div>
                <div className='w-full'>
                    <div className='flex items-center justify-between py-1'>
                        <div className='flex gap-3 items-center'>
                            <input type="checkbox" className='h-4 w-4 cursor-pointer' />
                            <p className='text-gray-800 text-sm cursor-pointer'>F&F</p>
                        </div>
                    </div>
                </div>
                <div className='w-full'>
                    <div className='flex items-center justify-between py-1'>
                        <div className='flex gap-3 items-center'>
                            <input type="checkbox" className='h-4 w-4 cursor-pointer' />
                            <p className='text-gray-800 text-sm cursor-pointer'>Nike</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr className='w-full border-t border-neutral-200' />
        <div className="py-5">
            <div className='flex items-center justify-between w-full'>
                <h1 className='text-gray-900 text-xl cursor-pointer'>Price</h1>
                <img src={assets.arrow_down_icon} alt="" className="cursor-pointer" />
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
