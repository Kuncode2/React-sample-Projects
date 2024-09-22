import React, { useState } from 'react'

const Todolist = () => {
    const [tolist, setToList] = useState("");
  const [storing, setStoring] = useState([]);
  // const arr = [1,2.3,4]

  const Onchangetype = (e) => {
    setToList(e.target.value);
  };

  const Valuestoring = (e) => {
    // const brr = arr.map(user => ({
    //   value : user,
    //   isgreat:user >=2
    // }));
    // console.log(brr)
    
    e.preventDefault();   
    if (tolist.trim()) {  
      setStoring([...storing, tolist]);
      setToList('');
    }
  };

  const Removelogic = (index) => {
    setStoring(storing.filter((nul,i)=>i !==index )
    ); 
  };
  return (
    <div>
    <form>
      <input
        type="text"
        placeholder="add task"
        value={tolist}
        onChange={Onchangetype}
      />
      <button onClick={Valuestoring}>Add</button>   
      
    </form>
    <ul>
      {storing.map((val, index) => (
        <li key={index}>{val} <button type="button" onClick={()=>Removelogic(index)}>Remove</button></li>
      ))}
    </ul>
  </div>
  )
}

export default Todolist