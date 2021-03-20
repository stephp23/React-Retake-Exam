import React, { useState, useEffect } from 'react';
import axios from "axios";
import getRandomCharacters from "../APIDataRetrieval/getRandomCharacters";




const RandomCharacters = () => {
  const [randomCharacters, setRandomCharacters] = useState([]);

  const fetchRandomCharacters = async () => {

    const response = await getRandomCharacters();
    setRandomCharacters(response.data[0]);
  };

  useEffect(() => {
    fetchRandomCharacters();
  }, []);
  
  return (
    <div className="character">
      <h1 className="character-text">Which character are you?</h1>
      <h2>{randomCharacters.name}</h2>
      <h3>Alias: "{randomCharacters.name}"</h3>
      <div>
      <button className="character-button" onClick={fetchRandomCharacters}>No Way! Lets Try Again</button>
      </div>
      <img src={randomCharacters.img} alt="character-picture" />
      <div className="character-information">
        <h3>Occupation: {randomCharacters.occupation}</h3>
        <h3>Show: {randomCharacters.category}</h3>
        <h3>Survival Status: {randomCharacters.status}</h3>
      </div>
     
    </div>
  )
}

export default RandomCharacters
