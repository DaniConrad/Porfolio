import React from 'react'

const AboutMe = () => {

  return (

    <div className='grid place-items-center about_me_container' id='about'>
      <div className='flex w-10/12 aboutme rounded-xl'>
        <div className='flex flex-col  justify-center w-8/12 mb-10 ml-10'>
          <h3 className='about_me_title text-9xl tracking-tighter mt-10'>
            Sobre mi
          </h3>
          <p className='w-4/6 font-bold text-xl'>
            Soy Danila, Community & Social Media Manager. Mi marca personal se llama SoyDanilaNoDaniela.

            Me desempeño como CM hace 2 años, principalmente en Redes Sociales como Facebook, Instagram & TikTok, pero sigo capacitandome día a día para mejorar.
            Tengo capacitaciones en herramientas como Canva y Capcut, tambien como Growth Marketing , pauta publicitaria, entre otros.
          </p>
        </div>


        <div className='flex justify-center w-8/12 h-5/6 '>
          {/* <svg viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="image" x="160" y="160" patternUnits="userSpaceOnUse" width="300" height="300">
                <image href="./img/aboutme.png" x="0" y="0" width="300" height="300" />
              </pattern>
            </defs>
            <path
              fill="url(#image)"
              d="M42.8,-50.4C56.5,-39.4,69.6,-27,73.1,-12.1C76.6,2.7,70.5,20,61.3,34.9C52.1,49.8,39.7,62.4,24.8,67.7C9.8,73,-7.6,71,-22.9,64.7C-38.2,58.4,-51.4,47.8,-62.5,33.6C-73.6,19.4,-82.8,1.6,-81.1,-15.5C-79.5,-32.5,-67.1,-48.9,-51.8,-59.6C-36.5,-70.3,-18.2,-75.3,-1.9,-73.1C14.5,-70.9,29,-61.4,42.8,-50.4Z"
              transform="translate(150 150)"
            />
          </svg> */}

          <img src="./img/aboutme.png" alt="" className='my-8 rounded-full' />
        </div>

      </div>

    </div>


  )
}

export default AboutMe

// .parent {
//   display: grid;
//   grid-template-columns: repeat(6, 1fr);
//   grid-template-rows: repeat(5, 1fr);
//   grid-column-gap: 0px;
//   grid-row-gap: 0px;
//   }