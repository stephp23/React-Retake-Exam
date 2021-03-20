import React, { useState, useEffect } from 'react';
import axios from "axios";
import getRandomCharacters from "../APIDataRetrieval/getRandomCharacters";




const RandomCharacters = () => {
  const [randomCharacters, setRandomCharacters] = useState([]);

  const fetchRandomCharacters = async () => {
    // let randomCharacters_URL = 'https://www.breakingbadapi.com/api/character/random';
    // let randomCharacters_URL = `${BASE_URL}${RANDOM_CHARACTERS_ENDPOINT}`
    // const response = await axios.get(randomCharacters_URL);
    // console.log(response.data[0]);
    // console.log(response.data[0].occupation[0]);

    const response = await getRandomCharacters();
    setRandomCharacters(response.data[0]);
  };

  useEffect(() => {
    fetchRandomCharacters();
  }, []);
  
  return (
    <div className="character-text">
      <h1>Which character are you?</h1>
      {/* <button onClick={fetchRandomCharacters}>Surprise Me</button> */}
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
