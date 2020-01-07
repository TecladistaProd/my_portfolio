import styled from 'styled-components';

import bound from 'react-bounds.js'

export const Container = styled(bound.div({ threshold: [.35] }))`
  min-width: 350px;
  min-height: 200px;
  margin: 7px 0;
  border-radius: 5px;
  background: #fff;
`

export const Img = styled.div`
  width: 350px;
  height: 200px;
  background: ${ ({ image }) => 'url('+image+')'} center no-repeat;
  background-size: cover;
  /* margin: 7px 0; */
  border-radius: 5px;
  transition: all ease-out 200ms;
  animation: enterImage 700ms forwards;
  &:hover {
    box-shadow:
      0 7px 5.3px rgba(250, 250, 250, 0.08),
      0 5px 12px rgba(250, 250, 250, 0.147)
  }
  &:active {
    opacity: .8;
  }
  @keyframes enterImage {
    from {
      opacity: 0.5;
      filter: blur(10px);
    }
    to {
      opacity: 1;
      filter: blur(0);
    }
  }
`;
