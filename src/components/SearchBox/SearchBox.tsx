import { ChangeEventHandler } from 'react';

interface SearchBoxProps {
  placeholder: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
}

export default function SearchBox({
  placeholder,
  handleChange,
}: SearchBoxProps) {
  return (
    <input
      className='search'
      type='search'
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
}
