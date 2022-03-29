import styled from 'styled-components';

export const GridViewWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 50%;
  justify-content: flex-start;

  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;
