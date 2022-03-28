import styled from 'styled-components';
import { Colors } from '../../utils/colors';

export const InputWrapper = styled.div`
  width: 50%;
  border: 2px solid ${Colors.borderColors};
  padding: 6px 6px;
  border-radius: 6px;
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  background-color: ${Colors.inputBackground};
  align-items: center;
  margin-bottom: 2rem;

  input {
    width: 100%;
    background: transparent;
    border: none;
    color: ${Colors.primary};
  }
`;
