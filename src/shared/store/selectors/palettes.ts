import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../reducers";
import { PalettesState } from "../reducers/palettes";

const palettesStateSelector = (state: RootState) => state.palettes;

export const palettesSelector = createSelector(
  palettesStateSelector,
  ({ list }: PalettesState) => list
);
