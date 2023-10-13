import React from 'react'
import {FaGithub , FaLinkedin} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {HiOutlineMail} from 'react-icons/hi'
const SocialLinks = () => {
  return (
    <div className="lg:flex flex-col top-[35%] left-0 fixed hidden">
        <ul>
            <li className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md bg-slate-800 text-white">
                <a href="https://www.linkedin.com/in/aditya-kashyap-759882226/ " target="_blank" rel="noreferrer" className='flex justify-between items-center w-full'>
                    <>LinkedIn <FaLinkedin size={30} />
                    </>
                </a>
            </li>
            
            <li className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md bg-slate-800 text-white ">
                <a href="https://github.com/aditya-04kashyap" target="_blank" rel="noreferrer" className='flex justify-between items-center w-full'>
                    <>GitHub <FaGithub size={30} />
                    </>
                </a>
            </li>
            <li className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md bg-slate-800 text-white">
                <a href="https://resume.io/r/4t9geMpiJ" target="_blank" rel="noreferrer" className='flex justify-between items-center w-full'>
                    <>Resume <BsFillPersonLinesFill size={30} />
                    </>
                </a>
            </li>
            <li className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md bg-slate-800 text-white">
                <a href="mailto:kashyap1aditya@gmail.com" target="_blank" rel="noreferrer" className='flex justify-between items-center w-full'>
                    <>Mail <HiOutlineMail size={30} />
                    </>
                </a>
            </li>
        </ul>
    </div>
  )
}

export default SocialLinks