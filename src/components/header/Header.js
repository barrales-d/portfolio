import { Box, Button, Container, Typography } from "@mui/material";
import AnchorLink from "react-anchor-link-smooth-scroll";
import TestModal from "../modal/TestModal";
import ModalBase from "../modal/ModalBase";

const Header = () => {
  return (
    <header style={{ backgroundColor: "#202020" }}>
      <Box
        height="70svh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="start"
        padding="4rem"
        color="whitesmoke"
      >
        <Typography variant="h5">
          Software Developer,
        </Typography>
        <Typography variant="h1">
          Diego Barrales
        </Typography>
        <Typography variant="body2">
          lorem dare aomdods
        </Typography>

        <Box display="flex" justifyContent="space-evenly">
          {/* <Button
            color="secondary"
            variant="outlined"
            sx={{ marginInlineEnd: "0.5rem" }}
          >
            Resume
          </Button> */}
          <ModalBase
            btnText="Resume"
            title="Resume modal"
            description="My resume viewed from a modal"
          >
            <Container maxWidth="sm" sx={{ backgroundColor: "#202020", width:"100vw", aspectRatio:"1" }}>
              <Box
                color="whitesmoke"
              >
                {/* <object ></object> */}
                <Typography variant="h3">
                  Will be a view of my resume
                </Typography>
              </Box>
            </Container>
          </ModalBase>
          <AnchorLink href="#AboutMe">
            <Button
              variant="contained"
              sx={{ marginInlineStart: "0.5rem" }}
            >
              Learn more
            </Button>
          </AnchorLink>
        </Box>
      </Box>

      <TestModal />
    </header>
  );
}

export default Header;