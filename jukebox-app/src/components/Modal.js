// import React, { Component } from 'react'
// import "./Modal.css"

// export class Modal extends Component {

    

//     render() {
//         if(!this.props.show){return null}
//         return (
//             <>
//             <div className="modal">
//             {this.props.children}
//             </div>
//             </>
//         )
//     }
// }

// export default Modal

import * as React from 'react';
import Login from './Login'
// MATERIAL UI COMPONENTS
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function NavModals() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Login</Button>
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
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
             Welcome back to Jukebox!
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                {/* Login form imported from component */}
                <Login/>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default NavModals