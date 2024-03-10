import { Fade } from "react-awesome-reveal";

export default function Program() {
  return (
    <section class="bg-white dark:bg-gray-900 pt-14" id="program">
      <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Is this Learning Path for me?
          </h2>
          <Fade>
            <p class="mb-4">
              "Empower your cybersecurity journey with Baudspace Cyberlearn as
              your trusted guide. Gain exclusive access to expert-led training
              sessions, where you'll master critical skills in Network Security,
              Incident Response, Vulnerability Scanning, and more. Elevate your
              expertise and propel your career forward with our comprehensive
              learning platform."
            </p>
          </Fade>{" "}
        </div>

        <div class="grid grid-cols-2 gap-4 mt-8">
          <img
            class="w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
            alt="office content 1"
          />
          <img
            class="mt-4 w-full lg:mt-56 rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
            alt="office content 2"
          />
        </div>
      </div>
    </section>
  );
}
