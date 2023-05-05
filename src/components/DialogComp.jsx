import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";

export default function DialogComp() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open responsive dialog
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          <Typography variant="h5" style={{ fontWeight: "bold" }}>
            Remove payment method
          </Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography sx={{ color: "gray", width: "450px" }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt
              debitis cum nihil.
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={handleClose}
            sx={{
              textTransform: "none",
              fontWeight: "bold",
              color: "#000",
              backgroundColor: "#23A3F1 ",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#fff",
                color: "#23A3F1",
              },
            }}
          >
            Disagree
          </Button>
          <Button
            autoFocus
            onClick={handleClose}
            sx={{
              textTransform: "none",
              fontWeight: "bold",
              color: "#000",
              backgroundColor: "#23A3F1 ",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#fff",
                color: "#23A3F1",
              },
            }}
          >
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
