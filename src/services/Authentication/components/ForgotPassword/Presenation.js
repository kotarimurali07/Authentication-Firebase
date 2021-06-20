import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Link } from "react-router-dom";
import { EmailValadation } from "../../../../shared/V/Valadation";
const Presenation = (props) => {
  const { email, setEmail, handleCancleButton, handleDoneButton } = props;
  const [open, setOpen] = React.useState(true);
  console.log(email);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">FORGOT_PASSWORD</DialogTitle>
          <DialogContent>
            <DialogContentText>
              please enter your email address here. We will send reset-password
              link to your email.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              helperText={
                email.length && !EmailValadation(email)
                  ? "Enter valid email"
                  : null
              }
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={handleCancleButton}>
              Cancel
            </Button>
            <Button
              color="primary"
              disabled={!email}
              onClick={handleDoneButton}
            >
              <Link to="/Login" variant="body">
                {"Done"}
              </Link>
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default Presenation;
