import axios from "axios";

async function getRandomCharacters() {
  const randomCharacters_URL = 'https://www.breakingbadapi.com/api/character/random';
  const response = await axios.get(randomCharacters_URL);

  return response;


}

export default getRandomCharacters