import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './components/Main/MainPage';
import Portfolio from './components/Portfolio/Portfolio';
import ServicesPage from './components/ServicesPage/ServicesPage';
import Error404 from './components/Error404/Error404';
import AboutMe from './components/AboutMe/AboutMe';
import Contact from './components/Contact/Contact';

function App() {
  return (
  <BrowserRouter>
    <div className="App">
      <Routes>
          <Route path='/' element={<MainPage />}  />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/services' element={<ServicesPage />} />
          <Route path='/about' element={<AboutMe />} />
          <Route path='/contact' element={<Contact />} />

          <Route path='*' element={ <Error404 /> } />
       </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
