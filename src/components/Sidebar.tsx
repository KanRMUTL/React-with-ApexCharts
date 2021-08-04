import React from "react";
import { Drawer } from "@material-ui/core";
import ListMenu from "./ListMenu";
import { basePath } from "../route/path";
import { useSideBarActive } from "../context/SidebarContext";
function Sidebar() {
  const active = useSideBarActive();
  return (
    <Drawer anchor="left" open={active}>
      <ListMenu lists={basePath} />
    </Drawer>
  );
}

export default Sidebar;
