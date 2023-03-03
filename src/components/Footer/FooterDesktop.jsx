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
      <a href="#" className='relative flex justify-center items-center flex-col text-center w-full'>
        <span className="icon relative block text-center text-2xl">
          <ion-icon name="home-outline" id='1'/>
        </span>
        <span className="text absolute font-normal text-xs tracking-tighter opacity-0">Home</span>
      </a>
    </li>
    <li className={`list relative list-none z-10 ${id === '2' ? "active" : ""}`} onMouseOver={handleMouseOver}>
      <a href="#" className='relative flex justify-center items-center flex-col text-center w-full'>
        <span className="icon relative block text-center text-2xl">
          <ion-icon name="chatbubble-outline" id='2'/>
        </span>
        <span className="text absolute font-normal text-xs tracking-tighter opacity-0">Mensaje</span>
      </a>
    </li>
    <li className={`list relative list-none z-10 ${id === '3' ? "active" : ""}`} onMouseOver={handleMouseOver}>
      <a href="#" className='relative flex justify-center items-center flex-col text-center w-full'>
        <span className="icon relative block text-center text-2xl">
          <ion-icon name="qr-code-outline" id='3'/>
        </span>
        <span className="text absolute font-normal text-xs tracking-tighter opacity-0">Qr</span>
      </a>
    </li>
    <li className={`list relative list-none z-10 ${id === '4' ? "active" : ""}`} onMouseOver={handleMouseOver}>
      <a href="#" className='relative flex justify-center items-center flex-col text-center w-full'>
        <span className="icon relative block text-center text-2xl">
          <ion-icon name="camera-outline" id='4'/>
        </span>
        <span className="text absolute font-normal text-xs tracking-tighter opacity-0">Camara</span>
      </a>
    </li>
    <li className={`list relative list-none z-10 ${id === '5' ? "active" : ""}`} onMouseOver={handleMouseOver}>
      <a href="#" className='relative flex justify-center items-center flex-col text-center w-full'>
        <span className="icon relative block text-center text-2xl">
          <ion-icon name="cart-outline" id='5'/>
        </span>
        <span className="text absolute font-normal text-xs tracking-tighter opacity-0">Compras</span>
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