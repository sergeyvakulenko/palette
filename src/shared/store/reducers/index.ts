import { combineReducers } from "@reduxjs/toolkit";
import palettes from "./palettes";

const rootReducer = combineReducers({
  palettes,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
