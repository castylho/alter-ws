import { AlertColor } from "@mui/material";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface SnackbarState {
  isOpen: boolean;
  message: string;
  severity: AlertColor;
}

export const initialState: SnackbarState = {
  isOpen: false,
  message: "",
  severity: "info",
};

export const snackbarSlice = createSlice({
  name: "snackbar",
  initialState,
  reducers: {
    updateSnackbar: (state, action: PayloadAction<SnackbarState>) => {
        state.isOpen = action.payload.isOpen
        state.message = action.payload.message
        state.severity = action.payload.severity
    }
  },
});

export const { updateSnackbar } = snackbarSlice.actions;
export const selectSnackbar = (state: RootState) => state.snackbar;

export default snackbarSlice.reducer;
