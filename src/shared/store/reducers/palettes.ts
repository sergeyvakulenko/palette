import { createReducer } from "@reduxjs/toolkit";
import { defaultPalettes } from "../../helpers/colors";
import { FlatPalette } from "../../types";
import {
  fetchDefaultPalettes,
  createPalette,
  updatePalette,
  deletePalette,
} from "../actions/palettes";

export type PalettesState = {
  list: FlatPalette[];
};

export default createReducer(
  { list: [], activePalette: undefined } as PalettesState,

  builder =>
    builder
      .addCase(fetchDefaultPalettes, state => {
        state.list = defaultPalettes();
      })
      .addCase(createPalette, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(updatePalette, (state, action) => {
        state.list = state.list.map(p =>
          p.id === action.payload.id ? action.payload : p
        );
      })
      .addCase(deletePalette, (state, action) => {
        state.list = state.list.filter(p => p.id !== action.payload);
      })
);
