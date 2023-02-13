import { FC, memo } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import AddToPhotosIcon from "@material-ui/icons/AddToPhotos";
import { useToggle } from "shared/hooks";
import { FlatPalette } from "shared/types";
import PaletteMetaForm from "../PaletteMetaForm";
import { Container, NavButtons, useStyles } from "./styles";

interface NavbarProps {
  open: boolean;
  onOpen: () => void;
  palettes: FlatPalette[];
  savePalette: (newPalette: FlatPalette) => void;
}

const Navbar: FC<NavbarProps> = ({ open, onOpen, palettes, savePalette }) => {
  const [metaFormDisplayed, toggleMetaFormDisplayed] = useToggle(false);
  const { appBar, appBarShift, menuButton, hide } = useStyles();

  return (
    <Container>
      <CssBaseline />
      <AppBar
        position="fixed"
        color="default"
        className={classNames(appBar, {
          [appBarShift]: open,
        })}
      >
        <Toolbar disableGutters={!open}>
          <IconButton
            color="inherit"
            aria-label="Open Drawer"
            onClick={onOpen}
            className={classNames(menuButton, {
              [hide]: open,
            })}
          >
            <AddToPhotosIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" noWrap>
            Create A Palette
          </Typography>
        </Toolbar>
        <NavButtons>
          <Link to="/">
            <Button variant="contained" color="secondary">
              Back
            </Button>
          </Link>
          <Button
            variant="contained"
            color="primary"
            onClick={toggleMetaFormDisplayed}
          >
            Save
          </Button>
        </NavButtons>
      </AppBar>
      {metaFormDisplayed && (
        <PaletteMetaForm
          palettes={palettes}
          savePalette={savePalette}
          toggleMetaFormDisplayed={toggleMetaFormDisplayed}
        />
      )}
    </Container>
  );
};

export default memo(Navbar);
