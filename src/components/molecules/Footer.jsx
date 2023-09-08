import { Link } from "react-router-dom"
import {  EnvelopeSimple, MapPin, Phone } from "@phosphor-icons/react"
import { FooterTexts } from "../data/Data"
import { NavHashLink} from "react-router-hash-link"
import Logo from "../../assets/DarkBG-logo.png"


import { useCallback } from "react"


const Footer = () => {


    const renderIcon = useCallback((element) => {
        switch (element) {
            case 0:
                return <MapPin size={20} color="currentColor" />;
            case 1:
                return <EnvelopeSimple size={20} color="currentColor" />;
            case 2:
                return <Phone size={20} color="currentColor" />;
            default:
                return null; // Handle other cases if needed
        }
    }, []);

    return (
        <footer class="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">

            <div class="mx-auto max-w-screen-xl text-center">
           
  <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-1 lg:px-6">
      <div class="mx-auto max-w-screen-md sm:text-center ">
          <h2 class="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl dark:text-white">Sign up for our newsletter</h2>
          <p class="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400">Stay up to date with announcements and exclusive discounts feel free to sign up with your email.</p>
          <form action="#">
              <div class="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                  <div class=" w-full">
                      <label for="email" class="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
                   
                      <input class="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter your email" type="email" id="email" required=""/>
                  </div>
                  <div>
                      <button type="submit" class="py-3 px-5 w-full text-sm font-medium text-center text-black dark:text-white rounded-lg border-2 dark:border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Subscribe</button>
                  </div>
              </div>
              <div class="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300">We care about the protection of your data. <a href="#" class="font-medium text-primary-600 dark:text-primary-500 hover:underline">Read our Privacy Policy</a>.</div>
          </form>
      </div>
  </div>

                <a href="#" class="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white">
                   
                  <img src={Logo} alt="" className="w-30 h-20" />
                </a>

                <ul class="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">

                    {
                        FooterTexts.contacts.names.map((name, index) => (
                            <li className="mr-4 hover:underline md:mr-6 " key={index}>

                                <h1 className="">{name.name}</h1>
                            </li>
                        ))
                    }
                </ul>
                {/* <ul class="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">

                    {
                        FooterTexts.quickLinks.links.map((link, index) => (
                            <li className="mr-4 hover:underline md:mr-6 " key={index}>
                                <NavHashLink to={link.url} className="transition-all duration-200 hover:text-red-500">{link.name}</NavHashLink>
                            </li>
                        ))
                    }
                </ul> */}
                <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="#" class="hover:underline">Baudspace™</a>. All Rights Reserved.</span>
            </div>
        </footer>
    )
}


export default Footer