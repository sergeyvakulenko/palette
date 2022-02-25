import React, { FC, useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Picker, BaseEmoji } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";
import { useInput } from "../../../shared/hooks";
import { FlatPalette } from "../../../shared/types";

interface PaletteMetaFormProps {
  palettes: FlatPalette[];
  toggleMetaFormDisplayed: () => void;
  savePalette: (newPalette: FlatPalette) => void;
}

const PaletteMetaForm: FC<PaletteMetaFormProps> = ({
  palettes,
  toggleMetaFormDisplayed,
  savePalette,
}) => {
  const [newPaletteName, setNewPaletteName] = useInput("");
  const [stage, setStage] = useState<"name" | "emoji" | null>("name");

  useEffect(() => {
    ValidatorForm.addValidationRule("paletteNameUnique", value =>
      palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    );
  }, []);

  const showEmojiPicker = () => {
    setStage("emoji");
  };

  const handleSavePalette = (emoji: BaseEmoji) => {
    const newPalette: FlatPalette = {
      id: newPaletteName.toLowerCase().replace(/ /g, "-"),
      paletteName: newPaletteName,
      emoji: emoji.native,
      colors: [],
    };
    savePalette(newPalette);
    setStage(null);
  };

  return (
    <div>
      <Dialog
        open={stage === "name"}
        onClose={toggleMetaFormDisplayed}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          Choose a Palette Name{" "}
          <span role="img" aria-label="palette emoji">
            🎨
          </span>
        </DialogTitle>
        <ValidatorForm onSubmit={showEmojiPicker}>
          <DialogContent>
            <DialogContentText>
              Please enter a new palette name. Make sure it's unique!
            </DialogContentText>

            <TextValidator
              fullWidth
              margin="normal"
              label="Palette Name"
              value={newPaletteName}
              onChange={setNewPaletteName}
              name="newPaletteName"
              validators={["required", "paletteNameUnique"]}
              errorMessages={["Enter a palette name", "Name already used"]}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={toggleMetaFormDisplayed} color="primary">
              Cancel
            </Button>
            <Button variant="contained" color="primary" type="submit">
              Save Palette
            </Button>
          </DialogActions>
        </ValidatorForm>
      </Dialog>
      <Dialog
        open={stage === "emoji"}
        onClose={toggleMetaFormDisplayed}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Choose a Palette Emoji</DialogTitle>
        <Picker onSelect={handleSavePalette} />
      </Dialog>
    </div>
  );
};

export default PaletteMetaForm;
