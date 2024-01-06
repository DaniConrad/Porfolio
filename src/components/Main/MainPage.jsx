// -- Hooks --
import React, { useEffect } from 'react'
import { useResponsive } from '../../hooks/useResponsive';
import { useLocation } from 'react-router-dom';
// -- Components -
import Header from './Header';
import Comments from './Comments';
import FooterDesktop from '../Footer/FooterDesktop';
import FooterMobile from '../Footer/FooterMobile';
import AboutMe from '../AboutMe/AboutMe'
import ServicesPage from '../ServicesPage/ServicesPage'

// --

const MainPage = ({ onDataChanged }) => {

  const { responsive, checkViewport } = useResponsive()

  const location = useLocation()

  useEffect(() => {
    checkViewport(100)
  }, [checkViewport])

  useEffect(() => {
    onDataChanged(location.pathname);
  })
  

  return (
    <div className='main_page h-screen'>
      <Header />
      <AboutMe />
      <ServicesPage />
      <Comments />
      {responsive ? <FooterMobile /> : <FooterDesktop />} 
    </div>
  )
}

export default MainPage