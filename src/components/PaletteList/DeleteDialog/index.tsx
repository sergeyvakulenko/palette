import { FC } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Check from "@material-ui/icons/Check";
import Close from "@material-ui/icons/Close";
import blue from "@material-ui/core/colors/blue";
import red from "@material-ui/core/colors/red";

interface DeletePaletteDialogProps {
  id: string | null;
  open: boolean;
  onClose: () => void;
  onDelete: (id: string) => void;
}

const DeletePaletteDialog: FC<DeletePaletteDialogProps> = ({
  id,
  open,
  onClose,
  onDelete,
}) => {
  const handleDelete = (): void => {
    if (id) {
      onDelete(id);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="delete-dialog-palette"
    >
      <DialogTitle id="delete-dialog-palette">Delete Palette?</DialogTitle>
      <List>
        <ListItem button onClick={handleDelete}>
          <ListItemAvatar>
            <Avatar style={{ backgroundColor: blue[100], color: blue[600] }}>
              <Check />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Delete" />
        </ListItem>
        <ListItem button onClick={onClose}>
          <ListItemAvatar>
            <Avatar style={{ backgroundColor: red[100], color: red[600] }}>
              <Close />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Cancel" />
        </ListItem>
      </List>
    </Dialog>
  );
};

export default DeletePaletteDialog;
