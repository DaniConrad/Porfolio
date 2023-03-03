import React, { useEffect } from 'react'
import Carousell from './Carousell';
import Header from './Header';
import Comments from './Comments';
import FooterDesktop from '../Footer/FooterDesktop';
import { useResponsive } from '../../hooks/useResponsive';
import FooterMobile from '../Footer/FooterMobile';
import { useLocation } from 'react-router-dom';

const MainPage = ({ onDataChanged }) => {

  const { responsive, checkViewport } = useResponsive()

  const location = useLocation()

  useEffect(() => {
    checkViewport(5000)
  }, [checkViewport])

  useEffect(() => {
    onDataChanged(location.pathname);
  })
  

  return (
    <div className='main_page h-screen'>
      <Header />
      <div className="2xl:container 2xl:mx-auto 2xl:px-0 py-3 px-10">
        <Carousell />
      </div>
      <Comments />
      {responsive ? <FooterMobile /> : <FooterDesktop />} 
    </div>
  )
}

export default MainPage