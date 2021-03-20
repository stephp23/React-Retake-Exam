import React, { useState, useEffect } from 'react';
import axios from "axios";
import getDeathCount from "../APIDataRetrieval/getDeathCount";



const DeathCount = () => {
  const [characterDeathCount, setCharacterDeathCount] = useState([]);

  const fetchCharacterDeathCount = async () => {


    const response = await getDeathCount();
    console.log(response.data);
    setCharacterDeathCount(response.data);
    
  };

  useEffect(() => {
    fetchCharacterDeathCount();
  }, []);
  
  return (
    <div className="the-fallen">
      <h1>The Fallen</h1>
      {characterDeathCount.map((item, index) => {
        return (
          <div>
          <h2 key={index}>{item.death}</h2>
            <h3 key={index}>Killed By: {item.responsible}</h3>
            <h3 key={index}>Cause of Death: {item.cause}</h3>
            <h3 key={index}>Total Death Count: {item.number_of_deaths}</h3>
          </div>
          )
      })}
     
    </div>
  )
}

export default DeathCount
