import { Button, Container, FormControl, TextField, Typography } from "@mui/material";
import Wrapper from "../Components/Wrapper";
import { theme } from "../Theme";
import { useMobile } from "../Hooks/useMobile";

const Contact = ({ animation }) => {
  const [isMobile] = useMobile();

  return (
    <Wrapper title='Contact' animation={animation}>
      <Container maxWidth={isMobile ? 'lg' : 'sm'} sx={{
        padding: (isMobile ? '2rem': '3rem'),
        backgroundColor: `${theme.palette.primary.light}`,
        borderRadius: '0.25rem 4rem 0.25rem 4rem',
      }}>
        <Typography variant="h6" textAlign='center'>Send me a Message!</Typography>
        <FormControl
          component='form'
          method="POST"
          data-netlify="true"
          name="contact"
          fullWidth >

          <TextField
            id="name"
            label="Name"
            margin="dense"
            name="name"
            required />

          <TextField
            id="email"
            label="Email"
            margin="dense"
            name="email"
            required
            type="email" />

          <TextField
            id="message"
            label="Message"
            margin="dense"
            name="message"
            multiline
            rows={5} />

          <Button
            variant="contained"
            type="submit"
            sx={{
              mt: 3
            }}>
            Submit!
          </Button>

        </FormControl>
      </Container>
    </Wrapper>
  );
}

export default Contact;