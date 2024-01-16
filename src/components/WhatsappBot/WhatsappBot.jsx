import React from 'react'

const WhatsappBot = () => {
  return (
    <div className='fixed bottom-9 right-9 hover:rotate-y-180 '>
      <a href="https://wa.me/+5492923659077?text=¡Hola%20Danila!,%20vengo%20de%20la%20web%20para%20consultarte%20por%20" target='blank_'>
      <ion-icon src="./icons/whatsapp-color-icon.svg"  class="text-8xl whatsapp_bot hover:flip-and-move"/>
      </a>
    </div>
  )
}

export default WhatsappBot