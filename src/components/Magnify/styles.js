import styled from 'styled-components'

export const ImageContainer = styled.div`
  position: relative;
  cursor: ${(props) => props.actualCursor};
`

export const Image = styled.img`
  max-height: 0;
  max-width: 0;
  transition: all .3s .7s cubic-bezier(.8, .5, .2, 1.4);
  &.active {
    max-height: 87vh;
    max-width: 90vw;
  }
`

export const AbsoluteContainerImg = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
  top: 0;
  left: 0;
  overflow: hidden;
  background: #333;
`

export const AbsoluteImg = styled.img.attrs(props => ({
  style: {
    transform: props.transform
  }
}))`
  box-sizing: border-box;
  top: 0;
  left: 0;
`