import axios from 'axios';

export const REACT_APP_API_ENDPOINT_URL = 'https://pokeapi.co/api/v2/pokemon';

export const getPokemonData = async () => {
  const res = await axios.get(`${REACT_APP_API_ENDPOINT_URL}?limit=100`);
  const { results } = res?.data;
  return results;
};
