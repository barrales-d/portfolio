import { Route, Routes } from 'react-router-dom';
import Outline from './Outline';
import './App.css';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { theme } from './Theme';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path='/' element={<Outline />} >
            <Route index element={<Home />} />
            <Route path='skills' element={<div>skills</div>} />
            <Route path='projects' element={<div>projects</div>} />
            <Route path='art' element={<div>art</div>} />
            <Route path='contact' element={<div>contact</div>} />
          </Route>
        </Routes>
      </ThemeProvider>
    </div >
  );
}

export default App;
