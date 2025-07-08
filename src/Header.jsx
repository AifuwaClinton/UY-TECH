import React from 'react'
import { FiBookOpen } from "react-icons/fi";
import { PiHouseLineLight } from "react-icons/pi";
import { LiaHandHoldingHeartSolid } from "react-icons/lia";
import { MdOutlineMail } from "react-icons/md";
import About from './About.jsx';

function Header() {
  return (
    <header className='shadow-lg h-20 flex w-320 fixed mb-30'><br /><br /><br /><br /><br />
    <h2 className='flex items-center gap-x-2 pl-2 hover:text-blue-500 text-black font-bold  ml-10 mb-10 mt-3 ' ><FiBookOpen className='text-3xl mt-10 mb-6 ml-5' /><span className='text-2xl mt-5'>ModernBlog</span> </h2>
    <ul className='ul pr-40'>
      <li className='flex items-center hover:text-blue-500 text-l mt-5 ml-170 bg-blue-500 h-10 text-black font-bold'><PiHouseLineLight />Home</li>
      <li className='flex items-center hover:text-blue-500 text-l ml-0 '><LiaHandHoldingHeartSolid />About</li>
      <li className='flex items-center hover:text-blue-500  text-l ml-0 text-black-500'><MdOutlineMail />Contact</li><hr />
    </ul>
    
    
    </header>
  
  )
}

export default Header