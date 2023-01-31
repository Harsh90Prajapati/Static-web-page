import React from 'react'
const Content = () => {
  return (
   <div className='bg-cover bg-space_img text-white'>
     <div className='flex flex-col justify-center items-center mt-[-90px] w-full h-screen gap-2'>
       <p className='text-cyan-300 font-semibold md:text-4xl sm:text-2xl text-lg'>HEY DID YOU NEED MONEY</p>
       <h1 className='md:text-7xl sm:text-6xl text-4xl font-medium '>GROW WITH <span className='text-emerald-400'>MONEY.</span> </h1>
      
      <div>
         <h1 className='text-md sm:text-xl md:text-2xl'>If You Need Money For Your PROJECTs </h1>
       </div>
      <button className='px-5 sm:px-10 w-[200px] py-3 font-medium my-6 mx-auto  bg-cyan-300 rounded-lg text-gray-700 mt-2 transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-300'>Click Here</button>
    </div>
    
   </div>
  )
}

export default Content