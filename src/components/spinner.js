// import React, { PureComponent } from "react";
import styled from "styled-components";

export default styled.div`
  position: fixed;
  margin: auto;
  top: 20%;
  left: 40%;
  width: 300px;
  height: 300px;
  :before {
    content: "";
    box-sizing: border-box;
    position: absolute;
    height: 120px;
    width: 120px;
    margin: -30px 0 0 -30px;
    border-radius: 50%;
    border-top: 3px solid coral;
    border-right: 3px solid transparent;
    animation: spinner 0.9s linear infinite;
  }
  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }
`;
