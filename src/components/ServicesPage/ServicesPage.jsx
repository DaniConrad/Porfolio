import React from 'react'

const ServicesPage = () => {

  const items = [
    {name: "Gestión de redes sociales",  icon: "link"},
    {name: "Asesorías",  icon: "easel-oultine"},
    {name: "Moderación",  icon: "link"},
    {name: "Optimización de biografía",  icon: "link"},
    {name: "Presentación de resultados",  icon: "link"},
    {name: "Estrategia de contenido",  icon: "link"},

  ]

  return (
    <div>
      {
        items.map(item => (
          <div  className="" key={Math.random()}>
            <h2 className="cards-title" > {item.name} </h2>
            <ion-icon name="easel-outline" color="light"/>
          </div>
        )
        )
      }
    </div>
  )
}

export default ServicesPage