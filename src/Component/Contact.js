import React from 'react'
import Navbar from './Navbar'
import Map from './Map'
import Address from './Address'
import Footer from './Footer'

export default function Contact() {
  return (
  <>
    <div className="sub_page">
    <div className="hero_area">
      {/* <!-- header section strats --> */}
   <Navbar/>
      {/* <!-- end header section --> */}
    </div>
    <Map/>
    <Address/>
    <Footer/>
    </div>
    </>
  )
}
