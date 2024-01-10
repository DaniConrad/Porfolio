import React from 'react'

const FooterMobile = () => {

  return (
    <div className='flex flex-wrap justify-center bg-black py-2'>
        <a href="mailto:soydanilanodaniela@gmail.com?subject=Consulta%20desde%20la%20web&body=¡Hola%20Danila!%20me%20gustaría%20recibir%20información%20sobre%20"  className='mx-3' Target='_blank'>
           <ion-icon  size="large" name="mail-outline" color="sdnd" />
        </a>
        <a href="https://wa.me/+5492923659077?text=¡Hola%20Danila!,%20vengo%20de%20la%20web%20para%20consultarte%20por%20" className='mx-3' Target='_blank'>
            <ion-icon size="large" name="logo-whatsapp" color="sdnd" />
        </a>
        <a href="https://www.tiktok.com/@soydanilanodaniela" className='mx-3' Target='_blank'>
            <ion-icon size="large" name="logo-tiktok" color="sdnd" />
        </a>
        <a href="https://www.instagram.com/soydanilanodaniela/" className='mx-3' Target='_blank'>
            <ion-icon size="large" name="logo-instagram" color="sdnd" />
        </a>
        <a href="https://www.linkedin.com/in/danila-giselle-muller-41635a174/" className='mx-3' Target='_blank'>
            <ion-icon size="large" name="logo-linkedin" color="sdnd" />
        </a>
        <a href="https://www.behance.net/danilamuller" className='mx-3' Target='_blank'>
            <ion-icon size="large" name="logo-behance" color="sdnd" />
        </a>
        
    </div>
  )
}

export default FooterMobile