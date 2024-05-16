import { Container, Typography } from "@mui/material";
import { Fragment } from "react";
import Header from "../components/header/Header";
import ContactForm from "../components/form/ContactForm";

import '../App.css';
const Home = () => {
  return (
    <Fragment>
      <Header />
      <Container maxWidth="lg" sx={{ textAlign: "center", marginBottom: 4 }}>
        <main>
          <section id="AboutMe">
            <Typography variant="h2" my={3}>About Me</Typography>
            <Typography my={1} textAlign="justify" className="paragraph">
              I live in Los Angeles, California and am graduating from California State University, Fullerton in 2024 as a Computer Science major.
              I Love coffee, drawing, and anime.
              I consider my family to be a big part of who I am because they are one of the reasons I am here at Fullerton, studying computer science; They push me to be the best I can be.
              {/* TODO: add more in about me */}
            </Typography>
          </section>
          <section id="ContactMe">
            <Typography variant="h2" my={3}>Send Me A Message</Typography>
            <ContactForm />
          </section>
        </main>
      </Container>
    </Fragment>
  );
}

export default Home;