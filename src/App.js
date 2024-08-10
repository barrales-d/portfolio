import './App.css';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline, Box, Container } from '@mui/material';
import { theme } from './Theme';
import Navbar  from './Components/Navbar';
import Footer  from './Components/Footer';
import Home from './Pages/Home';
import Skills from './Pages/Skills';

function App() {
  return (
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
            <Skills />
            <div>projects</div>
            <div>art</div>
            <div>contact</div>
          </Container>
        </Box>
        <footer>
          <Footer />
        </footer>
      </ThemeProvider>
    </div >
  );
}

export default App;
