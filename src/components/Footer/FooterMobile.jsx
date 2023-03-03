import React from 'react'

const FooterMobile = () => {

  return (
    <div className='flex flex-wrap justify-center bg-black py-2'>
        <a href="google.com" className='mx-3'>
           <ion-icon  size="large" name="logo-whatsapp"></ion-icon> 
        </a>
        <a href="https://www.instagram.com/soydanilanodaniela/" className='mx-3'>
            <ion-icon size="large" name="logo-instagram"></ion-icon>
        </a>
        <a href="google.com" className='mx-3'>
            <ion-icon size="large" name="mail-outline"></ion-icon>
        </a>
        <a href="google.com" className='mx-3'>
            <ion-icon size="large" name="logo-behance"></ion-icon>
        </a>
        
        
    </div>
  )
}

export default FooterMobile