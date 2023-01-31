import React from 'react'
import Photo from '../images/pexel2.jpg'

const Product = () => {
  return (
     <div className='w-full bg-white py-16 px-5'>
        <div className='max-w-[1240px] mx-auto  grid sm:grid-cols-2 gap-2'>
            <img src={Photo} alt="/" className='rounded-lg w-[500px] mx-auto my-4' />
            <div className='flex flex-col justify-center'>
                <p className='text-xl sm:text-2xl text-emerald-300 font-bold'>Money Dashboard</p>
                <h1 className='text-2xl sm:text-4xl font-semibold py-2 '>Manage Your Money</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae enim cumque possimus 
                    laudantium, et aspernatur quidem eius nesciunt voluptatem, assumenda reprehenderit 
                    earum ullam nemo eligendi, suscipit doloremque. Reprehenderit, laborum ipsum.
                </p>
                <button className='bg-cyan-400 w-[200px] py-3 font-medium my-6 md:mx-0 rounded-lg'>Get Started</button>
            </div>

        </div>
     </div>
    )
}

export default Product