import React from 'react'

const AboutMe = () => {

  return (
    <div className='grid place-items-center about_me_container' id='about'>
      <div className='flex sm:w-10/12 flex-col sm:flex-row aboutme rounded-xl items-center'>
        <div className='flex flex-col justify-center sm:w-8/12 sm:mb-10 sm:ml-10 mx-5'>
          <h3 className='about_me_title sm:text-9xl text-7xl tracking-tighter mt-10'>
            Sobre mi
          </h3>
          <p className='sm:w-4/6 font-bold sm:text-xl'>
            Soy Danila, Community & Social Media Manager. Mi marca personal se llama SoyDanilaNoDaniela.

            Me desempeño como CM hace 2 años, principalmente en Redes Sociales como Facebook, Instagram & TikTok, pero sigo capacitandome día a día para mejorar.
            Tengo capacitaciones en herramientas como Canva y Capcut, tambien como Growth Marketing , pauta publicitaria, entre otros.
          </p>
        </div>
        <div className='flex justify-center w-8/12 h-5/6 m-2'>
          <img src="./img/aboutme.png" alt="" className='sm:my-8 rounded-full' />
        </div>
      </div>
    </div>
  )
}

export default AboutMe