import { Fade } from "react-awesome-reveal";
import { courses } from "../data/Data";
import Button from "../Button";

export default function Course() {
  return (
    <section className="bg-white dark:bg-gray-900 pt-14" id="course">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Ready to transform your life?{" "}
          </h2>
        </div>
        {/* <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          {courses.map((course, index) => (
            <Fade>
              <div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">
                  {course.title}
                </h3>
                <div key={index}>{course.image}</div>
              </div>
            </Fade>
          ))}
        </div> */}

        <div className="md:grid lg:grid-cols-3 md:gr lg:grid-rows-4 lg:gap-12">
          <div className="row-span-2">
            <img
              class="w-full rounded-lg"
              src="https://res.cloudinary.com/dzgbjty7c/image/upload/v1709487235/Baudspace%20Cyberlearn/_72c3bdb0-33a2-46d4-be5d-185eac3ba5c9_fsdptl.jpg"
              alt="office content 1"
            />
          </div>
          <div className="row-span-3 col-start-2 row-start-2 ">
            <img
              class="w-full rounded-lg"
              src="https://res.cloudinary.com/dzgbjty7c/image/upload/v1709487235/Baudspace%20Cyberlearn/_d5fd39d9-d8cf-4b5d-b82c-b879353906ca_xeqvd0.jpg"
              alt="office content 1"
            />
          </div>
          <div className="row-span-2 col-start-3 row-start-1 ">
            <img
              class="w-full rounded-lg"
              src="https://res.cloudinary.com/dzgbjty7c/image/upload/v1709487234/Baudspace%20Cyberlearn/_0bfa4770-0963-4d06-832d-c6bd645af1de_oc7ris.jpg"
              alt="office content 1"
            />
          </div>
          <div className="col-start-2 row-start-1 w-full round-lg bg-blue-950">
            <h3 className="mb-2 text-xl text-center py-6 px-2 font-bold dark:text-white">
              Are you feeling trapped in a stagnant job that no longer aligns
              with your goals or vision for the future?
            </h3>
          </div>
          <div className="row-start-3 bg-blue-950 ">
            <h3 className="mb-2 text-xl text-center  py-10 font-bold dark:text-white">
              Are you ready to skyrocket your earnings and achieve six-figure
              success in record time?
            </h3>
          </div>
          <div className="col-start-3 row-start-3 bg-blue-950">
            <h3 className="mb-2 text-xl text-center py-6 px-2 font-bold dark:text-white">
              Are you eager to kickstart a career in a dynamic field that offers
              diverse career trajectories and endless possibilities for
              professional advancement?
            </h3>
          </div>
          <div className="col-start-3 row-start-4 bg-blue-950">
            <h3 className="mb-2 text-xl text-center py-6 px-2 font-bold dark:text-white">
            Ready to make a bold career move even without a degree or prior experience in IT? 
            </h3>
          </div>
          <div className="col-start-1 row-start-4 bg-blue-950">
            <h3 className="mb-2 text-xl text-center py-6 px-2 font-bold dark:text-white">
              Are you feeling trapped in a stagnant job that no longer aligns
              with your goals or vision for the future?
            </h3>
          </div>
        </div>

        <p className="text-gray-500 sm:text-xl pt-9 dark:text-gray-200 text-center">
          Join us now if you're seeking profound change and growth. Our tailored
          training program is designed to maximize your potential and unlock new
          opportunities. Don't wait any longer – take the first step towards a
          brighter future today
        </p>
      </div>
      <div className="flex justify-center pt-10">
        {" "}
        <Button text="Join Us Now!" />
      </div>
    </section>
  );
}
