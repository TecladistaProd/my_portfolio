import styled from "styled-components";

export const Container = styled.div`
  margin: 1.5rem 0;
  width: 100%;
`;

export const Bar = styled.div`
  position: relative;
  height: 1px;
  width: ${props => (props.percent ? props.percent + "%" : "0%")};
  transition: width 1.3s ease-in-out;
  background: ${props => (props.color ? props.color : "#2187e7")};
  box-shadow: 0px 0px 10px 1px rgba(0, 198, 255, 0.4);
`;

export const Bars = styled.div`
  position: relative;
  height: 1px;
  margin: 2px 0;
  width: 100%;
  background: ${props => (props.color ? props.color : "#333")};
`;
