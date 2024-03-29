import { FC } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

interface FetchDefaultsDialogProps {
  open: boolean;
  onClose: () => void;
  onFetch: () => void;
}

const FetchDefaultsDialog: FC<FetchDefaultsDialogProps> = ({
  open,
  onClose,
  onFetch,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Fetch default palettes?</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          You have no palettes in your local storage. Do you wish to fetch some?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary" variant="contained">
          No, I'm cool
        </Button>
        <Button onClick={onFetch} color="primary" variant="contained">
          Let's gooo!
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default FetchDefaultsDialog;
