import styled from 'styled-components';
import { Colors } from '../../utils/colors';

export const CardWrapper = styled.div`
  margin-right: 20px;
  border: 1px solid ${Colors.borderColors};
  border-radius: 6px;
  padding: 8px;
  margin-bottom: 1.5rem;
  flex: 1;
  white-space: nowrap;
  height: fit-content;

  h1 {
    margin-bottom: 10px;
    font-weight: bold;
  }

  p {
    font-size: 14px;
    margin-bottom: 8px;
  }
`;
