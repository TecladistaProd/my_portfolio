import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  background: rgba(7, 7, 7, .6);
  z-index: 10;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  padding: 30px;
  opacity: 0;
  position: fixed;
  top: -20vh;
  height: 10vh;
  transition: all ease-out 400ms;
  &.active {
    opacity: 1;
    top: 0px;
    height: 100vh;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: #fff;
  font-size: 2.5rem;
  opacity: .8;
  transition: all ease-out 100ms;
  &:hover {
    opacity: 1;
  }
`

export const CloseBtn = styled.button`
  position: absolute;
  right: 30px;
  opacity: .8;
  top: 30px;
  transition: all ease-out 100ms;
  &:hover {
    opacity: 1;
  }
`