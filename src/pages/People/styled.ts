import styled from 'styled-components';
import { Colors } from '../../utils/colors';

export const NewPeople = styled.div`
  position: fixed;
  bottom: 60px;
  right: 12px;
  background-color: ${Colors.white};
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  display: flex;
  padding: 8px;
  height: 40px;
  width: 40px;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    border: 2px solid ${Colors.primary};
  }

  p {
    font-size: 42px;
    color: ${Colors.black};
  }
`;
