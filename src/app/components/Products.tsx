import React from 'react'
import Image from 'next/image'
import img1 from '../components/public/img1.png'
import img2 from '../components/public/img2.png'
import img3 from '../components/public/img3.png'
import img4 from '../components/public/img4.png'
import img5 from '../components/public/img5.png'
import img6 from '../components/public/img6.png'
import img7 from '../components/public/img7.png'
import img8 from '../components/public/img8.png'
import img9 from '../components/public/img9.png'
import img10 from '../components/public/img10.png'
import img11 from '../components/public/11.png'


export default function Products() {
  return (
    <main>
    <div>
      <h1 className='text-green-950 font-bold text-4xl text-center mt-14'>Best Selling</h1>
      <p className='text-green-800 text-xl p-8 text-center'>These are our best selling products.</p>
    </div>

    <div className='mx-14 h-auto flex gap-8 justify-center mb-11 '>
      <div className='w-1/4'>
        <Image
        src={img4}
        alt='Image1'
        width={700}
        height={700}
        className='bg-green-100'
        />
        <p className='text-center'>Best dress <br /><span>$77 | peach</span></p>
      </div>

      <div className='w-1/4'>
      <Image
        src={img5}
        alt='Image3'
        width={700}
        height={700}
        className='bg-green-100'
        />
        <p className='text-center'>Best dress <br /> <span>$77 | peach</span></p>

      </div>

      <div className='w-1/4'>
      <Image
        src={img6}
        alt='Image3'
        width={700}
        height={700}
        className='bg-green-100'
        />
        <p className='text-black text-center'>Best dress <br /><span>$77 | peach</span></p>

      </div>

      
      <div className='w-1/4'>
        <Image
        src={img7}
        alt='Image1'
        width={700}
        height={700}
        className='bg-green-100'
        />
        <p className='text-center'>Best dress <br /><span>$77 | peach</span></p>
      </div>

    </div>


    {/*2nd line */}

    <div className='mx-14 h-auto flex gap-8 justify-center  '>
      <div className='w-1/4'>
        <Image
        src={img8}
        alt='Image1'
        width={700}
        height={700}
        className='bg-green-100'
        />
        <p className='text-center'>Best dress <br /><span>$77 | peach</span></p>
      </div>

      <div className='w-1/4'>
      <Image
        src={img9}
        alt='Image3'
        width={700}
        height={700}
        className='bg-green-100'
        />
        <p className='text-center'>Best dress <br /> <span>$77 | peach</span></p>

      </div>

      <div className='w-1/4'>
      <Image
        src={img10}
        alt='Image3'
        width={700}
        height={700}
        className='bg-green-100'
        />
        <p className='text-black text-center'>Best dress <br /><span>$77 | peach</span></p>

      </div>

      
      <div className='w-1/4'>
        <Image
        src={img11}
        alt='Image1'
        width={700}
        height={700}
        className='bg-green-100'
        />
        <p className='text-center'>Best dress <br /><span>$77 | peach</span></p>
      </div>

    </div>

</main>
  )
}
