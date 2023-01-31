import React from 'react'

const Contact = () => {
  return (
    <div className='text-white w-full py-16 px-4' >
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
      <div className=''>
        <h1 className='text-lg sm:text-2xl font-medium '>For any Querry contact here</h1>
        <p className='font-medium text-emerald-300 sm:text-xl'>sign up for Contact</p>
      </div>
      <div className='flex justify-center items-center gap-2 mt-2'>
        <input type="email" placeholder='Email' className='p-2 w-full rounded-md text-black' />
        <button type='submit' className='bg-emerald-500 w-[200px] py-2 rounded-lg'>Sign in</button>
      </div>
      </div>
    </div>
  )
}

export default Contact