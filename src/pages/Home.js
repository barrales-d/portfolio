import { Container, Typography } from "@mui/material";
import { Fragment } from "react";
import Header from "../components/header/Header";
import ContactForm from "../components/form/ContactForm";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <Container maxWidth="lg" sx={{ textAlign: "center", marginBottom: 4}}>
        <main>
          <section id="AboutMe">
            <Typography variant="h2" my={3}>About me!</Typography>
            <Typography my={1}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
          </section>
          <section id="ContactMe">
            <Typography variant="h2" my={3}>Connect With Me!</Typography>
            <ContactForm />
          </section>
        </main>
      </Container>
    </Fragment>
  );
}

export default Home;