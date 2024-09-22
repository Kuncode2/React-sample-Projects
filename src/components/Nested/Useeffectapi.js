import React, { useEffect, useState } from "react";

const Useeffectapi = () => {

  const [data, setData] = useState([]);
  const [filterdata, setfilterData] = useState([]);
  const [storedata, setStoreData] = useState("");

  useEffect(() => {
    datafetching();
  }, []); 

  async function datafetching() {
    try {
      const datas = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data1 = await datas.json();
      setData(data1);
      setfilterData(data1);
    } catch (error) { 
      console.log(error);
    } 
  }

  const Filterfunction = () => {
    const filterdatas = data.filter((item) => item.title.includes(storedata));
    setfilterData(filterdatas);
  };

  return (
    <>
      <div className="filter">
        <input
          type="text"
          value={storedata}
          onChange={(e) => setStoreData(e.target.value)}
        />
        <button onClick={Filterfunction}>search</button>
      </div>
      {filterdata.map((values) => (
        <li key={values.id}>
          <strong>ID:{values.id} </strong>
          <strong>Title: {values.title}</strong>
        </li>
      ))}
    </>
  );
};

export default Useeffectapi;
