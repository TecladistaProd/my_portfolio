import styled from "styled-components";

export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Dancing+Script&display=swap");
  position: relative;
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-family: "Dancing Script", cursive;
  }
`;

export const Avatar = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  background-position: center;
  background-size: cover;
  background-atachment: fixed;
  border-radius: 100%;
  border: solid 5px #4fc3f7;
  background-image: ${props => (props.src ? `url(${props.src})` : "")};
  margin: 1.5rem 0 1rem;
`;

export const Links = styled.div`
  display: flex;
  flex-direction: ${props => (props.direction ? props.direction : "row")};
  flex-wrap: wrap;
  margin: 1rem 0;
  max-width: 720px;
  align-items: center;
  justify-content: center;
  a {
    i {
      font-size: 2rem;
    }
    word-break: break-all;
    color: #333;
    margin: 0 0.5rem;
    :hover {
      opacity: 0.7;
    }
  }
`;
