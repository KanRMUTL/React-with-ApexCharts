import React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Path } from "../route/path";
import { useToggleSidebar } from "../context/SidebarContext";
interface Props {
  lists: Path[];
}

function ListMenu({ lists }: Props) {
  const toggleSidebar = useToggleSidebar();
  return (
    <div style={{ width: 250 }}>
      <List>
        {lists.map((list, index) => (
          <ListItem
            component={Link}
            key={index}
            onClick={() => toggleSidebar(false)}
            to={list.path}
            button
          >
            <ListItemText primary={list.label} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default ListMenu;
