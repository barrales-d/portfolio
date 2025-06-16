import { Box, Button, Grid, Typography } from "@mui/material";
import { Fragment } from "react";
import pfp from '../Images/pfp.png';
import { theme } from "../Theme";

const Home = () => {
  return (
    <Fragment>
      <Grid container
        component='section'
        id="Home"
        display='grid'
        gap='5rem'
        alignItems='center'
        justifyContent='center'
        justifyItems='center'
        sx={{
          gridTemplate: { xs: 'auto auto / auto', md: 'auto / 1fr auto' },
        }}
      >
        <Grid item sx={{
          /* From https://css.glass */
          // background: rgba(255, 255, 255, 0.11);
          // border-radius: 16px;
          // box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
          // backdrop-filter: blur(5.3px);
          // -webkit-backdrop-filter: blur(5.3px);
          // border: 1px solid rgba(255, 255, 255, 0.25);
          background: "rgba(255, 255, 255, 0.11)",
          borderRadius: "0.25rem 4rem 0.25rem 4rem",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(5.3px)",
          WebkitBackdropFilter: "blur(5.3px)",
          border: "2px solid " + theme.palette.secondary.dark,
          padding: "3rem 2rem"
        }}>
          <Typography component='h2' variant="h4">Hello, World</Typography>
          <Typography component='h1' variant="h3">
            I&#39;m Diego <span style={{ color: theme.palette.primary.main }}>Barrales</span>
          </Typography>
          <Typography variant="body2" my={1} textAlign="justify">
            A passionate Mexican American who loves to program.
            I enjoy coding in C++, Python, and Javascript.
          </Typography>
          <Box display='flex' gap='1rem'>
            <Button variant="outlined" href="https://github.com/barrales-d" target="_blank" rel="noopener">
              Github
            </Button>
            <Button variant="contained" href="/DiegoBarralesResume.pdf">
              Resume
            </Button>
          </Box>
        </Grid>
        <Grid item>
          <Box
            component="img"
            alt="Diego Barrales Profile Image"
            src={pfp}
            sx={{
              maxWidth: { xs: '80vw', md: '530px' },
              border: "2px solid " + theme.palette.secondary.dark,
              borderRadius: "18rem 0.25rem 18rem 0.25rem",
            }}
            />
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default Home;
