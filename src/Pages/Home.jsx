import { Box, Button, Grid, Typography } from "@mui/material";
import { Fragment } from "react";
import pfp from '../Images/pfp.png';
import { theme } from "../Theme";

const Home = () => {
  return (
    <Fragment>
      <Grid container
        display='grid'
        gap='5rem'
        alignItems='center'
        justifyContent='center'
        justifyItems='center'
        sx={{
          gridTemplate: { xs: 'auto auto / auto', md: 'auto / 1fr auto' }
        }}
      >
        <Grid item>
          <Typography component='h2' variant="h4">Hello, World</Typography>
          <Typography component='h1' variant="h3">
            Im, Diego <span style={{ color: theme.palette.primary.main }}>Barrales</span>
          </Typography>
          <Typography variant="body2" my={1} textAlign="justify">
            I am a passionate Mexican American who loves to program.
            I enjoy coding in C++, Python, and Javascript to develop
            simple and complex projects
          </Typography>
          <Box display='flex' gap='1rem'>
            <Button variant="outlined">
              Github
            </Button>
            <Button variant="contained">
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
              maxWidth: {xs: '80vw', md: '530px'}
            }}
          />
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default Home;