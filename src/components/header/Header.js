import { Box, Button, Typography, useTheme } from "@mui/material";
import AnchorLink from "react-anchor-link-smooth-scroll";

import './header.css';
import ResumeModal from "../modal/ResumeModal";

const Header = () => {
  const theme = useTheme();
  return (
    <header>
      <Box
        height="90svh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="start"
        padding="4rem"
        color={theme.palette.common.black}
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

        <Box my={2} display="flex" justifyContent="space-evenly" alignItems="center">
          <ResumeModal
            btnText="Resume"
            title="My Resume"
            description="My resume viewed from a modal"
          />
          <AnchorLink href="#AboutMe">
            <Button
              variant="contained"
              sx={{ marginInlineStart: 1 }}
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