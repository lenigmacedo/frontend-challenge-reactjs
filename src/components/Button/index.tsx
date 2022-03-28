import React from 'react';
import { IButtonProps } from '../../types/button';
import { ButtonWrapper } from './styled';

export const Button: React.FC<IButtonProps> = ({ children, onClick }) => {
  return (
    <ButtonWrapper onKeyUp={onClick} onClick={onClick}>
      {children}
    </ButtonWrapper>
  );
};
