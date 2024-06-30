import React from 'react'

const Contact = () => {
  return (
    <div class="w-full bg-gradient-to-tr from-slate-700 to-black pt-20 " name="Contact">
        <center>
          <div className="flex flex-col justify-center max-w-screen-lg mx-auto h-full">
              <p className="text-emerald-400 font-raleway font-bold tracking-wide text-6xl md:3xl pb-4 pl-4 ">Let's Connect</p>
              <p className="text-emerald-400 text-2xl pl-4">Sumbit the form to Contact Me</p>
          </div>
        </center>
        <div className='flex flex-col justify-center items-center p-10'>
            <form action="https://usebasin.com/f/14242b063335" method="POST" className="flex flex-col sm:w-2/3 w-3/4">
                <input type="text" placeholder="Enter your Name" className='p-2 m-2  rounded-md border-2 bg-transparent text-emerald-400 placeholder:text-sky-100'></input>
                <input type="text" placeholder="Enter your Email" className='p-2  m-2 rounded-md border-2 bg-transparent text-emerald-400 placeholder:text-sky-100'></input>
                <textarea name="message" rows={10} placeholder="Enter your message" className=" rounded-md m-2 border-2 bg-transparent text-emerald-400 placeholder:text-sky-100  p-2"></textarea>
                <center><button className="shadow-md shadow-emerald-300  pl-3 pr-3 h-10 text-xl rounded-lg bg-gradient-to-br from-emerald-500 to-teal-700 m-4 hover:scale-110 duration-100 text-white ">Submit</button></center>
            </form>
        </div>
    </div>
  )
}

export default Contact