import styled from "styled-components";

export const Avatar = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  background-position: center;
  background-size: cover;
  background-atachment: fixed;
  border-radius: 100%;
  margin-bottom: 0.3rem;
  border: solid 5px #4fc3f7;
  background-image: ${props => (props.src ? `url(${props.src})` : "")};
  :before {
    content: "It's a Me Vitor";
    color: #fff;
    font-size: 2rem;
    position: absolute;
    top: -100px;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.25s ease-in-out, top 0.3s 0.05s ease-in-out;
  }
  :hover {
    :before {
      opacity: 1;
      top: 0;
    }
  }
`;

export const Container = styled.div`
  // background: #333;
  width: 90%;
  max-width: 720px;
  display: flex;
  flex-direction: column;
  & > p {
    margin: 0.5rem 0;
    padding: 0 0.7rem;
    a {
      text-decoration: none;
      color: #039be5;
    }
  }
  @media screen and (max-width: 700px) {
    align-items: center;
  }
`;
