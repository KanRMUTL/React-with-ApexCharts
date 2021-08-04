import React, { useContext, createContext, useState } from "react";

const SidebarActive = createContext(false);
const ToggleSidebar = createContext((active: boolean) => undefined);

interface Props {
  children: React.ReactNode;
}

export const useSideBarActive = () => useContext(SidebarActive);
export const useToggleSidebar = () => useContext(ToggleSidebar);

export const SideBarActiveProvider = ({ children }: Props) => {
  const [active, setActive] = useState(false);

  const toggleSidebar = (status: boolean) => {
    setActive(status);
    return undefined;
  };

  return (
    <SidebarActive.Provider value={active}>
      <ToggleSidebar.Provider value={toggleSidebar}>
        {children}
      </ToggleSidebar.Provider>
    </SidebarActive.Provider>
  );
};
