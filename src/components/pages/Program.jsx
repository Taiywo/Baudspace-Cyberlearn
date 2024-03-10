import { Fade } from "react-awesome-reveal";

export default function Program() {
  return (
    <section
      class="bg-white dark:bg-gray-900 pt-14 font-montserrat"
      id="program"
    >
      <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl  lg:py-16 lg:px-6">
        <div class="font-light text-gray-500  dark:text-gray-400 ">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Unlock Your Cybersecurity Potential with Baudspace Cyberlearn
          </h2>
          <Fade>
            <p class="mb-4 text-gray-800  md:text-xl pt-9 dark:text-gray-200">
              Empower your cybersecurity journey with Baudspace Cyberlearn as
              your trusted guide. Gain exclusive access to expert-led training
              sessions. Elevate your expertise and propel your career forward
              with our comprehensive learning platform. You'll master critical
              skills in :
            </p>
          </Fade>{" "}
        </div>

        <div className=" grid max-w-screen-xl items-center grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4 md:gap-10 pt-10 ">
          <div className="w-full h-60  md:row-span-2 rounded-3xl bg-white dark:bg-black">
            <img
              class="w-full h-[50%] rounded-tl-3xl rounded-tr-3xl"
              src="https://res.cloudinary.com/dzgbjty7c/image/upload/v1710048165/Baudspace%20Cyberlearn/8d324765-33d5-440d-a4b1-653c4506f868.png"
              alt="office content 1"
            />
            <h3 className="text-sm text-center py-4 px-2 font-bold text-white">
              Cyber Security Fundamentals
            </h3>
          </div>
          <div className="w-full h-60  md:row-span-2 rounded-3xl bg-white dark:bg-black">
            <img
              class="w-full h-[50%] rounded-tl-3xl rounded-tr-3xl"
              src="https://res.cloudinary.com/dzgbjty7c/image/upload/v1710046037/Baudspace%20Cyberlearn/networking-600x400-1_s1crph.jpg"
              alt="office content 1"
            />
            <h3 className="text-sm text-center py-4 px-2 font-bold text-white">
              Fundamentals of Networking and Virtualization
            </h3>
          </div>
          <div className="w-full h-60  md:row-span-2 rounded-3xl bg-white dark:bg-black">
            <img
              class="w-full h-[50%] rounded-tl-3xl rounded-tr-3xl"
              src="https://res.cloudinary.com/dzgbjty7c/image/upload/v1710046038/Baudspace%20Cyberlearn/IAM-1024x576_pb7eqv.png"
              alt="office content 1"
            />
            <h3 className="text-sm text-center py-4 px-2 font-bold text-white">
              Identity and Access Management
            </h3>
          </div>
          <div className="w-full h-60  md:row-span-2 rounded-3xl bg-white dark:bg-black">
            <img
              class="w-full h-[50%] rounded-tl-3xl rounded-tr-3xl"
              src="https://res.cloudinary.com/dzgbjty7c/image/upload/v1710046038/Baudspace%20Cyberlearn/64f6e3e8fc2ea2c5b5458d70_Cyber_Security_Compliance_lsbxhi.jpg"
              alt="office content 1"
            />
            <h3 className="text-sm text-center py-4 px-2 font-bold text-white">
              Security Governance, Compliance, and Risk Management
            </h3>
          </div>
          <div className="w-full h-60  md:row-span-2 rounded-3xl bg-white dark:bg-black">
            <img
              class="w-full h-[50%] rounded-tl-3xl rounded-tr-3xl"
              src="https://res.cloudinary.com/dzgbjty7c/image/upload/v1710046038/Baudspace%20Cyberlearn/3162367_kfpfdx.jpg"
              alt="office content 1"
            />
            <h3 className="text-sm text-center py-4 px-2 font-bold text-white">
              Linux Security and Security Information and Event Management
              (SIEM)
            </h3>
          </div>
          <div className="w-full h-60  md:row-span-2 rounded-3xl bg-white dark:bg-black">
            <img
              class="w-full h-[50%] rounded-tl-3xl rounded-tr-3xl"
              src="https://res.cloudinary.com/dzgbjty7c/image/upload/v1710046038/Baudspace%20Cyberlearn/0_eEE7BntV0AvX76m-_iaoeie.png"
              alt="office content 1"
            />
            <h3 className="text-sm text-center py-4 px-2 font-bold text-white">
              Data Security, Cryptography, and Vulnerability Management
            </h3>
          </div>
        </div>

        <div className="w-full lg:pt-80 md:pt-20 placeholder-stone-100">
          <h2 class="mb-4 lg:text-4xl text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Uncover the Wealth of Opportunities in Cybersecurity Salaries
          </h2>
          <h3 className="lg:text-xl  py-4 px-2 font-light text-white">
            In today's digital age, the demand for cybersecurity professionals
            spans every sector globally. Unlock Your Future in Cybersecurity
            with these High-Paying Roles
          </h3>
          <img
            class="w-full h-[50%] rounded-tl-3xl pt-10 rounded-tr-3xl"
            src="https://res.cloudinary.com/dzgbjty7c/image/upload/v1710085717/Baudspace%20Cyberlearn/6b084433-27fb-42f6-81ec-112cd680fe36.png"
            alt="office content 1"
          />
        </div>
      </div>
    </section>
  );
}
