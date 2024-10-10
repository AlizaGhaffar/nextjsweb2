import React from 'react'

export default function Feedback() {
  return (

<main>
    <div>
      <h1 className='text-green-950 font-bold text-4xl text-center my-14'>Feedback Corner</h1>
    </div>

    <div className='flex mx-14 gap-5'>
      <div className='bg-green-50 p-5 rounded-md'>
        <h1 className='text-green-950 font-bold'>Emily Witson</h1>
        <p className='font-light text-md'>The customer experience was exceptional from start to finish. The website is user-friendly, the checkout process was smooth, and the clothes I ordered fit perfectly. I'm beyond satisfied!
        </p>
      </div>


      <div  className='bg-green-100 p-5 rounded-md'>
        <h1 className='text-green-950 font-bold'>Emily Witson</h1>
        <p className='text-green-950 font-light'>The customer experience was exceptional from start to finish. The website is user-friendly, the checkout process was smooth, and the clothes I ordered fit perfectly. I'm beyond satisfied!
        </p>
      </div>


      <div  className='bg-green-50 p-5 rounded-md'>
        <h1 className='text-green-950 font-bold'>Emily Witson</h1>
        <p className='font-light'>The customer experience was exceptional from start to finish. The website is user-friendly, the checkout process was smooth, and the clothes I ordered fit perfectly. I'm beyond satisfied!
        </p>
      </div>
    </div>
</main>
  )
}
