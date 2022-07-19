import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import styles from "./modal2.module.css";
import { TextField } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 450,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 3,
  borderRadius: "10px",
};

const Modal2 = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div>
        <Button onClick={handleOpen}>Open modal 2</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className={styles.modalContainer}>
              <TextField label="Email" id="" />
              <TextField label="Password" id="" />
              <TextField label="Email" id="" />
              <TextField label="Password" id="" />
              <div className={styles.modalBtnContainer}>
                <Button
                  sx={{ height: "40px", width: "110px", borderRadius: "20px" }}
                  variant="contained"
                >
                  Submit
                </Button>
              </div>
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default Modal2;
