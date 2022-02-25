import React, { FC, memo } from "react";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ColorPickerForm from "./ColorPickerForm";
import { Content, Buttons, useStyles } from "./styles";
import { FlatColor } from "../../../shared/types";

interface SidebarProps {
  maxColors: number;
  open: boolean;
  colors: FlatColor[];
  onClose: () => void;
  addNewColor: (name: string, color: string) => void;
  addRandomColor: () => void;
  clearColors: () => void;
}

const Sidebar: FC<SidebarProps> = ({
  open,
  onClose,
  colors,
  maxColors,
  addNewColor,
  addRandomColor,
  clearColors,
}) => {
  const { drawer, drawerPaper, drawerHeader } = useStyles();
  const paletteIsFull = colors.length >= maxColors;

  return (
    <Drawer
      className={drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: drawerPaper,
      }}
    >
      <div className={drawerHeader}>
        <IconButton onClick={onClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Content>
        <Typography variant="h4">Design Your Palette</Typography>
        <Buttons>
          <Button variant="contained" color="secondary" onClick={clearColors}>
            Clear Palette
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={addRandomColor}
            disabled={paletteIsFull}
          >
            Random Color
          </Button>
        </Buttons>
        <ColorPickerForm
          maxColors={maxColors}
          colors={colors}
          addNewColor={addNewColor}
        />
      </Content>
    </Drawer>
  );
};

export default memo(
  Sidebar,
  (prevState: SidebarProps, nextState: SidebarProps) => {
    return (
      prevState.open === nextState.open &&
      prevState.maxColors === nextState.maxColors
    );
  }
);
