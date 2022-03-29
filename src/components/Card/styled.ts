import styled from 'styled-components';
import { Colors } from '../../utils/colors';

export const CardWrapper = styled.div`
  margin: 0px 10px;
  border-radius: 6px;
  padding: 8px;
  margin-bottom: 1.5rem;
  flex: 1;
  white-space: nowrap;
  height: fit-content;
  background-color: ${Colors.white};
  color: ${Colors.black};
  max-width: 100%;
  justify-content: space-between;

  p {
    margin-bottom: 8px;

    @media screen and (max-width: 768px) {
      white-space: break-spaces;
      margin-bottom: 8px;
    }
  }

  h1 {
    margin-bottom: 10px;
    font-weight: bold;
  }

  div {
    font-size: 16px;
    margin-bottom: 10px;
    flex-wrap: wrap;
    display: flex;
    align-items: baseline;

    span {
      display: contents;
    }

    span > button {
      font-size: 12px;
      border-radius: 6px;
      background: transparent;
      border: 1px solid ${Colors.black};
      margin: 0 5px 5px 5px;
      padding: 3px 2px;
      color: ${Colors.black};

      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;
