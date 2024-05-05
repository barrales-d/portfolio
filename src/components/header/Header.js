import { Box, Button, Typography } from "@mui/material";
import AnchorLink from "react-anchor-link-smooth-scroll";
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
            title="My Resume"
            description="My resume viewed from a modal"
          >
            <Box
              color="black"
            >
              {/* <object ></object> */}
              <Typography variant="body1">
                Will be a view of my resume
              </Typography>
            </Box>
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

    </header>
  );
}

export default Header;