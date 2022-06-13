import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { FC } from "react";

const Appbar: FC = () => {
  return (
    <AppBar position="static">
      <Box sx={{ display: "flex", justifyContent: "flex-end" }} p={1}>
        <Typography variant="h3">Wiliot</Typography>
      </Box>
    </AppBar>
  );
};

export default Appbar;
