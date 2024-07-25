import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/navbar/Navbar";
import { Container } from "@mui/material";

const Outline = () => {
  return (
    <Fragment>
      <nav>
        <Navbar />
      </nav>
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
      <footer>footer</footer>
    </Fragment>
  );
}

export default Outline;