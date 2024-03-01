import React from 'react'
import { Slide } from 'react-awesome-reveal'

const Cyberjourney = (props) => {

  return (
    <section ref={(props.cyberjourney)} class= "bg-white dark:bg-gray-900">
    <div class="gap-8 items-center text-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 sm:py-16 lg:px-6">
       <Slide>
       <div class="mt-4 md:mt-0">
            <h2 class="mb-4 text-4xl tracking-tight font-montserrat font-extrabold text-gray-900 dark:text-white">Embark on Your Cybersecurity Journey</h2>
            <p class="mb-6 font-light leading- font-montserrat  text-gray-500 md:text-lg dark:text-gray-400">Unlock your path to a lucrative career in cybersecurity with our cutting-edge training program. Designed to empower you with the essential skills,
             knowledge, and confidence, this groundbreaking initiative ensures you kickstart your journey towards joining the ranks of high earners in the industry.</p>
<p class="mb-6 font-light leading- font-montserrat  text-gray-500 md:text-lg dark:text-gray-400">Imagine SOFTWARE ENGINEERS completing a rigorous 3-month BOOT CAMP and immediately stepping into six-figure salaries. Who says you can't achieve similar success in CYBERSECURITY within just 90 days. With our program, you can  start earning multiple six figures in cybersecurity within just 90 days. All you need is access to the right information and knowledge – and
  that's precisely what we provide.</p>

<p class="mb-6 font-light leading- font-montserrat  text-gray-500 md:text-lg dark:text-gray-400">This isn't just an opportunity; it's a game-changer waiting for you to seize it. Don't let anyone dictate what you can or cannot achieve.
 Embrace this lifetime opportunity now and chart your course towards unparalleled success in cybersecurity.</p>

            <a href="#" class="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
                Get started
                <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
        </div>
       </Slide>
    </div>
</section>
  )
}

export default Cyberjourney