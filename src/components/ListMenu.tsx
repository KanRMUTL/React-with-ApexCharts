import React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import { Link, BrowserRouter as Router } from "react-router-dom";
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
        <Router>
          {lists.map((list, index) => (
            <ListItem
              component={Link}
              key={index}
              to={list.path}
              onClick={() => toggleSidebar(false)}
              button
            >
              <ListItemText primary={list.label} />
            </ListItem>
          ))}
        </Router>
      </List>
    </div>
  );
}

export default ListMenu;
