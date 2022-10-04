import React, { Component } from "react";
import "./Modal.css"
// MATERIAL UI COMPONENTS
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Login() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button id="login" onClick={handleOpen}>
        Login
      </Button>
      <div  className="modal">
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style} className="modal">
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Welcome back to Jukebox!
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <form className="login-form">
                <label>Username/email:</label>
                <input type="text" />
                <label>Password:</label>
                <input type="text" />
                <input
                  type="submit"
                  value="Submit"/>
              </form>
            </Typography>
          </Box>
        </Fade>
      </Modal>
      </div>
    </div>
  );
}

export default Login;
