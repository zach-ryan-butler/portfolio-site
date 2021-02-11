import { useState } from 'react';

export const useProjects = () => {
  const [value, setValue] = useState('');

  const handleChange = ({ target }) => {
    setValue(target.value);
  };

  return [value, handleChange];
};
