import { Box, Button, Typography } from "@mui/material";
import AnchorLink from "react-anchor-link-smooth-scroll";
import ModalBase from "../modal/ModalBase";

import './header.css';

const Header = () => {
  return (
    <header>
      <Box
        height="70svh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="start"
        padding="4rem"
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
          <ModalBase
            btnText="Resume"
            title="My Resume"
            description="My resume viewed from a modal"
          >
            <Box>
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