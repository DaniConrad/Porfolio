import React, { useState } from 'react'

const FooterDesktop = () => {

  const [id, setId] = useState('1')

  const handleMouseOver = (e) => {
    console.log();
    if (Number(e.target.id) !== 0) {
      setId(e.target.id)
    }
  }

  return (
    <footer className='py-8 bg-black'>
      <div className="flex justify-center my-3 items-center">
        <div className="navigation flex justify-center items-center">
          <ul className='flex'>
            <li className={`list relative list-none z-10 ${id === '1' ? "active" : ""}`} onMouseOver={handleMouseOver}>
              <a href="mailto:danilagmuller@gmail.com?subject=Consulta%20desde%20la%20web&body=¡Hola%20Danila!%20me%20gustaría%20recibir%20información%20sobre%20" className='relative flex justify-center items-center flex-col text-center w-full' Target="_blank">
                <span className="icon relative block text-center text-2xl">
                  <ion-icon name="mail" id='1' className="bg-lig"/>
                </span>
                <span className="text absolute text-sm tracking-tighter opacity-0 font-medium">Email</span>
              </a>
            </li>
            <li className={`list relative list-none z-10 ${id === '2' ? "active" : ""}`} onMouseOver={handleMouseOver}>
              <a href="https://wa.me/5492923693916?text=¡Hola%20Danila!%20vengo%20de%20la%20web%20para%20consultarte%20por%20" className='relative flex justify-center items-center flex-col text-center w-full' Target="_blank">
                <span className="icon relative block text-center text-2xl">
                  <ion-icon name="logo-whatsapp" id='2' />
                </span>
                <span className="text absolute text-sm font-normal text-xs tracking-tighter opacity-0">Whatsapp</span>
              </a>
            </li>
            <li className={`list relative list-none z-10 ${id === '3' ? "active" : ""}`} onMouseOver={handleMouseOver}>
              <a href="https://www.tiktok.com/@soydanilanodaniela" className='relative flex justify-center items-center flex-col text-center w-full' Target="_blank">
                <span className="icon relative block text-center text-2xl">
                  <ion-icon name="logo-tiktok" id='3' />
                </span>
                <span className="text absolute text-sm font-normal text-xs tracking-tighter opacity-0">TikTok</span>
              </a>
            </li>
            <li className={`list relative list-none z-10 ${id === '4' ? "active" : ""}`} onMouseOver={handleMouseOver}>
              <a href="https://www.instagram.com/soydanilanodaniela/" className='relative flex justify-center items-center flex-col text-center w-full' Target="_blank">
                <span className="icon relative block text-center text-2xl">
                  <ion-icon name="logo-instagram" id='4' />
                </span>
                <span className="text absolute text-sm font-normal text-xs tracking-tighter opacity-0">Instagram</span>
              </a>
            </li>
            <li className={`list relative list-none z-10 ${id === '5' ? "active" : ""}`} onMouseOver={handleMouseOver}>
              <a href="https://www.linkedin.com/in/danila-giselle-muller-41635a174/" className='relative flex justify-center items-center flex-col text-center w-full' Target="_blank">
                <span className="icon relative block text-center text-2xl">
                  <ion-icon name="logo-linkedin" id='5' />
                </span>
                <span className="text absolute text-sm font-normal text-xs tracking-tighter opacity-0">Linkedin</span>
              </a>
            </li>
            <div className="indicator" />
          </ul>
        </div>
      </div>
    </footer>



  )
}

export default FooterDesktop