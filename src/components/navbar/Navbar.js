import { Link } from "react-router-dom";

import "./navbar.css";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { useState } from "react";

const pages = ["Home", "Skills", "Projects"];

const Navbar = () => {

  const [currentPage, setCurrentPage] = useState(0);

  const toggleActiveLink = (event) => {
    const value = event.currentTarget.getAttribute("data-value");
    setCurrentPage(value);
  }

  return (
    <AppBar component="nav" position="sticky">
      <Toolbar className="navbar">
        <Box className="navbar-item links">
          {
            pages.map((page, idx) => (
              <Link
                data-value={idx}
                to={(idx == 0) ? "/" : "/" + page}
                className={(idx == currentPage) ? "link-item active" : "link-item"}
                key={page}
                onClick={toggleActiveLink}
              >
                {page}
              </Link>
            ))
          }
        </Box>
        <Box className="navbar-item">
          <Typography variant="h5">
            <span className="pop">Diego</span> Barrales
          </Typography>
        </Box>
        <Box className="navbar-item">
          <Button variant="contained">Contact Me</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;