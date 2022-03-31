import React, { useState } from 'react';
import { IModalProps } from '../../types/modal';
import { StyledModal } from './styled';

export const Modal: React.FC<IModalProps> = ({
  children,
  isOpen,
  onBackgroundClick,
}) => {
  const [opacity, setOpacity] = useState<number>(0);

  const afterOpen = (): void => {
    setTimeout(() => {
      setOpacity(1);
    }, 100);
  };

  const beforeClose = (): Promise<void> => {
    return new Promise((resolve) => {
      setOpacity(0);
      setTimeout(resolve, 300);
    });
  };

  return (
    <StyledModal
      afterOpen={afterOpen}
      beforeClose={beforeClose}
      isOpen={isOpen}
      opacity={opacity}
      onBackgroundClick={onBackgroundClick}
      onEscapeKeydown={onBackgroundClick}
    >
      {children}
    </StyledModal>
  );
};
