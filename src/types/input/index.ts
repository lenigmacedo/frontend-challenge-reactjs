import { ChangeEvent, HTMLInputTypeAttribute } from 'react';

export interface IInputProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface IFormInputprops {
  label: string;
  name: string;
  type: HTMLInputTypeAttribute;
}
