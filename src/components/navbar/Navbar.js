import { Link } from "react-router-dom";

import "./navbar.css";
import { AppBar, Box, Button, Container, List, ListItem, Toolbar, Typography } from "@mui/material";
import { useState } from "react";

const pages = ["Home", "Skills", "Projects"];

const Navbar = () => {

  const [currentPage, setCurrentPage] = useState(0);

  const toggleActiveLink = (event) => {
    const value = event.currentTarget.getAttribute("data-value");
    setCurrentPage(parseInt(value));
  }

  return (
    <AppBar component="nav" position="sticky" elevation={3}>
      <Container maxWidth="lg">
        <Toolbar className="navbar">
          <List sx={{
            display: { xs: "none", md: "flex" }
          }}>
            {
              pages.map((page, idx) => (
                <ListItem>
                  <Link
                    data-value={idx}
                    to={(idx === 0) ? "/" : "/" + page}
                    className={(idx === currentPage) ? "link-item active" : "link-item"}
                    key={page}
                    onClick={toggleActiveLink}
                  >
                    <Typography
                      sx={{
                        color: "inherit",
                      }}
                    >
                      {page}
                    </Typography>
                  </Link>
                </ListItem>
              ))
            }
          </List>
          <Box className="nav-title">
            <Typography variant="h5">
              <span className="pop">Diego</span> Barrales
            </Typography>
          </Box>
          <Box>
            <Button variant="contained">Contact Me</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar >
  );
}

export default Navbar;