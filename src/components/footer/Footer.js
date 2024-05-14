import { Box, Container, Grid, IconButton, Typography } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {

  const Socials = () => {
    return (
      <Grid container spacing={0.5} alignItems="center" justifyContent="center" textAlign="center">
        <Grid item xs={3} md={3}>
          <IconButton size="small" href="https://github.com/barrales-d" target="_blank">
            <GitHubIcon />
          </IconButton>
        </Grid>
        <Grid item xs={3} md={3}>
          <IconButton size="small" href="https://www.linkedin.com/in/diego-barrales-514aa61bb/" target="_blank">
            <LinkedInIcon />
          </IconButton>
        </Grid>
        <Grid item xs={3} md={3}>
          <IconButton size="small" href="https://www.instagram.com/diegobarrales._/" target="_blank">
            <InstagramIcon />
          </IconButton>
        </Grid>
      </Grid>
    );
  }

  return (
    <footer>
      <Box sx={{
        py: 2,
        px: 2,
        mt: 4,
        opacity: "0.8",
        bgcolor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[400]
            : theme.palette.grey[900],
      }}>
        <Container maxWidth="lg">
          <Grid container spacing={0} rowSpacing={5} alignItems="center" justifyContent="center" textAlign="center">
            <Grid item xs={12} sm={3} textAlign="start">
              <Typography variant="body2">
                Do not hesitate to contact me to discuss possible work or learn more about my work.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="body2">
                &copy; {new Date().getFullYear()} created by Diego Barrales
              </Typography>
            </Grid>
            <Grid item xs={12} sm={5}>
              <Grid container spacing={2} rowSpacing={5} alignItems="baseline" textAlign="center">
                <Grid item xs={12} md={6}>
                  <Typography variant="body2" sx={{ borderBottom: "0.1rem dotted" }}>Email</Typography>
                  <Typography variant="body2">dbarrales@gmail.com</Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="body2" sx={{ borderBottom: "0.1rem dotted" }}>Follow</Typography>
                  <Socials />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
}

export default Footer;