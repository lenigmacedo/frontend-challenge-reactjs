/* eslint-disable no-param-reassign */
import React, { useRef, useEffect } from 'react';
import { useField } from '@unform/core';
import { IFormInputprops } from '../../types/input';
import { InputWrapper, LabelWrapper, Error } from './styled';

export const Input: React.FC<IFormInputprops> = ({ name, type, label }) => {
  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const { fieldName, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => {
        return ref.current.value;
      },
      setValue: (ref, valueS) => {
        ref.current.value = valueS;
      },
      clearValue: (ref) => {
        ref.current.value = '';
      },
    });
  }, []);

  return (
    <>
      <LabelWrapper error={error} htmlFor={name}>
        {label}
      </LabelWrapper>
      <InputWrapper error={error} ref={inputRef} name={name} type={type} />
      {error && <Error>{error}</Error>}
    </>
  );
};
