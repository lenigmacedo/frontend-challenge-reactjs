import styled from 'styled-components';

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
