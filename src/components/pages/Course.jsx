import { Fade } from "react-awesome-reveal"
import { courses } from "../data/Data"
import Button from "../Button"

export default function Course() {
  return (
    <section className="bg-white dark:bg-gray-900 pt-14"  id="course">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Ready to transform your life? </h2>
         
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          {
            courses.map((course, index) =>
           <Fade>
   <div>
                <div key={index} className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  
                  {course.icon}
                     </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">{course.title}</h3>
                <p className="text-gray-500 dark:text-gray-400">{course.content}</p>
              </div>


           </Fade>

            )
          }
          
        
        </div>
        <p className="text-gray-500 sm:text-xl pt-9 dark:text-gray-200 text-center">Join us now if you're 
        seeking profound change and growth. Our tailored training program is designed to maximize your potential and unlock new opportunities. 
        Don't wait any longer – take the first step towards a brighter future today</p>
      </div>
      <div className="flex justify-center pt-10"> <Button text="Join Us Now!" /></div>
      
    </section>
  )
}
