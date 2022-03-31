import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MenuWrapper } from './styled';
import { Button } from '../Button';

export const Menu: React.FC = () => {
  const navigate = useNavigate();

  return (
    <MenuWrapper>
      <Button onClick={() => navigate('/')}>Planets</Button>
      <Button onClick={() => navigate('/films')}>Films</Button>
      <Button onClick={() => navigate('/people')}>People</Button>
      <Button onClick={() => navigate('/vehicles')}>Vehicles</Button>
      <Button onClick={() => navigate('/species')}>Species</Button>
      <Button onClick={() => navigate('/starships')}>Starships</Button>
    </MenuWrapper>
  );
};
