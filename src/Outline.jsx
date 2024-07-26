import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/navbar/Navbar";
import { Box, Container } from "@mui/material";
import Footer from "./Components/footer/Footer";

const Outline = () => {
  return (
    <Fragment>
      <nav>
        <Navbar />
      </nav>
      <Box component="main" maxHeight='100svh'>
        <Container>
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