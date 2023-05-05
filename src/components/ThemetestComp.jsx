import React from "react";
import { useTheme, Typography } from "@mui/material";

const ThemetestComp = () => {
  const theme = useTheme();
  return (
    <div>
      <Typography variant="h1" color="primary">Hello World</Typography>
    </div>
  );
};

export default ThemetestComp;
