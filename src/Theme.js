import { createTheme } from '@mui/material';

import './App.css';

// const TINY_GAP = '0.25rem';
// const SMALL_GAP = '0.5rem';
// const MEDIUM_GAP = '1rem';
// const LARGE_GAP = '1.5rem';


export const theme = createTheme({
  palette: {
    primary: {
      main: '#0AC4A2',
      light: "#CFFCF4",
      dark: "#056150",
    },
    text: {
      primary: "#1A1A1A",
    }
  },
  typography: {
    fontFamily: ["Michroma", "sans-serif"].join(', '),
    allVariants: {
      color: "#1A1A1A"
    },
    // subtitle: "MuseoModerno", 400
    // title: "Montserrat", 800

    h1: {
      fontFamily: ["Montserrat", "Michroma", "sans-serif"].join(', '),
      fontWeight: 800,
    },
    h3: {
      fontFamily: ["Montserrat", "Michroma", "sans-serif"].join(', '),
      fontWeight: 800,
    },
    h4: {
      fontFamily: ["MuseoModerno", "Montserrat", "Michroma", "sans-serif"].join(', '),
      fontWeight: 400,
    }
  },

  components: {
    MuiToolbar: {
      styleOverrides: {
        root: ({ theme }) => ({
          background: theme.palette.primary.light,
          color: theme.palette.text.primary
        })
      },
      defaultProps: {
      }
    }
  }
});