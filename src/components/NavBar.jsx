import React ,{ useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import { Link } from 'react-scroll'
const NavBar = () => {
  const  [nav,setNav]= useState(false);
  return (
    <div className="flex justify-between items-center w-full h-20 text-white bg-blue-950 fixed px-4 z-10 top-0 ">
      <div>
        <h1 className="text-4xl text-sky-300  font-signature font-extrabold  " >Aditya Kashyap</h1>
      </div>
      <ul className="sm:flex hidden justify-end">
        <li className=" px-3 text-xl text-sky-300 hover:scale-110 duration-200 cursor-pointer"><Link to='Home' smooth duration={500}>Home</Link></li>
        <li className=" px-3 text-xl text-sky-300 hover:scale-110 duration-200 cursor-pointer"><Link to='About' smooth duration={500}>About</Link></li>
        <li className=" px-3 text-xl text-sky-300 hover:scale-110 duration-200 cursor-pointer"><Link to='Skills' smooth duration={500}>Skills</Link></li>
        <li className=" px-3 text-xl text-sky-300 hover:scale-110 duration-200 cursor-pointer"><Link to='Contact' smooth duration={500}>Contact</Link></li>
      </ul>
      <div onClick={()=> setNav(!nav)} className="cursor-pointer sm:hidden z-4  text-sky-300  pr-4 right-0">
        
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col bg-gradient-to-b from-blue-800 to-slate-800 justify-center items-center   absolute top-20 right-0 w-full h-screen sm:hidden">
          <li className=" px-3 text-3xl mb-4 text-sky-300 hover:scale-110 duration-200 cursor-pointer"><Link onClick={() => setNav(!nav)} to='Home' smooth duration={500}>Home</Link></li>
          <li className=" px-3 text-3xl mb-4 text-sky-300 hover:scale-110 duration-200 cursor-pointer"><Link onClick={() => setNav(!nav)} to='About' smooth duration={500}>About</Link></li>
          <li className=" px-3 text-3xl mb-4 text-sky-300 hover:scale-110 duration-200 cursor-pointer"><Link onClick={() => setNav(!nav)} to='Skills' smooth duration={500}>Skills</Link></li>
          <li className=" px-3 text-3xl mb-4 text-sky-300 hover:scale-110 duration-200 cursor-pointer"><Link onClick={() => setNav(!nav)} to='Contact' smooth duration={500}>Contact</Link></li>
        </ul>
      )}
      
    </div>
    
  )
}

export default NavBar