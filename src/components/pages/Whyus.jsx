import React from 'react'
import Expert from "../../assets/expert.png"
import Curr from "../../assets/curri.png"
import Hands from "../../assets/hands-on.png"

const Whyus = () => {
  return (

    <section class="bg-white dark:bg-gray-900 pt-14" id='whyus'>
      <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <h2 class="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Why us</h2>
        <div class="grid pt-8 gap-5 text-left justify-center border-t text-gray-900 dark:text-white border-gray-200  md:gap-2 md:flex dark:border-gray-700 lg:gap-16 lg:grid-cols-3">
          <div className='w-72 text-center dark:bg-gray-800 bg-gray-100 rounded-xl px-5 py-16' >
            <img src={Curr} alt="" className='w-10 m-auto pb-5' />
            <span className='text-2xl '>Comprehensive Curriculum </span><br /><br />  "Our courses cover the latest cybersecurity techniques and technologies, ensuring you're prepared for real-world challenges."
          </div>
          <div className='w-72 text-center dark:bg-gray-800 bg-gray-100 rounded-xl px-5 py-16' >
          <img src={Expert} className='w-10 m-auto pb-5' alt="" />
            <span className='text-2xl '>Expert Instructor </span><br /><br />   "Learn from industry veterans with years of  experience in the field."
          </div>
          <div className='w-72 text-center dark:bg-gray-800 bg-gray-100 rounded-xl px-5 py-16' >
          <img src={Hands}  alt="" className='w-10 m-auto pb-5' />
            <span className='text-2xl '>Hands-on Experience </span><br /><br />  "Practice your skills in our virtual labs, gaining practical knowledge you can apply immediately."
          </div>
          </div>
      </div>
    </section>
  )
}

export default Whyus



