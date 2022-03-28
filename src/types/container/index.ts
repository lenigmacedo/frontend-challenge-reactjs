import { ChangeEvent, ReactNode } from 'react';

export interface IContainerProps {
  children?: ReactNode;
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onInputBlur: (event: ChangeEvent<HTMLInputElement>) => void;
}
