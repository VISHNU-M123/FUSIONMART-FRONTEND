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
      <WhiteFooter/>
    </div>
  )
}

export default Wishlist
