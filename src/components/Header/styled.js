import styled from "styled-components";

export const Header = styled.header`
  position: relative;
  width: 100%;
  padding: 0.2rem 1.7rem;
  background-color: #03a9f4;
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 1rem;
    border-radius: 100%;
    outline: none;
  }
  button:hover {
    background: rgba(25, 25, 25, 0.2);
  }
  button:active {
    opacity: 0.7;
  }
  .fas {
    color: #fff;
    font-size: 1.4rem;
  }
`;

export const Menu = styled.div`
  position: fixed;
  height: 100%;
  width: ${props => (props.active ? "250px" : "0")};
  opacity: ${props => (props.active ? "1" : ".2")};
  top: 0;
  right: 0;
  z-index: 100;
  background: #121212;
  overflow-x: hidden;
  padding-top: 60px;
  transition: width 0.5s, opacity 0.3s;
  display: flex;
  flex-direction: column;
  * {
    color: #fff;
  }
  a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    transition: 0.3s;
    cursor: pointer;
  }
  a:hover,
  a.active {
    color: #f1f1f1;
  }
  a.active {
    cursor: default;
  }
  .closebtn {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
  }
  @media screen and (max-width: 700px) {
    width: ${props => (props.active ? "200px" : "0")};
    .sidenav {
      padding-top: 15px;
    }
    .sidenav a {
      font-size: 18px;
    }
  }
`;
