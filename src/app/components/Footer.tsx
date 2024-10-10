import React from 'react'
import Image from 'next/image'
import foot from '../components/public/footer.png'
export default function Footer() {
  return (
    <div className=' ml-32 pt-9'>
<div>
  <Image 
  src={foot}
  alt='footer'
  width={700}
  height={700}
  
  
  />
  </div>   

      <div className='bg-green-50 text-green-950 font-semibold text-center p-4'><p>@All rights reserved...</p></div>
    </div>
  )
}
