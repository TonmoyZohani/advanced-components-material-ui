import React, { useState } from "react";
import ListSubheader from "@mui/material/ListSubheader";
// import List from "@mui/material/List";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import ListItem from "@mui/material";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import { Box } from "@mui/material";

export default function ListComp() {
  const [open, setOpen] = useState(false);

  const array = ["Home", "About", "Contact", "Details"];

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Box>
      <List>
        <ListItem divider>
          <ListItemButton onClick={handleClick}>
            <ListItemText primary="See The List" />
          </ListItemButton>
        </ListItem>
      </List>

      <Collapse in={open}>
        <List sx={{ width: 300, background: "#1ABC9C " }}>
          {array.map((item) => {
            return (
              <ListItem divider>
                <ListItemButton onClick={() => setOpen(false)}>
                  <ListItemIcon>{">"}</ListItemIcon>
                  <ListItemText primary={item} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Collapse>
    </Box>
  );
}
