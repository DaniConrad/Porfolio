import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './components/Main/MainPage';
import Error404 from './components/Error404/Error404';
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
          <Route path='/contact' element={<Contact onDataChanged={handleDataChange}/>} />

          <Route path='*' element={ <Error404 /> } />
          
       </Routes>
    </div>
    
    
  </BrowserRouter>
  );
}

export default App;
