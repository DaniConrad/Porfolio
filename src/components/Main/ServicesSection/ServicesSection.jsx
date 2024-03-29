import React from 'react'

const ServicesPage = () => {

  const items = [
    {name: "Gestión de redes sociales",  icon: "./icons/manage.svg"},
    {name: "Asesorías personalizadas",  icon: "./icons/advisory.svg"},
    {name: "Moderación",  icon: "./icons/moderation.svg"},
    {name: "Optimización de biografía",  icon: "./icons/biography.svg"},
    {name: "Presentación de resultados",  icon: "./icons/results.svg"},
    {name: "Estrategia de contenido",  icon: "./icons/strategy.svg"},

  ]

  return (
    <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:p-10' id='services'>
      {
        items.map(item => (
          <div  className="flex flex-col items-center sm:m-1 my-5 hover:scale-125 transition duration-500" key={Math.random()}>
            <img src={item.icon} alt={item.name} className='w-2/4 m-1 fill-white '/>
            <h2 className="text-xl text-white m-1 service_title"> {item.name} </h2>
            
          </div>
        )
        )
      }
    </div>
  )
}

export default ServicesPage