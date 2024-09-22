import React, { useEffect, useRef, useState } from "react";

const MenuItems = ({ items, depthlevel }) => {
  const [dropdown, setDropdown] = useState(false);
  const [inClickinButton, setIsclickingButton] = useState(false);
  let ref = useRef();
  useEffect(() => {
    const hanlder = (e) => {
      if (dropdown && ref.current.contains(e.target)) {
        setDropdown(false);
        setIsclickingButton(false);
      }
    };
    document.addEventListener("mousedown", hanlder);
    document.addEventListener("touchstart", hanlder);
    return () => {
      document.removeEventListener("mousedown", hanlder);
      document.removeEventListener("touchstart", hanlder);
    };
  }, [dropdown]);

  return <div>MenuItems</div>;
};

export default MenuItems;
