import { Container } from "@mui/material";
import { Fragment } from "react";
import Header from "../components/header/Header";

const Home = () => {
    return (
        <Fragment>
            <Header />
            <Container maxWidth="lg">
                <main id="AboutMe">
                    <h1>About me!</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </main>
            </Container>
        </Fragment>
    );
}

export default Home;