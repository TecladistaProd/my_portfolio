import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  background: rgba(20, 20, 20, .8);
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  &.active {
    animation: containerAnimation .7s 1 ease forwards;
    /* opacity: 1;
    z-index: 5; */
  }
  @keyframes containerAnimation {
    from {
      opacity: 0;
      z-index: -1;
    }
    to {
      opacity: 1;
      z-index: 5;
    }  
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 3.5rem;
  font-size: 0;
  font-weight: 'bold';
  color: #fff;
  transition: opacity, text-shadow 300ms ease-out;
  z-index: 1;
  &:hover {
    opacity: .8;
  }
  &:active {
    text-shadow: -2px -2px 0px #2196f3, 1px 1px 0px #2196f3, 3px 3px 0px #0d47a1;
  }
  &.active {
    animation: closeBtnAnimation .5s .5s 1 ease-in forwards;
    /* text-shadow: -1px -1px 0px #2196f3, 3px 3px 0px #2196f3, 6px 6px 0px #0d47a1;
    font-size: 2rem; */
  }
  @keyframes closeBtnAnimation {
    0% {
      text-shadow: unset;
      font-size: 0;
    }
    75% {
      font-size: 2.5rem;
      text-shadow: -2px -2px 0px #2196f3, 1px 1px 0px #2196f3, 3px 3px 0px #0d47a1;
    }
    100% {
      text-shadow: -1px -1px 0px #2196f3, 3px 3px 0px #2196f3, 6px 6px 0px #0d47a1;
      font-size: 2rem;
    }  
  }
`
