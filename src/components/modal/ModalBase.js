import { Backdrop, Box, Button, Fade, Modal, Typography } from "@mui/material";
import { Fragment, useState } from "react";


const ModalBase = ({
  btnText,
  title,
  description,
  children
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <Fragment>
      <Button
        variant="outlined"
        color="secondary"
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
            width: 400,
            bgcolor: "background.paper",
            color: "black",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
            borderRadius: 4,
          }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h2>
                <Typography variant="h4">{title}</Typography>
              </h2>
              <Button onClick={closeModal} style={{ cursor: "pointer" }}>
                <Typography variant="h4" aria-hidden="true">
                  &times;
                </Typography>
              </Button>
            </div>
            <hr />
            <div>
              {children}
            </div>
          </Box>
        </Fade>
      </Modal>
    </Fragment>
  );
}

export default ModalBase;