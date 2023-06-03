import Header from 'components/Header/Header';
import PokemonTable from 'components/PokemonTable/PokemonTable';

export default function HomePage() {
  return (
    <div className='flex flex-col min-h-full'>
      <Header />
      <PokemonTable />
    </div>
  );
}
