import './App.css';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline, Box, Container } from '@mui/material';
import { theme } from './Theme';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Skills from './Pages/Skills';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { Fragment, useEffect } from 'react';
import AnimatedBackground from './Components/AnimatedBackground';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';

function App() {
  useEffect(() => { AOS.init({ duration: 2000 }); }, []);

  return (
    <Fragment>
      <AnimatedBackground />
      <div className="App">
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div style={{
            marginBottom: `${theme.mixins.toolbar.minHeight}px`
          }}>
            <Navbar />
          </div>
          <Box component="main">
            <Container sx={{ my: 2 }}>
              <Home />
              <Skills animation='fade-up' />
              <Projects animation='fade-up' />
              <Contact animation='fade-up' />
            </Container>
          </Box>
          <footer>
            <Footer />
          </footer>
        </ThemeProvider>
      </div>
    </Fragment>
  );
}

export default App;
