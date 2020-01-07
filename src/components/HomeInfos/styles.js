import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  border-top: 1px solid rgba(255, 255, 255, .15);
  width: 100%;
  @media screen and (max-width: 900px) {
    border-top: none;
  }
`;

export const List = styled.ul`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    justify-content: unset;
  }
`

export const ListItem = styled.li`
  position: relative;
  list-style: none;
  width: 320px;
  opacity: .3;
  margin-bottom: 0;
  &:hover {
    opacity: 1;
  }
  &:hover:after {
    position: absolute
    content: '';
    border-top: 5px solid #0C34FF;
    top: calc(-2rem - 1px);
    left: 0;
    width: 28px;
    height: 100%;
  }
  @media screen and (max-width: 900px) {
    opacity: 1;
    width: 100%;
    &:not(:first-child) {
      margin-top: 2rem;
    }
    &:hover:after {
      content: unset;
    }
  }
`

export const ListItemTitle = styled.h3`
  margin-bottom: 12px
`
