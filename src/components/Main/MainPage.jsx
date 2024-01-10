// -- Hooks --
import React, { useEffect } from 'react'
import { useResponsive } from '../../hooks/useResponsive';
import { useLocation } from 'react-router-dom';
// -- Components -
import FooterDesktop from '../Footer/FooterDesktop';
import FooterMobile from '../Footer/FooterMobile';
import AboutMe from './AboutMe/AboutMe';
import ServicesSection from './ServicesSection/ServicesSection'
import Header from './Header/Header';
import Comments from './Comments/Comments';

// --

const MainPage = ({ onDataChanged }) => {

  const { responsive, checkViewport } = useResponsive()

  const location = useLocation()

  useEffect(() => {
    checkViewport(1200)
  }, [checkViewport])

  useEffect(() => {
    onDataChanged(location.pathname);
  })
  
  return (
    <div>
      <Header />
      <AboutMe />
      <ServicesSection />
      <Comments />
      {responsive ? <FooterMobile /> : <FooterDesktop />} 
    </div>
  )
}

export default MainPage