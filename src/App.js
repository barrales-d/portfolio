// import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import { Fragment } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ThemeContext, useMode } from './theme';
import { projects } from './data/projects';
import ProjectView from './pages/ProjectView';

function App() {
  const [theme, themeValue] = useMode();

  return (
    <Fragment>
      <ThemeContext.Provider value={themeValue}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/skills/*' element={<Skills />} />
            <Route path='/projects' element={<Projects />} />
              {
                projects.map((p, idx) => (
                  <Route path={'/projects/' + idx.toString()} element={<ProjectView project={p} />} key={'project-' + idx.toString()} />
                ))
              }
          </Routes>
          <Footer />
        </ThemeProvider>
      </ThemeContext.Provider>
    </Fragment>
  );
}

export default App;
