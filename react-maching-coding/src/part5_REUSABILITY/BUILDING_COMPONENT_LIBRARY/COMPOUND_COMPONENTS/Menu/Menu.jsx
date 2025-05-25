import React from "react";
import "./menu.css";
const MenuContext = React.createContext();

export default function Menu({ children }) {
  const [open, setOpen] = React.useState(false);
  const menuId = React.useId();
  function toggle() {
    setOpen((open) => !open);
  }

  return (
    <MenuContext.Provider value={{ open, toggle, menuId }}>
      <div className="menu" role="menu">
        {children}
      </div>
    </MenuContext.Provider>
  );
}

export { MenuContext };
