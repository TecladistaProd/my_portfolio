import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 87vh;
  margin-top: 2rem;
  align-items: center;
  justify-content: center;
  div {
    max-width: 90vw;
    width: 640px;
    height: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    background: #eee;
    box-shadow:
      0 0 10px 1px rgba(255, 255, 255, 0.1),
      1px 1px 4px rgba(255, 255, 255, 0.2),
      2px 2px 3px rgba(255, 255, 255, 0.3),
      3px 3px 2px rgba(255, 255, 255, 0.4),
      4px 4px 1px rgba(255, 255, 255, 0.5),
      5px 5px 0 rgba(255, 255, 255, 0.6),
      5px 5px 50px rgba(255, 255, 255, 0.25)
    ;
    a {
      text-decoration: none;
      color: #333;
    }
  }
`;
