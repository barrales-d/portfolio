import { Button, Modal } from "@mui/material";
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
      <Button onClick={openModal}>{btnText}</Button>
      <Modal
        open={isOpen}
        onClose={closeModal}
        aria-labelledby={title}
        aria-describedby={description}
      >
        { children }
      </Modal>
    </Fragment>
  );
}

export default ModalBase;