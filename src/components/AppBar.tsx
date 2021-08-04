import React from "react";
import { AppBar as AppBarMui, Toolbar, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { useToggleSidebar } from "../context/SidebarContext";
function AppBar() {
  const toggleSidebar = useToggleSidebar();
  return (
    <AppBarMui position="static">
      <Toolbar>
        <IconButton color="inherit" onClick={() => toggleSidebar(true)}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBarMui>
  );
}

export default AppBar;
