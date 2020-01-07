import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  position: fixed;
  z-index: 10;
  top: 20vh;
  left: 50%;
  min-width: 240px;
  min-height: 120px;
  max-width: 45vw;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 5px 1px rgba(225, 225, 225, .2), 0 0 1px 1px rgba(25, 25, 25, .1);
  border: 1px solid rgba(25, 25, 25, .1);
  animation: enterAlert 300ms cubic-bezier(.54,.77,.7,0) forwards;
  h3 {
    margin-bottom: 10px;
  }
  * {
    color: #333;
  }
  button {
    position: absolute;
    top: 5px;
    right: 5px;
    font-weight: 'bold';
    font-size: 1.2rem;
    color: rgba(75, 75, 75, .3);
    &:hover {
      color: rgba(05, 05, 05, .4);
    }
  }
  @keyframes enterAlert {
    from {
      transform: scale(0) translate(-50%, 0);
    }
    to {
      transform: scale(1) translate(-50%, 0);
    }
  }
`;
