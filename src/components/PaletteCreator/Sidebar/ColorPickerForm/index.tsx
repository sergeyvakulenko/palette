import React, { useState, useEffect, FC } from "react";
import { ChromePicker } from "react-color";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import chroma from "chroma-js";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { useInput } from "../../../../shared/hooks";
import { FlatColor } from "../../../../shared/types";

const Container = styled.div`
  width: 100%;
`;

const StyledChromePicker = styled(ChromePicker)`
  width: 100% !important;
`;

const AddColorButton = styled(Button)`
  width: 100%;
  padding: 1rem !important;
  font-size: 2rem !important;
`;

const ColorNameInput = styled(TextValidator)`
  width: 100%;
  height: 70px;
`;

interface ColorPickerFormProps {
  maxColors: number;
  colors: FlatColor[];
  addNewColor: (newColorName: string, currentColor: string) => void;
}

const ColorPickerForm: FC<ColorPickerFormProps> = ({
  maxColors,
  colors,
  addNewColor,
}) => {
  const [currentColor, setCurrentColor] = useState("#008080");
  const [newColorName, setNewColorName, resetNewColorName] = useInput("");
  const paletteIsFull = colors.length >= maxColors;

  useEffect(() => {
    ValidatorForm.addValidationRule("colorNameUnique", (value: string) =>
      colors.every(({ name }) => name.toLowerCase() !== value.toLowerCase())
    );
    ValidatorForm.addValidationRule("colorUnique", (value: string) =>
      colors.every(({ color }) => color !== currentColor)
    );
  }, []);

  const handleCurrentColorChange = (color: { hex: string }): void => {
    setCurrentColor(color.hex);
  };

  return (
    <Container>
      <StyledChromePicker
        color={currentColor}
        onChange={handleCurrentColorChange}
      />
      <ValidatorForm
        instantValidate={false}
        onSubmit={() => {
          addNewColor(newColorName, currentColor);
          resetNewColorName();
        }}
      >
        <ColorNameInput
          value={newColorName}
          name="newColorName"
          onChange={setNewColorName}
          variant="filled"
          margin="normal"
          label="Color Name"
          validators={["required", "colorNameUnique", "colorUnique"]}
          errorMessages={[
            "Enter a color name",
            "Color name must be unique",
            "Color already used!",
          ]}
        />
        <AddColorButton
          variant="contained"
          color="primary"
          style={{
            backgroundColor: paletteIsFull ? "gray" : currentColor,
            color:
              chroma(currentColor).luminance() >= 0.65
                ? "rgba(0,0,0,0.5)"
                : "white",
          }}
          type="submit"
          disabled={paletteIsFull}
        >
          {paletteIsFull ? "Palette Full" : "Add Color"}
        </AddColorButton>
      </ValidatorForm>
    </Container>
  );
};

export default ColorPickerForm;
