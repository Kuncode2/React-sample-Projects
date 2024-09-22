import React from "react";
import MenuItems from "./MenuItems";

const Dropdown = ({ submens, dropdown, depthlevel }) => {
  depthlevel = depthlevel + 1;
  const dropdownClass = depthlevel>1 ? "dropdown-submenu" : "";
  return (
    <ul className={`dropdown-submenu ${dropdownClass}`}>
        {
            submens.map((submenu,index)=>(
                <MenuItems items={submenu} key={index} depthlevel={depthlevel}/>
            ))
        }   
    </ul>
)
};

export default Dropdown;
