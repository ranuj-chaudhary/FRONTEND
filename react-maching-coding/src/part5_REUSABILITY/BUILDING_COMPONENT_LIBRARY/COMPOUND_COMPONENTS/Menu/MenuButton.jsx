import React from "react";
import Button from "../../BUTTON/Button.jsx";
import { MenuContext } from "./Menu.jsx";
export default function MenuButton({ children }) {
  const { toggle, open, menuId } = React.useContext(MenuContext);
  return (
    <Button
      variant={"normal"}
      size={"md"}
      onClick={toggle}
      aria-expanded={open}
      aria-controls={menuId}
      aria-haspopup="true"
    >
      {children}
    </Button>
  );
}
