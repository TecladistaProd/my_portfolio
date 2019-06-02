import React from "react";

import { Container, Avatar, Links } from "./styled";
import { Consumer } from "../../context/";

import vitor_cv from "../../assets/vitor_cv.pdf";

const Contacts = props => (
  <Container>
    <h1>Vitor Cruz</h1>
    <Consumer>{context => <Avatar src={context.avatar} />}</Consumer>
    <Links>
      <a href="mailto:vitor.cruz@fatec.sp.gov.br">
        <i className="far fa-envelope" />
      </a>
      <a target="_blank" href="https://github.com/tecladistaprod">
        <i className="fab fa-github" />
      </a>
      <a target="_blank" href="https://www.npmjs.com/~tecladistaprod">
        <i className="fab fa-npm" />
      </a>
      <a target="_blank" href="https://medium.com/@vitor.cruz">
        <i className="fab fa-medium" />
      </a>
      <a target="_blank" download="vitor_cv.pdf" href={vitor_cv}>
        <i class="fas fa-user-circle" />
        CV
      </a>
    </Links>
    <h3>Academic Articles</h3>
    <Links direction="column">
      <a
        target="_blank"
        href="http://simtec.fatectq.edu.br/index.php/simtec/article/view/269/219"
      >
        Web Technologies for Native Mobile Development
      </a>
      <a
        target="_blank"
        href="https://revista.fatectq.edu.br/index.php/interfacetecnologica/article/view/476/297"
      >
        The JavaScript Language as an Alternative for the Development of
        Multiplatform Applications
      </a>
    </Links>
  </Container>
);

export default Contacts;
