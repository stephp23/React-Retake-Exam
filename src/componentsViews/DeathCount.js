import React, { useState, useEffect } from 'react';
import axios from "axios";
import getDeathCount from "../APIDataRetrieval/getDeathCount";



const DeathCount = () => {
  const [characterDeathCount, setCharacterDeathCount] = useState([]);

  const fetchCharacterDeathCount = async () => {


    // let death_URL = 'https://www.breakingbadapi.com/api/deaths';
    // const response = await axios.get(death_URL);
    // console.log(response.data)
    // setCharacterDeathCount(response.data);

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
      {/* <button onClick={fetchRandomCharacters}>Surprise Me</button> */}
      {/* <h2>{randomCharacters.name}</h2> */}
      {/* <h3>Alias: "{randomCharacters.name}"</h3> */}
      {/* <img src={randomCharacters.img} alt="character-picture" /> */}
      {/* <div className="character-information"> */}
        {/* <h3>Occupation: {randomCharacters.occupation}</h3>
        <h3>Show: {randomCharacters.category}</h3>
        <h3>Survival Status: {randomCharacters.status}</h3>
      </div> */}
      {/* <div>
      <button onClick={fetchRandomCharacters}>Lets Try Again</button>
      </div> */}
    </div>
  )
}

export default DeathCount
