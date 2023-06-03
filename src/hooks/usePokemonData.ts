import { useQuery } from '@tanstack/react-query';
import { IPokemon } from 'models/IPokemon';
import { getPokemonData } from 'services/api/pokemonAPI';

export const usePokemonData = (onSuccess: (data: IPokemon[]) => void) =>
  useQuery(['pokemons'], getPokemonData, { onSuccess });
