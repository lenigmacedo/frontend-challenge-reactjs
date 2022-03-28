import React from 'react';
import { ContainerWrapper } from './styled';
import backgroundVideo from '../../assets/videos/background.mp4';
import { Menu } from '../Menu';
import { InputSearch } from '../InputSearch';
import { IContainerProps } from '../../types/container';

export const Container: React.FC<IContainerProps> = ({
  children,
  onInputChange,
  onInputBlur,
}) => {
  return (
    <ContainerWrapper>
      <video autoPlay muted loop>
        <source src={backgroundVideo} />
      </video>

      <Menu />

      <InputSearch onBlur={onInputBlur} onChange={onInputChange} />

      {children}
    </ContainerWrapper>
  );
};
