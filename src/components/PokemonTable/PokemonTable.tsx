import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import CircularProgress from '@mui/material/CircularProgress';
import FormControl from '@mui/material/FormControl';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import Select from '@mui/material/Select';
import { usePokemonData } from '../../hooks/usePokemonData';
import { ChangeEvent, useState } from 'react';
import { IPokemon } from '../../models/IPokemon';
import { IPokemonData } from '../../models/IPokemonData';
import PokemonDetails from '../../components/PokemonDetails/PokemonDetails';
import { getTypeClass } from '../../utils/getTypeClass';
import { IPokemonType } from '../../models/IPokemonType';
import { SelectChangeEvent } from '@mui/material';

export default function PokemonTable() {
  const [pokemonData, setPokemonData] = useState<IPokemonData[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<IPokemonData | null>(
    null
  );
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const { isLoading } = usePokemonData(async (data: IPokemon[]) => {
    try {
      const updatedPokemonData = await Promise.all(
        data.map(async (pokemon: IPokemon) => {
          const pokemonResponse = await fetch(pokemon.url);
          const pokemonData = await pokemonResponse.json();
          return {
            name: pokemonData.name,
            avatar: pokemonData.sprites.front_default,
            type: pokemonData.types[0].type.name,
            types: pokemonData.types.map(
              (type: IPokemonType) => type.type.name
            ),
            stats: {
              attack: pokemonData.stats[0].base_stat,
              defense: pokemonData.stats[1].base_stat,
              speed: pokemonData.stats[5].base_stat,
            },
          };
        })
      );
      setPokemonData(updatedPokemonData);
    } catch (error) {
      // TODO: handle this error later
      // console.error('Error fetching Pokemon data:', error);
    }
  });

  // Function to handle the click event and open the modal dialog
  const handleClick = (pokemon: IPokemonData) => {
    setSelectedPokemon(pokemon);
  };

  // Function to handle closing the modal dialog
  const handleClose = () => {
    setSelectedPokemon(null);
  };

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setPage(0);
  };

  const handleTypeSelect = (event: SelectChangeEvent<never[]>) => {
    const selectedValues = event.target.value;
    setSelectedTypes(selectedValues as string[]);
    setPage(0);
  };

  const filteredData = pokemonData.filter(
    (pokemon) =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedTypes.length === 0 ||
        pokemon.types.some((type) => selectedTypes.includes(type)))
  );

  const slicedData = filteredData.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  if (isLoading) {
    return (
      <div className='flex h-full w-full justify-center items-center'>
        <CircularProgress size={60} />
      </div>
    );
  }
  return (
    <Box className='w-full flex flex-col justify-center items-center mt-8'>
      <TextField
        label='Search by Name'
        value={searchTerm}
        onChange={handleSearch}
        style={{ marginBottom: '16px' }}
      />

      <FormControl>
        <Select
          multiple
          placeholder='Filter by type'
          value={selectedTypes as never[]}
          onChange={handleTypeSelect}
          renderValue={(selected) => (
            <div>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </div>
          )}
        >
          <MenuItem value='normal'>Normal</MenuItem>
          <MenuItem value='fire'>Fire</MenuItem>
          <MenuItem value='water'>Water</MenuItem>
          <MenuItem value='electric'>Electric</MenuItem>
          <MenuItem value='grass'>Grass</MenuItem>
          <MenuItem value='poison'>Poison</MenuItem>
          <MenuItem value='ground'>Ground</MenuItem>
          <MenuItem value='fairy'>Fairy</MenuItem>
          <MenuItem value='bug'>Bug</MenuItem>
        </Select>
      </FormControl>
      <TableContainer className='max-w-3xl' component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='Pokemon table'>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align='center'>Avatar</TableCell>
              <TableCell align='center'>Type</TableCell>
              <TableCell align='center'>Attack</TableCell>
              <TableCell align='center'>Defense</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {slicedData.map((pokemon: IPokemonData) => (
              <TableRow
                key={pokemon.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                onClick={() => handleClick(pokemon)}
              >
                <TableCell component='th' scope='row'>
                  {pokemon.name}
                </TableCell>
                <TableCell align='center'>
                  <img
                    className='w-24 h-24'
                    src={pokemon.avatar}
                    alt={pokemon.name}
                  />
                </TableCell>
                <TableCell align='center'>
                  {pokemon.types.map((type) => (
                    <div
                      key={type}
                      className={`inline-block px-2 py-1 rounded-2xl font-bold ${getTypeClass(
                        type
                      )}`}
                    >
                      {type}
                    </div>
                  ))}
                </TableCell>
                <TableCell align='center'>{pokemon.stats.attack}</TableCell>
                <TableCell align='center'>{pokemon.stats.defense}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component='div'
        count={filteredData.length}
        page={page}
        rowsPerPage={rowsPerPage}
        onPageChange={handleChangePage}
        rowsPerPageOptions={[10, 20, 50]}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <PokemonDetails
        selectedPokemon={selectedPokemon}
        handleClose={handleClose}
      />
    </Box>
  );
}
