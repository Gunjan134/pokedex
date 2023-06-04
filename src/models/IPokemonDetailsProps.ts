import { IPokemonData } from './IPokemonData';

export interface IPokemonDetailsProps {
  selectedPokemon: IPokemonData | null;
  handleClose: () => void;
}
