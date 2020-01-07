import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.3rem;
  z-index: 3;
  @media screen and (max-width: 900px) {
    margin-bottom: 2rem;
  }
  &.active {
    position: fixed;
    top: 0;
    left: 0;
    padding: .25rem 2.7rem;
    background-color: rgba(15, 15, 15, .5);
    box-shadow: 0 5px 10px rgba(100, 100, 100, .05);
    @media screen and (max-width: 900px) {
      padding: .2rem 1rem;
    }
  }
`

export const NullableItem = styled.div`
  height: 2.7rem;
  width: 100%;
`

export const Title = styled.h2`
  font-size: 1.2rem;
`

export const IconBtn = styled.button`
  transition: opacity ease-in-out 200ms;
  &:hover {
    opacity: .8;
  }
`