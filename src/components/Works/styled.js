import styled from "styled-components";

export const Box = styled.div`
  margin: 0.7rem 0;
  min-width: 320px;
  max-width: 640px;
  border: 1.2px solid rgba(25, 25, 25, 0.2);
  border-radius: 5px;
  padding: 1rem 1.5rem;
  margin-left: 0.7rem;
  box-shadow: #aaa 1px 1px 0.7px;
  background: #fff;
  .notBold {
    font-weight: 400;
  }
  h1,
  h2,
  h3,
  h4 {
    :not(:first-child) {
      margin: 0.8rem 0;
    }
  }
`;
