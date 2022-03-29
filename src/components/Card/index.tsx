/* eslint-disable camelcase */
import React from 'react';
import { CardWrapper } from './styled';

export const Card: React.FC = ({ children }) => {
  return <CardWrapper>{children}</CardWrapper>;
};
