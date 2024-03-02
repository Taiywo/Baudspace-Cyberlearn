import React from 'react'
import Backgroundvideo from "../../assets/video.mp4"
import { Fade } from "react-awesome-reveal";
import Button from '../Button';

const Hero = () => {

 

  return (
    <section className="bg-white dark:bg-gray-900 relative" id='home'>
      <video className="w-full h-full object-cover absolute inset-0 z-0"
        autoPlay
        muted
        loop>

        <source
          src={Backgroundvideo} // Replace with your video file path
          type="video/mp4"
        />
      </video>
      <div className="py-8 px-4  relative z-0 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
       <Fade>
       <a href=" " className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 mt-36 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
          <span className="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">New</span> <span className="text-sm font-medium"> Announcing new cybersecurity course</span>
          <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
        </a>
       </Fade>
        <Fade delay={0e2} cascade damping={1e-1}>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-white">  Discover Your Dream Career in Cybersecurity</h1>
        </Fade>
        <Fade delay={0e5} cascade damping={1e-1}> <p className="mb-8 text-lg font-normal  lg:text-xl sm:px-16 xl:px-48 text-gray-400">Dominate Cybersecurity in Just 90 Days! Achieve Your Dream Job with Our Elite Training Program
        </p></Fade>
        <Button   text="Begin Your Six-Figure Journey Now!" />
      

      </div>
    </section>

  )
}

export default Hero