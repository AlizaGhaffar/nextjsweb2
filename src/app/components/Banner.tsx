import React from 'react'
import Image from 'next/image'
import first from '../components/public/Mask group.png'


export default function Banner() {
  return (
    <main className='bg-green-100 min-h-screen'>
      <div className='flex justify-around items-center'>
        <div className='  '>
          <h1 className='text-green-950 font-semibold text-5xl pb-8 mt-12'>Discover And <br />Find Your Own <br />Fashion!</h1>
          <p className='text-green-800 font-light text-xl pb-8 '>Lorem ipsum dolor sit amet modih<br />consectetur, adipisicing elit<br />architecto sapiente.</p>
          <button className='bg-green-950 text-white w-28 h-9 hover:bg-green-100 hover:text-green-950 border border-green-950 rounded-lg font-bold'>more</button>
        </div>
        <div className='flex justify-center items-center w-1/4 h-1/3'>
          <Image
          src={first}
          alt='pic'
          width={700}
          height={700}
          className=''
          />
        </div>
      </div>
    </main>
  )
}
