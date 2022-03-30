import styled from 'styled-components';
import { Colors } from '../../utils/colors';

export const ContainerWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  flex: 1;
  width: 100vw;
  box-shadow: inset 0 0 0 100vmax rgb(0 0 0 / 50%);
  padding-top: 4rem;

  video {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
  }
`;

export const WrapperPages = styled.div`
  width: 50%;
  margin-bottom: 10px;
  flex-direction: row;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    width: 80%;
  }

  p:hover {
    cursor: pointer;
  }
`;

export const Sound = styled.div`
  position: fixed;
  bottom: 12px;
  right: 12px;
  background-color: ${Colors.white};
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  display: flex;
  padding: 8px;
  cursor: pointer;
  width: 40px;
  height: 40px;

  @media screen and (max-width: 768px) {
    border: 2px solid ${Colors.primary};
  }
`;
