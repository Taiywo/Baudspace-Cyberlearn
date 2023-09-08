import { useState, useEffect } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { NavLinks } from "../data/Data"
import { NavHashLink} from "react-router-hash-link"
import Logo from "../../assets/DarkBG-logo.png"


export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const [navBarColor, setNavBarColor] = useState(false)

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setNavBarColor(true) : setNavBarColor(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Adds smooth scrolling animation
    });
};



  return (

    <header className="absolute  bg-grey inset-x-0 top-0 z-50">
      <nav className={`flex w-full fixed justify-between md:items-center ${navBarColor ? "bg-gray-900 opacity-100 " : "dark:bg-blue-950 dark:opacity-90"} p-6 lg:px-8`} aria-label="Global">
        <div className="flex lg:flex-1 ">
          <NavHashLink onClick={scrollToTop} className='-m-1.5 p-1.5'>
            <img
              className="h-12  w-44"
              src={Logo}
              alt=""
            />
          </NavHashLink>
          

        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-12">
          {
            NavLinks.map((navlink, index) => (
              <li className="justify-start items-center gap-2 inline-flex" key={index}>
                <NavHashLink to={navlink.url}  activeClassName="selected" activeStyle= {{color:"yellow",textDecoration:"underline" }} className="text-center dark:text-white  text-gray-900 text-base font-medium leading-tight" >{navlink.name}</NavHashLink>
              </li>
            ))
          }

        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end ">
          <a href=" " className="text-sm  font-semibold leading-6 text-white hover:text-gray-400 ">
            Get Start<span aria-hidden="true" className='pl-5'>&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden " open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className={`fixed inset-y-0 right-0 z-50 w-full overflow-y-auto duration-500 ease-out delay-300 transform transition-transform ${mobileMenuOpen? 'translate-x-0' : '-translate-x-full'} bg-white dark:bg-zinc-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 `}>
          <div className="flex items-center justify-between">
            <NavHashLink smooth to={'/#top'}  onClick={() => setMobileMenuOpen(false)} className="-m-1.5 p-1.5">
              <img
                className="h-8 w-auto"
                src={Logo}
                alt=""
              />
            </NavHashLink>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {
                  NavLinks.map((navlink, index) => (
                    <li className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7   text-gray-900  " onClick={() => setMobileMenuOpen(false)}
                      key={index}>
                      <NavHashLink to={navlink.url} >
                        <div className=" text-black dark:text-white text-base  hover:text-gray-400 font-medium leading-tight">{navlink.name}</div>
                        </NavHashLink>
                    </li>
                  ))
                }
              </div>
              <div className="py-6" onClick={() => setMobileMenuOpen(false)}>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base  font-semibold leading-7 dark:text-white text-gray-900 hover:bg-gray-600" 
                >
                  Get Started <span aria-hidden="true" className='pl-5'>&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>

  )
}