import { Fade } from "react-awesome-reveal"
import { courses } from "../data/Data"

export default function Course() {
  return (
    <section className="bg-white dark:bg-gray-900 pt-14"  id="course">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">What You Will Learn</h2>
          <p className="text-gray-500 sm:text-xl dark:text-gray-400">The Cybersecurity Specialist Workshop Learning Path presents a holistic initiation into the fundamental principles of cybersecurity. It covers critical areas such as network security, cryptography, authentication, risk management, and a foundational grasp of cyber threats. These online courses, tailored for cybersecurity novices, adopt a gradual approach to acquaint you with the concepts. Enhanced by hand-on exercises, they form a framework for establishing a robust and comprehensive grasp of cybersecurity.
            .</p>
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
      </div>
    </section>
  )
}
