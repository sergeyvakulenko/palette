import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { loadState, saveState } from "../helpers/localStorage";
import rootReducer from "./reducers";

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: loadState(),
  middleware: [logger],
});

store.subscribe(() => {
  saveState({
    palettes: store.getState().palettes,
  });
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
