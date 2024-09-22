import React, { useState } from "react";

const Controled = () => {
    const [name ,setName]=useState("")
    
    const handleclick=(e)=>{
        setName(e.target.value)
    }
    const handleclicks=(e)=>{
      e.preventDefault()
      console.log(name);
        
    }

    
  return (
    <form>
      <label>Name : </label>
      <input type="text" value={name} onChange={handleclick}  />
      <button onClick={handleclicks}>Reset</button>
    </form>
  );
};

export default Controled;
