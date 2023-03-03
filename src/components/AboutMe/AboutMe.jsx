import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const AboutMe = ({ onDataChanged }) => {

  const location = useLocation()

  useEffect(() => {
    onDataChanged(location.pathname);
  })

  const navigate = useNavigate()

  const handleNavigate = () =>{
      navigate(-1)
  }

  return (
    <div>
      AboutMe
    <button onClick={handleNavigate}>clickeame</button>
    </div>
  )
}

export default AboutMe