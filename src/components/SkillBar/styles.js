import styled from 'styled-components';

export const Container = styled.div`
  max-width: 720px;
  margin-bottom: 7px;
  padding: 10px 0;
  h4 {
    margin-bottom: 10px;
  }
  h4 span.is-2 {
    opacity: 0;
    transition: opacity ease-in-out 50ms;
  }
  &:not(:hover) h4 span.is-2 {
    opacity: .5;
    font-size: 14px;
  }
  h4 span:not(.is-2) {
    font-size: 0;
    transition: font-size ease 120ms;
    margin-left: 10px
  }
  &:hover h4 span {
    font-size: 1rem;
  }
  div {
    opacity: 0;
    position: relative;
    background: #eee;
    height: 1px;
    transition: all ease-out 100ms;
  }
  &:hover div {
    opacity: 1;
  }
  div:after {
    content: '';
    position: absolute;
    background: ${({color}) => color};
    width: 0;
    height: 100%;
    transition: all ease-out 300ms 75ms;
  }
  &:hover div:after {
    content: '';
    position: absolute;
    background: ${({color}) => color};
    width: ${({percent})=> percent+'%'};
    height: 100%;
    box-shadow: ${({color}) => color} 0 0 10px
  }
`;