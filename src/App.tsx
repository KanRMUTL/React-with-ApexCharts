import React from "react";
import Sidebar from "./components/Sidebar";
import Router from "./route/Router";
import { SideBarActiveProvider } from "./context/SidebarContext";
import AppBar from "./components/AppBar";
import { BrowserRouter as ReactRouter } from "react-router-dom";
function App() {
  return (
    <SideBarActiveProvider>
      <AppBar />
      <ReactRouter>
        <Sidebar />
        <Router />
      </ReactRouter>
    </SideBarActiveProvider>
  );
}

export default App;
