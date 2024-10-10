import React from 'react'

export default function Navbar() {
  return (
    <div>
        <div className='flex justify-around p-6 bg-green-100'>
      <div className='text-green-950 font-bold text-xl'>Rivo</div>
      {/*nav icons */}
      <div>
        <ul className='flex space-x-7 font-semibold '>

          <li className=' text-green-950 hover:p-2'>Home</li>
          <li className=' text-green-950 hover:p-2'>About</li>
          <li className=' text-green-950 hover:p-2'>New Arrival</li>
          <li className=' text-green-950  hover:p-2'>Contact Us</li>
          <li className='text-green-950 px-9 py-1 hover:bg-green-950 hover:text-white border border-green-950 border-2xl rounded-xl'><button>LogIn</button></li>
          
        </ul>
      </div>
    </div>
    </div>
  )
}
