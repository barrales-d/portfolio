import { Link } from "react-router-dom";

import "./navbar.css";
import { AppBar, Box, Button, Grid, IconButton, List, ListItem, Toolbar, Typography } from "@mui/material";
import { useContext, useState } from "react";
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { ThemeContext, colorpalette } from "../../theme";
import { HashLink } from "react-router-hash-link";

const pages = ["Home", "Skills", "Projects"];

const Navbar = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  const colors = colorpalette(isDarkMode ? "dark" : "light");

  const toggleActiveLink = (event) => {
    const value = event.currentTarget.getAttribute("data-value");
    setCurrentPage(parseInt(value));
  }

  return (
    <AppBar component="nav" position="sticky" elevation={5}>
      <Box bgcolor={colors.teal[700]} color={colors.grey[100]}>
        <Toolbar>
          <Grid container justifyContent="space-between" alignItems="center" textAlign="center">
            <Grid item textAlign="start" sx={{
              display: { md: 'block', xs: 'none' }
            }}>
              <Typography variant="h6" sx={{ flexGrow: 1 }}>
                <Box component="span" sx={{
                  color: colors.orange[400],
                }}>Diego </Box>
                Barrales</Typography>
            </Grid>

            <Grid item xs={12} md={4}>
              <List sx={{ display: "flex", justifyContent: "space-evenly" }}>
                {
                  pages.map((page, idx) => (
                    <ListItem
                      key={page}
                      className="link-item"
                      sx={{
                        justifyContent: "center"
                      }}
                    >
                      <Link data-value={idx} onClick={toggleActiveLink} to={(idx === 0) ? "/" : `/${page.toLowerCase()}`}>
                        <Typography sx={{
                          cursor: "pointer",
                          color:
                            currentPage === idx
                              ? colors.orange[400]
                              : colors.grey[100],
                          textDecoration: "underline solid 2px",
                          fontWeight:
                            currentPage === idx
                              ? "700"
                              : "500",
                          "&:hover": {
                            color: colors.orange[400],
                          },
                        }}>
                          {page}
                        </Typography>
                      </Link>
                    </ListItem>
                  ))
                }
              </List>
            </Grid>

            <Grid item md={2}
              sx={{
                display: { md: 'block', xs: 'none' }
              }}>
              <HashLink to="/#ContactMe" smooth>
                <Button data-value='0' onClick={toggleActiveLink} variant="contained">Contact Me</Button>
              </HashLink>
              <IconButton onClick={toggleTheme}>
                {
                  isDarkMode ?
                    (<Brightness7Icon />) :
                    (<Brightness4Icon />)
                }
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </Box>
    </AppBar>
  );
}

export default Navbar;