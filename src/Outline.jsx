import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { Box, Container } from "@mui/material";
import Footer from "./Components/Footer";

const Outline = () => {
  return (
    <Fragment>
      <nav>
        <Navbar />
      </nav>
      <Box component="main">
        <Container sx={{my: 2}}>
          <Outlet />
        </Container>
      </Box>
      <footer>
        <Footer />
      </footer>
    </Fragment>
  );
}

export default Outline;