import React from 'react'

const About = () => {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl'>
      <h1 className='text-[3vw] leading-[4vw] '>Ochi is a strategic partner for fast-growing tech businesses that need to raise fund, sell products, explain complex ideas, and hire great people.</h1>
      {/* other section */}
      <div className=' flex gap-5 w-full pt-10 mt-20 border-t-[1px] border-[#9fb74a]  '>
        <div id='text-left' className='w-1/2'>
          <h1 className='text-[5vw] md:text-7xl'>Our Approach:</h1>
          <button className='px-5 py-3 md:px-10 md:py-6 bg-zinc-900 rounded-full text-white mt-5 flex gap-5 items-center uppercase'>Read More
            <div className='w-2 h-2 bg-zinc-300 rounded-full'></div>
          </button>
        </div>
        <div id="img-right" className='rounded-2xl w-1/2 h-[70vh]'>
          <img src="https://images.ctfassets.net/wes1vt7sf9ho/44P5R9IhGg3F2texPwqRne/c5fc679eb0227dad2c77993d611fb34e/autoportrait2.jpeg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default About;