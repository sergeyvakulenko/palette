import { createAction } from "@reduxjs/toolkit";
import { FlatPalette } from "../../types";

export const fetchDefaultPalettes = createAction("PALETTE/FETCH_DEFAULT");
export const createPalette = createAction<FlatPalette>("PALETTE/CREATE");
export const updatePalette = createAction<FlatPalette>("PALETTE/UPDATE");
export const deletePalette = createAction<string>("PALETTE/DELETE");
