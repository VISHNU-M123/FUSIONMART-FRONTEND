import React from 'react'
import WhiteNavbar from '../components/WhiteNavbar'
import WhiteFooter from '../components/WhiteFooter'
import { assets } from '../assets/assets'

const Checkout = () => {
  return (
    <div>
      <WhiteNavbar/>
        <div className='flex flex-col justify-center items-center h-40 bg-cover bg-center' style={{backgroundImage: `url(${assets.page_header})`}}>
            <h1 className='text-zinc-800 text-4xl'>Checkout</h1>
            <h6 className='text-yellow-600 text-xl'>Shop</h6>
        </div>
        {/* main container */}
        <div>
          {/* form and card main */}
          <div>
            {/* coupon code div */}
            <div>
              <form action="">
                <input type="text" />
                <label>Have a Coupon ? <span>Click here to enter your code</span></label>
              </form>
            </div>

            {/* main form */}
            <form action="">
              {/* form and card */}
              <div>
                {/* form */}
                <div>
                  <h2>Billing Details</h2>
                  {/* first name last name */}
                  <div>
                    {/* first name */}
                    <div>
                      <label>First name</label>
                      <input type="text" />
                    </div>
                    {/* last name */}
                    <div>
                      <label>Last name</label>
                      <input type="text" />
                    </div>
                  </div>
                  <label>Company address (Optional)</label>
                  <input type="text" />
                  <label>Country</label>
                  <input type="text" />
                  <label>Street Address</label>
                  <input type="text" placeholder='house number and street name' />
                  <input type="text" placeholder='appartments, suite, unit etc...' />
                  <div>
                    <div>
                      <label>Town/City</label>
                      <input type="text" />
                    </div>
                    <div>
                      <label>State/Country</label>
                      <input type="text" />
                    </div>
                  </div>
                  <div>
                    <div>
                      <label>Postcode/Zip</label>
                      <input type="text" />
                    </div>
                    <div>
                      <label>Phone</label>
                      <input type="text" />
                    </div>
                  </div>
                  <label>Email address</label>
                  <input type="text" />
                  <div>
                    <input type="checkbox" />
                    <label>Create and account</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label>Ship to a different address?</label>
                  </div>
                  <label>Order notes</label>
                  <textarea name="" id=""></textarea>
                </div>
                {/* card */}
                <div></div>
              </div>
            </form>
          </div>
        </div>
      <WhiteFooter/>
    </div>
  )
}

export default Checkout
