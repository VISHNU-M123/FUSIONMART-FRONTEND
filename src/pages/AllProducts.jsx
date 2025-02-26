import React from 'react'
import WhiteNavbar from '../components/WhiteNavbar'
import { assets } from '../assets/assets'
import WhiteFooter from '../components/WhiteFooter'
import FilteringSidebar from '../components/FilteringSidebar'

const AllProducts = () => {
  return (
    <div>
      <WhiteNavbar/>
      <div className='px-5 lg:px-44'>
        <FilteringSidebar/>
      </div>
      <WhiteFooter/>
    </div>
  )
}

export default AllProducts
