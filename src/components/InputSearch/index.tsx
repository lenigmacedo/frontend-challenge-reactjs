import React from 'react';
import { InputWrapper } from './styled';
import SearchIcon from '../../assets/img/search_icon.png';
import { IInputProps } from '../../types/input';

export const InputSearch: React.FC<IInputProps> = ({ onChange, onBlur }) => {
  return (
    <InputWrapper>
      <input onBlur={onBlur} onChange={onChange} type="text" />
      <img src={SearchIcon} alt="Search Icon" />
    </InputWrapper>
  );
};
