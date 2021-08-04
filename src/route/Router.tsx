import React from "react";
import { Switch, Route, BrowserRouter as ReactRouter } from "react-router-dom";
import BasicContainer from "../pages/Basic/BasicContainer";
import { useToggleSidebar } from "../context/SidebarContext";
function Router() {
  const toggleSidebar = useToggleSidebar();
  return (
    <ReactRouter>
      <div style={{ padding: 8 }} onClick={() => toggleSidebar(false)}>
        <Switch>
          <Route path="/basic" component={BasicContainer} />
        </Switch>
      </div>
    </ReactRouter>
  );
}

export default Router;
