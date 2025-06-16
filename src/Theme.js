import { alpha, createTheme } from "@mui/material";

import "./App.css";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#5df4ef",
      // main: "#00bcab",
      // light: "#00e3cc",
      // dark: "#1ec2ab",
    },
    secondary: {
      // main: "#211c23",
      main: "#181161",
      // light: "#261e2b",
    },
    text: {
      primary: "#fcfcfc",
    },
  },
  typography: {
    fontFamily: ["Michroma", "sans-serif"].join(", "),
    allVariants: {
      color: "#fcfcfc",
    },
    h1: {
      fontFamily: ["Montserrat", "Michroma", "sans-serif"].join(", "),
      fontWeight: 800,
    },
    h3: {
      fontFamily: ["Montserrat", "Michroma", "sans-serif"].join(", "),
      fontWeight: 800,
    },
    h4: {
      fontFamily: ["MuseoModerno", "Montserrat", "Michroma", "sans-serif"].join(
        ", "
      ),
      fontWeight: 400,
    },
    h6: {
      fontFamily: ["MuseoModerno", "Montserrat", "Michroma", "sans-serif"].join(
        ", "
      ),
      fontWeight: 400,
    },
  },

  components: {
    MuiToolbar: {
      styleOverrides: {
        root: ({ theme }) => ({
          background: theme.palette.secondary.light,
        }),
      },
      defaultProps: {},
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: ({ theme }) => ({
          background: "transparent",
          border: `${theme.palette.primary.main} 2px solid`,
        }),
      },
    },
    MuiCard: {
      styleOverrides: {
        root: ({ theme }) => ({
          background: theme.palette.secondary.dark,
          borderRadius: "1rem",
        }),
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: ({ theme }) => ({
          background: alpha(theme.palette.common.white, 0.4),
        }),
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: ({ theme }) => ({
          // background: theme.palette.primary.light,
          borderRadius: "1rem",
          padding: '0.25rem 1.25rem',
        }),
        outlined: ({ theme }) => ({
          background: theme.palette.secondary.main,
          borderRadius: "1rem",
          padding: '0.25rem 1.25rem',
        }),
      },
    },
  },
});
