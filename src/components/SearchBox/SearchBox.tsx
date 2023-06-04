import TextField from '@mui/material/TextField';
import { ISearchBoxProps } from '../../models/ISearchBoxProps';

export default function SearchBox({
  label,
  searchTerm,
  handleChange,
}: ISearchBoxProps) {
  return (
    <TextField
      label={label}
      value={searchTerm}
      onChange={handleChange}
      size='small'
      className='mb-4'
      inputProps={{ className: 'text-sm' }}
      InputLabelProps={{
        className: 'text-sm',
      }}
    />
  );
}
