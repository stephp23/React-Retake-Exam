import React, { useState, useEffect } from 'react';
import axios from "axios";
import BASE_URL from "../APIDataRetrieval/Constants";
import RANDOM_CHARACTERS_ENDPOINT from "../APIDataRetrieval/Constants";



const RandomCharacters = () => {
  const [randomCharacters, setRandomCharacters] = useState([]);

  const fetchRandomCharacters = async () => {
    let randomCharacters_URL = 'https://www.breakingbadapi.com/api/character/random';
      // `${BASE_URL}${RANDOM_CHARACTERS_ENDPOINT}`
    const response = await axios.get(randomCharacters_URL);
    console.log(response);
    setRandomCharacters(response);
  };

  useEffect(() => {
    fetchRandomCharacters();
  }, []);
  
  return (
    <div>
      <h1>Random Characters</h1>
    </div>
  )
}

export default RandomCharacters
