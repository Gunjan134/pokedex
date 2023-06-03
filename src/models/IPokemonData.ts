export interface IPokemonData {
  name: string;
  avatar: string;
  type: string;
  types: string[];
  stats: {
    attack: number;
    defense: number;
    speed: number;
  };
}
