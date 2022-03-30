import styled, { keyframes } from 'styled-components';

const opacityAnimation = keyframes`
  0%{ opacity: 1 }
  100% {opacity: 0 }
`;

export const LoadingStyled = styled.div`
  width: 200px;
  height: 200px;
  display: inline-block;
  overflow: hidden;
  background: transparent;

  .loading-wrapper {
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateZ(0) scale(1);
    backface-visibility: hidden;
    transform-origin: 0 0;

    div {
      box-sizing: content-box;
    }

    & > div {
      left: 95px;
      top: 54px;
      position: absolute;
      animation: ${opacityAnimation} linear 1s infinite;
      background: #f9c200;
      width: 10px;
      height: 12px;
      border-radius: 4.08px / 4.08px;
      transform-origin: 5px 46px;
    }

    & > div:nth-child(1) {
      transform: rotate(0deg);
      animation-delay: -0.9166666666666666s;
      background: #f9c200;
    }

    & > div:nth-child(2) {
      transform: rotate(30deg);
      animation-delay: -0.8333333333333334s;
      background: #f9c200;
    }

    & > div:nth-child(3) {
      transform: rotate(60deg);
      animation-delay: -0.75s;
      background: #f9c200;
    }

    & > div:nth-child(4) {
      transform: rotate(90deg);
      animation-delay: -0.6666666666666666s;
      background: #f9c200;
    }

    & > div:nth-child(5) {
      transform: rotate(120deg);
      animation-delay: -0.5833333333333334s;
      background: #f9c200;
    }

    & > div:nth-child(6) {
      transform: rotate(150deg);
      animation-delay: -0.5s;
      background: #f9c200;
    }

    & > div:nth-child(7) {
      transform: rotate(180deg);
      animation-delay: -0.4166666666666667s;
      background: #f9c200;
    }

    & > div:nth-child(8) {
      transform: rotate(210deg);
      animation-delay: -0.3333333333333333s;
      background: #f9c200;
    }

    & > div:nth-child(9) {
      transform: rotate(240deg);
      animation-delay: -0.25s;
      background: #f9c200;
    }

    & > div:nth-child(10) {
      transform: rotate(270deg);
      animation-delay: -0.16666666666666666s;
      background: #f9c200;
    }

    & > div:nth-child(11) {
      transform: rotate(300deg);
      animation-delay: -0.08333333333333333s;
      background: #f9c200;
    }

    & > div:nth-child(12) {
      transform: rotate(330deg);
      animation-delay: 0s;
      background: #f9c200;
    }
  }
`;