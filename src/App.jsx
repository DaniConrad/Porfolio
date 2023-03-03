import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './components/Main/MainPage';
import Portfolio from './components/Portfolio/Portfolio';
import ServicesPage from './components/ServicesPage/ServicesPage';
import Error404 from './components/Error404/Error404';
import AboutMe from './components/AboutMe/AboutMe';
import Contact from './components/Contact/Contact';
import { useState } from 'react';
import Navbar from './components/Navbar/Navbar'

function App() {

  const [data, setData] = useState('');
  
  const handleDataChange = (newData) => {
    setData(newData.slice(1));
  };

  return (
  <BrowserRouter>
    <div className={`App ${data === '' ? 'home' : data}`} >
      <Navbar />
      <Routes>
          <Route path='/' element={<MainPage onDataChanged={handleDataChange}/>}  />
          <Route path='/portfolio' element={<Portfolio onDataChanged={handleDataChange}/>} />
          <Route path='/services' element={<ServicesPage onDataChanged={handleDataChange}/>} />
          <Route path='/about' element={<AboutMe onDataChanged={handleDataChange}/>} />
          <Route path='/contact' element={<Contact onDataChanged={handleDataChange}/>} />

          <Route path='*' element={ <Error404 /> } />
          
       </Routes>
    </div>
    
    
  </BrowserRouter>
  );
}

export default App;
