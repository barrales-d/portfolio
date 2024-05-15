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
        <Typography variant="h6">
          Software Developer
        </Typography>
        <Typography variant="h1" sx={{
          fontStyle: "italic",
          fontWeight: 700,
        }}>
          Diego <Typography component="span" variant="h1" sx={{ fontStyle: "inherit", fontWeight: "inherit", color: theme.palette.secondary.dark }}>
            Barrales
          </Typography>
        </Typography>
        <Typography variant="body2" maxWidth="50ch">
          I am a passionate Mexican American who loves to program. I enjoy coding in C++, Python, and Javascript to develop simple and complex projects.
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
      {/* TODO: put face here or in about me section */}
    </header>
  );
}

export default Header;