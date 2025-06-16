import { Button, Container, FormControl, TextField, Typography } from "@mui/material";
import Wrapper from "../Components/Wrapper";
import { useMobile } from "../Hooks/useMobile";
import { theme } from "../Theme";

import SendIcon from '@mui/icons-material/SendRounded';

const Contact = ({ animation }) => {
  const [isMobile] = useMobile();

  return (
    <Wrapper title='Contact' animation={animation}>
      <Container maxWidth={isMobile ? 'lg' : 'sm'} sx={{
        background: "rgba(255, 255, 255, 0.11)",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(5.3px)",
        WebkitBackdropFilter: "blur(5.3px)",
        // border: "1px solid rgba(255, 255, 255, 0.25)",
        border: "2px solid " + theme.palette.secondary.dark,
        padding: (isMobile ? '2rem' : '3rem'),
        borderRadius: '0.25rem 4rem 0.25rem 4rem',
      }}>
        <Typography variant="h6" textAlign='center'>Send me a Message!</Typography>
        <FormControl
          component='form'
          method="POST"
          data-netlify="true"
          name="contact"
          fullWidth >

          <input type="hidden" name="form-name" value='contact' />

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
            endIcon={<SendIcon />}
            sx={{
              mt: 3
            }}>
            Send
          </Button>

        </FormControl>
      </Container>
    </Wrapper>
  );
}

export default Contact;