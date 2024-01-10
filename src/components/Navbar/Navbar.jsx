import React from 'react'
import { Disclosure} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from "react-router-dom"
import { Button, scroller } from 'react-scroll';

const Navbar = () => {

    const sampleLocation = useLocation();
    const navigate = useNavigate();

    // Used to highlight the current item on Navbar, it changes the current value 
    const navigation = [
        { name: 'Home', href: '/', current: false },
        { name: 'Sobre mí', href: 'about', current: false },
        { name: 'Servicios', href: 'services', current: false },
        { name: 'Portfolio', href: 'https://erfgds.my.canva.site/portfolio-2024-danila-muller-community-manager', current: false },
        { name: 'Contacto', href: '/contact', current: false },
        { name: 'Blog', href: 'https://soydanilanodaniela.blogspot.com', current: false },
    ]

    navigation.map(locationRef => {
        if(locationRef.href === sampleLocation.pathname) locationRef.current = true;
        return locationRef;
      });

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }
    // --

    // It's used to select if need to navigate to another link or only in the currrent page.

    const hrefNavigator = (href) => {
      if (href.startsWith("/")) {
        navigate(href);
        return
      }
      // Used to go to extenal webpage
      if (href.startsWith("h")){
        window.open(href, '_blank');
        return
      }
      scroller.scrollTo(href, {
        duration: 800,
        smooth: 'easeInOutQuart',
        // Here can change the scroll to center the elements 
        offset: -window.innerHeight / 7 
    });
      
    }
    // --

  return (
    <Disclosure as="nav" className="bg-translucent bg-opacity-75 sticky top-0">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Button onClick={()=>hrefNavigator(item.href)} smooth={true} duration={800} >
                        <div
                            key={item.name}
                            className={classNames(
                                item.current ? 'navButtonBack text-white' : 'text-gray-300 hover:bg-gray-300 hover:text-black',
                                'px-3 py-2 rounded-md text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                        >
                            {item.name}
                        </div>
                      </Button>   
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Link to={item.href}>
                    <Disclosure.Button
                        key={item.name}
                        as="a"
                        className={classNames(
                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'block px-3 py-2 rounded-md text-base font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                        >
                        {item.name}
                    </Disclosure.Button>
                </Link>
                
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Navbar