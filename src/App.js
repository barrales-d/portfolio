import './App.css';
import { Fragment } from 'react';
import Navbar from './components/navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Projects from './pages/Projects';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
      <footer>
        <h5>Diego Barrales &copy; 2024</h5>
      </footer>
    </Fragment>
  );
}

export default App;
