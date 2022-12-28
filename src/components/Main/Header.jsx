import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='grid place-items-center main_page_container'>
          <div className="main_container bg-opacity-75 w-4/5 m-5">
            <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                <span className="block text-2xl lg:text-3xl">Guarda tus esfuerzos para tu negocio</span>
                <span className="block text-indigo-600 text-2xl lg:text-3xl">De las redes me encargo yo.</span>
              </h2>
              <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                <div className="inline-flex rounded-md shadow">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 text-sm px-2 lg:px-5 py-3 lg:text-lg"
                  >
                      ¡Comienza ya!
                  </Link>
                </div>
                <div className="ml-3 inline-flex rounded-md shadow">
                  <Link
                    to="/services"
                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50 text-sm px-2 lg:px-5 py-3 lg:text-lg"
                  >
                    Ver más
                  </Link>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Header