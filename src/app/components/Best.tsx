import React from 'react'
import Image from 'next/image'
import img1 from '../components/public/img1.png'
import img2 from '../components/public/img2.png'
import img3 from '../components/public/img3.png'



export default function Best() {
  return (
<main>
    <div>
      <h1 className='text-green-950 font-bold text-4xl text-center mt-14'>Best Selling</h1>
      <p className='text-green-800 text-xl p-8 text-center'>These are our best selling products.</p>
    </div>

    <div className='mx-14 h-auto flex gap-8 justify-center  '>
      <div className='w-1/4'>
        <Image
        src={img1}
        alt='Image1'
        width={700}
        height={700}
        className='bg-green-100'
        />
        <p className='text-center'>Best dress <br /><span>$77 | peach</span></p>
      </div>

      <div className='w-1/4'>
      <Image
        src={img2}
        alt='Image3'
        width={700}
        height={700}
        className='bg-green-100'
        />
        <p className='text-center'>Best dress <br /> <span>$77 | peach</span></p>

      </div>

      <div className='w-1/4'>
      <Image
        src={img3}
        alt='Image3'
        width={700}
        height={700}
        className='bg-green-100'
        />
        <p className='text-black text-center'>Best dress <br /><span>$77 | peach</span></p>

      </div>

    </div>
</main>
  )
}
