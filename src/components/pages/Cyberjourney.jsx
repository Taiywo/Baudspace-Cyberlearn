import React from 'react'
import { Slide } from 'react-awesome-reveal'
import Button from '../Button'


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

 <Button  text="Begin Your Six-Figure Journey Now!" />
        </div>
       </Slide>
    </div>
</section>
  )
}

export default Cyberjourney