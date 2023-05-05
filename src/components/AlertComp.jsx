import React, { useState } from "react";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/material";

export default function AlertComp() {
  const [open, setOpen] = useState(true);

  return (
    <Box>
      {open && (
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert onClose={() => setOpen(false)}>
            This is a success alert — check it out!
          </Alert>
        </Stack>
      )}
    </Box>
  );
}
