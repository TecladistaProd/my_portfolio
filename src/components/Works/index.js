import React from "react";

import { Box } from "./styled";

const Works = props => (
  <Box>
    <h2>
      Company: <span className="notBold">{props.company}</span>
    </h2>
    <h3>
      Position: <span className="notBold">{props.position}</span>
    </h3>
    <h4>
      {props.initialDate} - {props.finalDate}
    </h4>
    <p>
      <strong>Description: </strong>
      {props.description}
    </p>
  </Box>
);

export default Works;
