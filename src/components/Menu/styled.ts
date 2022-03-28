import styled from 'styled-components';

export const MenuWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  align-self: stretch;
  flex-direction: row;
  flex-wrap: wrap;
  height: fit-content;

  button {
    margin-right: 1rem;
    margin-bottom: 1rem;
  }

  & button:last-child {
    margin-right: 0rem;
  }
`;
