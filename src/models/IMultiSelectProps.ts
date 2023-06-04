import { SelectChangeEvent } from '@mui/material';
import { IMenuItem } from './IMenuItem';

export interface IMultiSelectProps {
  placeholder: string;
  selectedValues: never[];
  handleChange: (
    event: SelectChangeEvent<never[]>,
    child: React.ReactNode
  ) => void;
  menuItems: Array<IMenuItem>;
}
