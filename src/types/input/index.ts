import { ChangeEvent } from 'react';

export interface IInputProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: ChangeEvent<HTMLInputElement>) => void;
}
