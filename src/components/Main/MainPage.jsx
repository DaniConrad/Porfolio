import React from 'react'
import Navbar from '../Navbar/Navbar'
import Carousell from './Carousell';
import Header from './Header';
import Comments from './Comments';

const MainPage = () => {
  return (
    <div className='main_page h-screen'>
      <Navbar />
      <Header />
      <div className="2xl:container 2xl:mx-auto 2xl:px-0 py-3 px-10">
        <Carousell />
      </div>
      <Comments />
      
    </div>
  )
}

export default MainPage