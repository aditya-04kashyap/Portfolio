import React from 'react'
import html from '../imags/html.png'
import Css from '../imags/Css.png'
import  GitHub from '../imags/Github.png'
import JavaScript from '../imags/JavaScript.png'
import MongoDB from '../imags/MongoDB.png'
import Node from '../imags/Nodejs.png'
import sql from '../imags/SQL.png'
import python from '../imags/Python.png'
import tailwind from '../imags/Tailwind.png'
import cpp from '../imags/Cpp.png'
import reat from '../imags/React.png'

const Skills = () => {
  return (
    <div className="w-full    bg-gradient-to-r from-black to-blue-950 pb-20">
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full "  >
            <div>
                <h1 className='text-5xl sm:text-7xl font-bodd text-sky-300 pb-4 pt-48' name="Skills">Skills</h1>
                <p className='text-sky-100 text-2xl pb-5'>These are the technologies I've experience in</p>
            </div>
            <div className='grid  grid-cols-2 md:grid-cols-3  text-sky-100'>
                <div className="shadow-xl  mb-6 md:mb-10 shadow-orange-500 m-6">
                    <img src={html} alt="html" className=' mx-auto w-20'/>
                    <center><p>HTML</p></center>
                </div>
                <div className="shadow-xl  mb-6 md:mb-10 shadow-sky-500 m-6">
                    <img src={Css} alt="html" className=' mx-auto w-20'/>
                    <center><p>CSS</p></center>
                </div>
                <div className="shadow-xl  mb-6 md:mb-10 shadow-purple-500 m-6">
                    <img src={GitHub} alt="html" className='mx-auto w-20'/>
                    <center><p>GitHub</p></center>
                </div>
                <div className="shadow-xl  mb-6 md:mb-10 shadow-yellow-500 m-6">
                    <img src={JavaScript} alt="html" className='mx-auto w-20 mb-2'/>
                    <center><p>JavaScript</p></center>
                </div>
                <div className="shadow-xl   mb-6 md:mb-10 shadow-lime-500 m-6">
                    <img src={MongoDB} alt="html" className='mx-auto w-10'/>
                    <center><p>MongoDB</p></center>
                </div>
                <div className="shadow-xl  mb-6 md:mb-10 shadow-cyan-500 m-6">
                    <img src={reat} alt="html" className='mx-auto mb-4 w-20'/>
                    <center><p>ReactJS</p></center>
                </div>
                <div className="shadow-xl  mb-6 md:mb-10 shadow-green-500 m-6">
                    <img src={Node} alt="html" className='mx-auto w-20'/>
                    <center><p>NodeJs</p></center>
                </div>
                <div className="shadow-xl  mb-6 md:mb-10 shadow-red-500 m-6">
                    <img src={sql} alt="html" className='mx-auto w-20'/>
                    <center><p>SQL</p></center>
                </div>
                <div className="shadow-xl  mb-6 md:mb-10 shadow-amber-500 m-6">
                    <img src={python} alt="html" className='mx-auto mt-4 w-20'/>
                    <center><p>Python</p></center>
                </div>
                <div className="shadow-xl  mb-6 md:mb-10 shadow-blue-500 m-6">
                    <img src={tailwind} alt="html" className='mx-auto mt-5 w-20 mb-6'/>
                    <center><p>Tailwind CSS</p></center>
                </div>
                <div className="shadow-xl  mb-6 md:mb-10 shadow-blue-100 m-6">
                    <img src={cpp} alt="html" className='mx-auto w-20'/>
                    <center><p>C++</p></center>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills