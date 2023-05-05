import * as React from "react";
import Box from "@mui/material/Box";
import { Link } from "@mui/material";

const preventDefault = (event) => event.preventDefault();

export default function LinkComp() {
  return (
    <Box
      sx={{
        typography: "body1",
        marginTop: "10px",
        "& > :not(style) + :not(style)": {
          ml: 2,
        },
      }}
      onClick={preventDefault}
    >
      <Link
        variant="h5"
        sx={{
          padding: "15px",
          backgroundColor: "yellowgreen",
          borderRadius: "5px",
        }}
        href="https://www.google.com"
        underline="none"
      >
        Facebook
      </Link>
      <Link href="#" color="inherit">
        {'color="inherit"'}
      </Link>
      <Link href="#" variant="body2">
        {'variant="body2"'}
      </Link>
    </Box>
  );
}
