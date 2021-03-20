import axios from "axios";

async function getDeathCount() {
  const deathCount_URL = 'https://www.breakingbadapi.com/api/deaths';
  const response = await axios.get(deathCount_URL);

  return response;
  

}

export default getDeathCount