
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
            <Typography className="login-head" variant="h6" component="h2">
              WELCOME BACK TO JUKEBOX
            </Typography>
            <Typography className="login" sx={{ mt: 2 }}>
              <form className="login-form">
                <label className="username">Username/email: </label>
                <input type="text" />
                <br/>
                <label className="password">Password: </label>
                <input type="text" />
                <br/>
                <input
                  className="submit"
                  type="submit"
                  value="Login"/>
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
