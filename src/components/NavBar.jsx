import React ,{ useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import { Link } from 'react-scroll'
const NavBar = () => {
  const  [nav,setNav]= useState(false);
  return (
    <div className="flex justify-end sm:justify-center items-center   sm:backdrop-blur-lg   w-full h-20 text-white  fixed px-4 z-10 top-0 ">
      <ul className="sm:flex hidden backdrop-blur-xl justify-end">
        <li className=" px-10 text-xl tracking-wide text-emerald-300 font-bold  hover:scale-110 duration-200 cursor-pointer"><Link to='Home' smooth duration={500}>Home</Link></li>
        <li className=" px-10 text-xl tracking-wide text-emerald-300 font-bold  hover:scale-110 duration-200 cursor-pointer"><Link to='About' smooth duration={500}>About</Link></li>
        <li className=" px-10 text-xl tracking-wide text-emerald-300 font-bold  hover:scale-110 duration-200 cursor-pointer"><Link to='Skills' smooth duration={500}>Skills</Link></li>
        <li className=" px-10 text-xl tracking-wide text-emerald-300 font-bold  hover:scale-110 duration-200 cursor-pointer"><Link to='Project' smooth duration={500}>Projects</Link></li>
        <li className=" px-10 text-xl tracking-wide text-emerald-300 font-bold  hover:scale-110 duration-200 cursor-pointer"><Link to='Contact' smooth duration={500}>Contact Us</Link></li>
        
      </ul>
      <div onClick={()=> setNav(!nav)} className="cursor-pointer sm:hidden z-4  text-emerald-200 font-bold  bg-gray-800 rounded-xl   p2 right-0">
        {nav ? <FaTimes size={30} /> : <FaBars  size={30} />}
      </div>
      {nav && (
        <ul className="-z-10 flex flex-col bg-gradient-to-br from-gray-900 to-slate-800 justify-center items-center   absolute top-0 right-0 w-full h-screen sm:hidden">
          <li className=" px-3 text-3xl mb-4 text-emerald-300 font-bold  hover:scale-110 duration-200 cursor-pointer"><Link onClick={() => setNav(!nav)} to='Home' smooth duration={500}>Home</Link></li>
          <li className=" px-3 text-3xl mb-4 text-emerald-300 font-bold  hover:scale-110 duration-200 cursor-pointer"><Link onClick={() => setNav(!nav)} to='About' smooth duration={500}>About</Link></li>
          <li className=" px-3 text-3xl mb-4 text-emerald-300 font-bold  hover:scale-110 duration-200 cursor-pointer"><Link onClick={() => setNav(!nav)} to='Skills' smooth duration={500}>Skills</Link></li>
          <li className=" px-3 text-3xl mb-4 text-emerald-300 font-bold  hover:scale-110 duration-200 cursor-pointer"><Link onClick={() => setNav(!nav)} to='Project' smooth duration={500}>Projects</Link></li>
          <li className=" px-3 text-3xl mb-4 text-emerald-300 font-bold  hover:scale-110 duration-200 cursor-pointer"><Link onClick={() => setNav(!nav)} to='Contact' smooth duration={500}>Contact</Link></li>
        </ul>
      )}
      
    </div>
    
  )
}

export default NavBar