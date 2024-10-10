import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Best from './components/Best'
import Products from './components/Products'
import Offer from './components/Offer'
import Feedback from './components/Feedback'
import Footer from './components/Footer'

export default function home() {
  return (
          <div className='bg-white min-h-screen'>
<Navbar/>
<Banner/>
<Best/>
<Products/>
<Offer/>
<Feedback/>
<Footer/>
    </div>
  )
}
