import { Fade } from "react-awesome-reveal";

export default function Program() {
  return (

    <section class="bg-white dark:bg-gray-900 pt-14"  id="program">
    <Fade>
    <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Is this Learning Path for me?</h2>
          <p class="mb-4">This program is inclusive and suitable for individuals, particularly those eager to acquire knowledge in cybersecurity and
            information security. Irrespective of whether you lack any prior IT or computer system knowledge, this program is tailored to your needs. Moreover, those already established in IT careers can significantly benefit from the CyberLearn training program. System administrators, network administrators, database administrators, IT analysts, web application developers, and professionals in IT and web development domains should contemplate how this program can fortify their systems, networks, and applications.

            <br /> <br />  The CyberLearn Learning Path is explicitly designed for individuals with limited to no background in cybersecurity.
            Its purpose is to provide you with a solid foundation to commence your journey in this realm. Whether you aspire to be a cybersecurity expert or simply aim to enhance your understanding of online security, this learning path serves as the ideal entry point for:

            <br /> <br /> IT professionals and other cybersecurity beginners venturing into or contemplating a career in cybersecurity.
            Current cybersecurity professionals who recognize gaps in their core cybersecurity comprehension.
            Professionals from diverse industries in need of cybersecurity knowledge.
            This learning path bridges the knowledge gap and primes you for a successful venture into the world of cybersecurity.</p>
        </div>
        <div class="grid grid-cols-2 gap-4 mt-8">
          <img class="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1" />
          <img class="mt-4 w-full lg:mt-56 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2" />
        </div>
      </div>
    </Fade>
    </section>
  )
}
