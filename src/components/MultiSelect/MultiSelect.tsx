import Chip from '@mui/material/Chip';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { IMultiSelectProps } from '../../models/IMultiSelectProps';

export default function MultiSelect({
  placeholder,
  selectedValues,
  handleChange,
  menuItems,
}: IMultiSelectProps) {
  return (
    <FormControl>
      <Select
        multiple
        size='small'
        className='mb-4 text-sm'
        displayEmpty
        value={selectedValues}
        onChange={handleChange}
        renderValue={(selected) =>
          selected.length ? (
            <div>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </div>
          ) : (
            placeholder
          )
        }
      >
        {menuItems.map((item) => (
          <MenuItem value={item.value} key={item.value} className='text-sm'>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
