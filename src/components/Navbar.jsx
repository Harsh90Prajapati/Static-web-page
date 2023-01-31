import React, {useState} from 'react'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
import {MdDarkMode,MdOutlineWbSunny} from 'react-icons/md'

function Navbar() {

   const[nav , setNav] = useState(true)
   const[ dark , setDark] = useState(true)

   const handleNav=()=>{
    setNav(!nav)
   }

   const ChangeBackground=()=>{
    setDark(!dark)
   }

  return (
    <div className='flex justify-between items-center  max-w-[1140px] mx-auto px-8 text-white h-24'>
        <h1 className='w-full text-2xl font-semibold text-cyan-300'>MONEY.</h1>
        <ul className='hidden md:flex'>
            <li className='p-4'>Home</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Contact</li>
            <li className='p-4'>Resourse</li>
            <li className='p-4'>Help</li>
        </ul>
        
        <div onClick={handleNav} className='block md:hidden'>
        {!nav ? <AiOutlineClose/> : <AiOutlineMenu size={20}/>}
        </div>
        <div className={!nav ? 'fixed bg-slate-900 left-0 top-0 w-[60%] border-r h-full border-r-gray-600 ease-in-out duration-300 md:hidden':'fixed left-[-100%]'}>
        <h1 className='w-full text-2xl m-3 p-4 font-semibold text-cyan-300'>MONEY.</h1>
        <ul className='uppercase p-4'>
            <li className='p-4 border-b border-b-gray-600 '>Home</li>
            <li className='p-4 border-b border-b-gray-600 '>About</li>
            <li className='p-4 border-b border-b-gray-600 '>Contact</li>
            <li className='p-4 border-b border-b-gray-600 '>Resourse</li>
            <li className='p-4 border-b border-b-gray-600 '>Help</li>
        </ul>
        </div>
        <button onClick={ChangeBackground} className={!dark ?'p-2 md:p-3 ml-2 bg-gray-600 rounded-lg':'p-2 md:p-3 ml-2 bg-slate-200 rounded-lg' }>{!dark ? <MdDarkMode/> :<MdOutlineWbSunny className='text-black'/>}</button>
    </div>
  )
}

export default Navbar