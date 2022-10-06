import React from "react";
import "./Modal.css";
// MATERIAL UI COMPONENTS
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SignUp from "./SignUp";

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

function SignUpModel() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button id="signup" onClick={handleOpen}>
        Sign Up
      </Button>
      <div className="modal">
        <Modal
          component={"div"}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade component={"div"} in={open}>
            <Box component={"div"} sx={style} className="modal">
              <Typography
                component={"div"}
                className="signup-head"
                variant="h6"
                // component="h2"
              >
                JOIN JUKEBOX
              </Typography>

              <SignUp component={"div"} />
            </Box>
          </Fade>
        </Modal>
      </div>
    </div>
  );
}

export default SignUpModel;
