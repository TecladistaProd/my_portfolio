import styled from "styled-components";

export const Rows = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 2rem;
  @media screen and (max-width: 700px) {
    justify-content: center;
    align-items: center;
  }
`;

export const Column = styled.div`
  display: block;
  max-width: 90%;
  min-width: 400px;
  margin: 0.7rem;
  padding: 0.7rem;
  h3 {
    margin-top: 1.3rem;
  }
`;
