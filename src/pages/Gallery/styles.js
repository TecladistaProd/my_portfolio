import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100%;
  // min-height: 90vh;
  margin-top: 4rem;
  flex-direction: column;
`;


export const Title = styled.h1`
  font-size: 3rem;
  text-shadow: 1px 1px #ddd,
    1.5px 1.5px #bbb,
    2px 2px #999,
    3px 3px #777,
    4px 4px #555,
    5px 5px #333;
`

export const GalleryList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`