import { Backdrop, Box, Button, Fade, Modal, Typography, bottomNavigationActionClasses } from "@mui/material";
import { Fragment, useState } from "react";
import '../header/header.css';

const ResumeModal = ({
  btnText,
  title,
  description,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <Fragment>
      <Button
        variant="outlined"
        onClick={openModal}>
        {btnText}
      </Button>
      <Modal
        open={isOpen}
        onClose={closeModal}
        aria-labelledby={title}
        aria-describedby={description}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: { timeout: 500 }
        }}
      >
        <Fade in={isOpen}>
          <Box sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "90%",
            boxShadow: 24,
            p: 4,
            borderRadius: 4,
            color: "white",
          }}>
            <Box display="flex" justifyContent="space-between">
              <Typography component="h2" variant="h4">{title}</Typography>
              <Button onClick={closeModal} style={{ cursor: "pointer" }}>
                <Typography variant="h5" aria-hidden="true">
                  &times;
                </Typography>
              </Button>
            </Box>
            <hr />
            <Box display="flex" justifyContent="center"
              sx={{
                display: { xs: 'none', md: 'block' }
              }}>
              <Box>
                <iframe className="pdf" src={require('../../data/Barrales_Diego_Resume.pdf')} width="1000" height="500" ></iframe>
              </Box>
            </Box>

            {/* displays on small screens / phones */}

            <Box display="flex" justifyContent="center"
              sx={{
                display: { xs: 'block', md: 'none' }
              }}>
              <Typography variant="h6">Too small to render embedded PDF, please view it on a bigger screen.</Typography>
              <Typography>Or open in a new tab here:
                <Button
                  variant="contained"
                  href={require('../../data/Barrales_Diego_Resume.pdf')}
                  target="_blank"
                  sx={{ mx: 2 }}>
                  {btnText}
                </Button>
              </Typography>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </Fragment>
  );
}

export default ResumeModal;