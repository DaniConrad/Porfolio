import React from 'react'
import { Disclosure} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom"

const Navbar = () => {

    const sampleLocation = useLocation();

    const navigation = [
        { name: 'Home', href: '/', current: false },
        { name: 'Servicios', href: '/services', current: false },
        { name: 'Sobre Mí', href: '/about', current: false },
        { name: 'Portfolio', href: '/portfolio', current: false },
        { name: 'Contacto', href: '/contact', current: false }
    ]

    navigation.map(locationRef => {
        if(locationRef.href === sampleLocation.pathname) locationRef.current = true;
        return locationRef;
      });

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

  return (
    <Disclosure as="nav" className="bg-gray-800 bg-opacity-75 sticky top-0">
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
                      <Link to={item.href}>
                        <div
                            key={item.name}
                            className={classNames(
                                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                'px-3 py-2 rounded-md text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                        >
                            {item.name}
                        </div>
                      </Link>   
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