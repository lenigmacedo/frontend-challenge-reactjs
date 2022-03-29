import styled from 'styled-components';

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
