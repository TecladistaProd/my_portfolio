import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1000px) {
    margin-right: 1.5rem;
    margin-left: .5rem;
  }
  @media screen and (max-width: 720px) {
    margin-right: .7rem;
    margin-left: .1rem;
  }
`

export const FirstRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`

export const InfoHeader = styled.div`
  display: flex;
  align-items: flex-start;
  align-self: stretch
  flex-direction: column;
  @media screen and (max-width: 900px) {
    margin-bottom: 3rem;
  }
`

export const Title = styled.h1`
  margin-top: 10px;
  font-size: 3.5rem;
  max-width: 450px;
  // word-break: break-all;
`

export const ContactButton = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  color: #fff;
  text-decoration: none;
  z-index: 1
  padding: .7rem;
  transition: all ease-in 200ms 150ms;
  margin-top: 3rem;
  &:after {
    content: '';
    width: 100%;
    height: 100%;
    right: 0;
    top: 0;
    position: absolute;
    background: #0C34FF;
    z-index: -1;
    transition: all ease-out 300ms;
  }
  &:hover:after {
    width: 80%;
  }
  &.active {
    opacity: 0;
    transform: scale(.02);
  }
  &.active:after {
    width: 0%;
  }
`

export const Avatar = styled.img`
  width: 380px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 1px;
  box-shadow: 0 6.7px 18.5px -13px rgba(120, 120, 120, 0.22),
    0 12.3px 30px -13px rgba(120, 120, 120, 0.151),
    0 40px 61px -13px rgba(120, 120, 120, 0.118);

  @media screen and (max-width: 900px) {
    width: 100%;
  }
`