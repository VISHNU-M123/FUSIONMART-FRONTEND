import React from 'react'
import WhiteNavbar from '../components/WhiteNavbar'
import { assets } from '../assets/assets'
import WhiteFooter from '../components/WhiteFooter'
import FilteringSidebar from '../components/FilteringSidebar'
import ProductCardMain from '../components/ProductCardMain'

const AllProducts = () => {
  return (
    <div>
      <WhiteNavbar/>
      <div className='flex flex-col justify-center items-center h-40 bg-cover bg-center' style={{backgroundImage: `url(${assets.page_header})`}}>
        <h1 className='text-zinc-800 text-4xl'>Grid 3 Columns</h1>
        <h6 className='text-yellow-600 text-xl'>Shop</h6>
      </div>
      <div className='px-5 lg:px-44 flex flex-col lg:flex-row gap-2'>
        <div className='w-full lg:w-auto order-2 lg:order-1'>
          <FilteringSidebar/>
        </div>
        <div className='w-full order-1 lg:order-2'>
          <div className='w-full items-center'>
            <div className='flex flex-col sm:flex-row sm:items-center w-full space-y-3 sm:space-y-0 items-center justify-between py-4'>
              <div className='items-center'>
                <p className='text-sm text-gray-300'>showing <span className='text-black'>9 of 50</span> products</p>
              </div>
              <div className='flex gap-3 items-center'>
                <p className='text-xs'>sort by:</p>
                <div>
                  <select className='border border-gray-300 outline-none px-3 w-full py-1 text-sm font-light text-gray-400'>
                    <option value="">Most Rated</option>
				  					<option value="Low-High">Low to High</option>
				  					<option value="High-Low">High to Low</option>
				  					<option value="A-Z">A-Z</option>
				  					<option value="Z-A">Z-A</option>
				  					<option value="rating">Most Rated</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5'>
            <ProductCardMain/>
            <ProductCardMain/>
            <ProductCardMain/>
          </div>
        </div>
      </div>
      <WhiteFooter/>
    </div>
  )
}

export default AllProducts
