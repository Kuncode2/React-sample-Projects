import React, { createContext, useContext, useEffect, useState } from "react";
import Dropdown from "./components/Nested/Dropdown";
import Controled from "./components/Nested/Controled";
import Uncontrol from "./components/Nested/Uncontrol";
import Todolist from "./components/Todolist/Todolist";
import Useeffectapi from "./components/Nested/Useeffectapi";
// import Nested from "./components/Nested/Nested";

const App = () => {
  return (
    <>
      {/* <Dropdown />
      <Todolist />
      <Uncontrol />
      <Controled /> */}
      <Useeffectapi/>
    </>
  );
};

export default App;
