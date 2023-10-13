import React from 'react'

const Contact = () => {
  return (
    <div class="w-full  bg-gradient-to-r from-black to-blue-950 pt-20 " name="Contact">
        <div className="flex flex-col justify-center max-w-screen-lg mx-auto h-full">
            <p className="text-sky-300 font-bodd text-6xl md:3xl pb-4 pl-4 ">Let's Connect</p>
            <p className="text-sky-300 text-2xl pl-4">Sumbit the form to Contact Me</p>
        </div>
        <div className='flex flex-col justify-center items-center p-10'>
            <form action="https://usebasin.com/f/14242b063335" method="POST" className="flex flex-col w-1/2">
                <input type="text" placeholder="Enter your Name" className='p-2 m-2  rounded-md border-2 bg-transparent text-sky-300 placeholder:text-sky-100'></input>
                <input type="text" placeholder="Enter your Email" className='p-2  m-2 rounded-md border-2 bg-transparent text-sky-300 placeholder:text-sky-100'></input>
                <textarea name="message" rows={10} placeholder="Enter your message" className=" rounded-md m-2 border-2 bg-transparent text-sky-300 placeholder:text-sky-100  p-2"></textarea>
                <center><button className="  pl-3 pr-3 h-10 text-xl rounded-lg bg-gradient-to-r from-cyan-400 to-emerald-400 m-4 hover:scale-110 duration-100 ">Submit</button></center>
            </form>
        </div>
    </div>
  )
}

export default Contact