import React from 'react'
import pp from './pp.png'
const Home = () => {
  return (
    <div name="Home" className=' w-full    bg-gradient-to-r from-black to-blue-950'>
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 sm:flex-row">
        <div>
          <h2 className="text-5xl sm:text-7xl font-bodd text-sky-300 pb-4 pt-48 ">I am a Full Stack Developer</h2>
          <p className="text-sky-100 text-xl pb-5">
          I'm a passionate web developer with expertise
          in a range of technologies, including HTML, 
          CSS, JavaScript, React, Node.js, and MongoDB. 
          With a deep appreciation for both front-end and 
          back-end development, I create seamless, 
          user-friendly web experiences.
          </p>
          <h2 className="text-xl sm:text-4xl font-bodd text-sky-300 pb-4">Why I code ?</h2>
          <p className="text-sky-100 text-xl mb-10 ">
          From the intricate design of a website's user interface to the complex 
          logic of server-side code, I revel in the craft of web 
          development. I find the perfect blend of creativity and 
          problem-solving in this field, making every project an 
          exciting journey.
          </p>
        </div>
        <div>
          <img src={pp} alt="" className="rounded-3xl mx-auto w-1/4 sm:w-full sm:h-full shadow-xl shadow-sky-400 pb:10 md:ml-10" />
        </div>
      </div>
    </div>
  )
}

export default Home