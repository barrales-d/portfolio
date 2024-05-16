import { Box, Button, TextField, InputAdornment } from "@mui/material";
import Email from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";

const ContactForm = () => {
  const Form = () => {
    return (
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "50ch" },
        }}
        noValidate
        autoComplete="off"
        display="grid"
        justifyContent="center"
        justifyItems="center"
      >
        <TextField
          id="name"
          label="Name"
          variant="outlined"
          required
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon />
              </InputAdornment>
            ),
          }} />

        <TextField
          id="email"
          label="Email"
          variant="outlined"
          required
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Email />
              </InputAdornment>
            ),
          }} />

        <TextField
          id="message"
          label="Message"
          variant="outlined"
          required
          multiline
          fullWidth
          rows={4} />

        <Button
          variant="contained"
          // TODO: connect with either automatic system or create backend for email submissions 
          sx={{ borderRadius: "100vw" }}
        >
          Send
        </Button>
      </Box>
    );
  }

  return (
    // <Grid container>
    //   <Grid item>
    // TODO: create image for here
    //   </Grid>
    //   <Grid item>
    <Form />
    // </Grid>

    // </Grid>
  );
}

export default ContactForm;
