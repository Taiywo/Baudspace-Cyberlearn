import React from 'react'

const Cyberjourney = (props) => {

  return (
    <section ref={(props.cyberjourney)} class="bg-white dark:bg-gray-900">
    <div class="gap-8 items-center text-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 sm:py-16 lg:px-6">
        <div class="mt-4 md:mt-0">
            <h2 class="mb-4 text-4xl tracking-tight font-mono font-extrabold text-gray-900 dark:text-white">Embark on Your Cybersecurity Journey</h2>
            <p class="mb-6 font-light leading- font-mono  text-gray-500 md:text-lg dark:text-gray-400">Breaking into the dynamic field of Cybersecurity can appear challenging, especially with its diverse array of roles and disciplines. However, don't let this complexity deter you from taking the first step. This course serves as a comprehensive introduction to six prominent domains within cybersecurity: Security Analysis, Digital Forensics and Incident Response (DFIR), Cloud Security Engineering, Governance, Risk and Compliance (GRC), Security Engineering, and Security Architecture.

Throughout this course, you will gain insights from subject matter experts who will provide you with a glimpse into their daily professional lives within these domains. Discover the journey that led them to these fulfilling careers and explore the aspects that continue to ignite their passion. Your journey into the world of cybersecurity starts here.</p>
            <a href="#" class="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
                Get started
                <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
        </div>
    </div>
</section>
  )
}

export default Cyberjourney