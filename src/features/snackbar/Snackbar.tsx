import Alert from "@mui/material/Alert";
import MuiSnackbar from "@mui/material/Snackbar";
import React, { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { initialState, selectSnackbar, updateSnackbar } from "./snackbarSlice";

const AUTO_HIDE_DURATION = 6000;

const Snackbar: FC = () => {
  const { severity, isOpen, message } = useAppSelector(selectSnackbar);
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(updateSnackbar(initialState));
  };

  return (
    <MuiSnackbar
      onClose={handleClose}
      open={isOpen}
      autoHideDuration={AUTO_HIDE_DURATION}
    >
      <Alert onClose={handleClose} severity={severity}>
        {message}
      </Alert>
    </MuiSnackbar>
  );
};

export default Snackbar;
