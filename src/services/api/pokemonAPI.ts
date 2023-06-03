import axios from 'axios';

export const getPokemonData = async () => {
  const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100');
  const { results } = res?.data;
  return results;
};
