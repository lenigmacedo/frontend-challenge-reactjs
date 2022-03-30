import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContainerWrapper, Sound, WrapperPages } from './styled';
import backgroundVideo from '../../assets/videos/background.mp4';
import { Menu } from '../Menu';
import { InputSearch } from '../InputSearch';
import { IContainerProps } from '../../types/container';
import { IReduxState } from '../../types/store';
import sound from '../../assets/img/sound.png';
import noSound from '../../assets/img/no-sound.png';
import { handleSound } from '../../store/actions/config';

export const Container: React.FC<IContainerProps> = ({
  children,
  onInputChange,
  onInputBlur,
  previousPage,
  nextPage,
  onNextPage,
  onPreviousPage,
}) => {
  const config = useSelector((state: IReduxState) => state.config);
  const dispatch = useDispatch();

  return (
    <ContainerWrapper>
      <video autoPlay muted loop>
        <source src={backgroundVideo} />
      </video>

      <Sound onClick={() => dispatch(handleSound(!config.sound))}>
        {config.sound ? (
          <img src={noSound} alt="Desabilitar som" />
        ) : (
          <img src={sound} alt="Habilitar som" />
        )}
      </Sound>

      <Menu />

      <InputSearch onBlur={onInputBlur} onChange={onInputChange} />

      <WrapperPages>
        {previousPage && (
          <p onClick={() => onPreviousPage()}>{'<'}Página anterior</p>
        )}
        {nextPage && <p onClick={() => onNextPage()}>Próxima página {'>'}</p>}
      </WrapperPages>

      {children}
    </ContainerWrapper>
  );
};
