import { ChangeEventHandler } from 'react';

export interface ISearchBoxProps {
  label: string;
  searchTerm: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
}
