import { Box, Container } from "@mui/material";

const Footer = () => {
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
          <h5>Diego Barrales &copy; 2024</h5>
        </Container>
      </Box>
    </footer>
  );
}

export default Footer;