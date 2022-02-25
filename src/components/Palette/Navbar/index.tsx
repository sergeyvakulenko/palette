import React, { FC } from "react";
import { Link } from "react-router-dom";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import {
  Container,
  FormatDropdownContainer,
  Logo,
  SliderContainer,
  StyledSlider,
} from "./styles";
import { useToggle } from "../../../shared/hooks";
import { Format } from "../../../shared/types";

interface NavbarProps {
  level: number;
  changeLevel: (level: number) => void;
  format: Format;
  changeFormat: (format: Format) => void;
  isSingleColorPalette: boolean;
}

const Navbar: FC<NavbarProps> = ({
  level,
  changeLevel,
  format,
  changeFormat,
  isSingleColorPalette,
}) => {
  const [showSnackbar, toggleSnackbar] = useToggle(false);

  const handleChangeFormat = (
    e: React.ChangeEvent<{ value: unknown }>
  ): void => {
    changeFormat(e.target.value as Format);
    toggleSnackbar();
  };
  const closeFormatSnackbar = (): void => {
    toggleSnackbar();
  };

  return (
    <Container>
      <Logo>
        <Link to="/">Palette</Link>
      </Logo>
      {!isSingleColorPalette && (
        <div>
          <span>Level: {level}</span>
          <SliderContainer>
            <StyledSlider
              defaultValue={level}
              step={100}
              min={100}
              max={900}
              onAfterChange={changeLevel}
            />
          </SliderContainer>
        </div>
      )}
      <FormatDropdownContainer>
        <Select value={format} onChange={handleChangeFormat}>
          <MenuItem value={Format.Hex}>
            HEX<span> - #ffffff</span>
          </MenuItem>
          <MenuItem value={Format.RGB}>
            RGB<span> - rgb(255, 255, 255)</span>
          </MenuItem>
          <MenuItem value={Format.RGBa}>
            RGBA<span> - rgba(255, 255, 255, 1.0)</span>
          </MenuItem>
        </Select>
      </FormatDropdownContainer>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open={showSnackbar}
        autoHideDuration={1500}
        message={
          <span id="message-id">Format changed to {format.toUpperCase()}!</span>
        }
        ContentProps={{
          "aria-describedby": "message-id",
        }}
        onClose={closeFormatSnackbar}
        action={[
          <IconButton
            onClick={closeFormatSnackbar}
            color="inherit"
            key="close"
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>,
        ]}
      />
    </Container>
  );
};

export default Navbar;
