import React from "react";
import Sidebar from "./components/Sidebar";
import Router from "./route/Router";
import { SideBarActiveProvider } from "./context/SidebarContext";
import AppBar from "./components/AppBar";
function App() {
  return (
    <SideBarActiveProvider>
      <AppBar />
      <Sidebar />
      <Router />
    </SideBarActiveProvider>
  );
}

export default App;
