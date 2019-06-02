import React, { PureComponent } from "react";

import { Link } from "react-router-dom";

import { Avatar, Container } from "./styled";

import Works from "../../components/Works/";

import { Consumer } from "../../context/";

class Home extends PureComponent {
  render() {
    return (
      <Container>
        <Consumer>{context => <Avatar src={context.avatar} />}</Consumer>
        <p style={{ marginTop: "2rem" }}>
          My name is Vitor da Silva Cruz, i was born in Araraquara SP in Brazil,
          i love technology and develop, always looking be updated and know more
          and more.
        </p>
        <p>
          <strong>Technologist in System for Internet</strong>, graduated in
          2019 by Fatec of Taquaritinga city, an graduation course with classes
          of algorithms, data structure, mathematics, front end development,
          back end development, database development, mobile development and
          among others, but focused in web development.
        </p>
        <p>
          If you would like to know what languages, tools and others i know just
          click <Link to="/skills">Here</Link>
        </p>
        <Works
          company="Agência 56k"
          position="Full Stack JavaScript Developer"
          initialDate="09/2018"
          finalDate="Present"
          description="Agência 56k is a telephone solution company, working with system development too. I develop a communication system, tracking and soon transport control, between driver and company. Beyond this system, i created an proxy in NodeJS to centralize all the services that the company offers."
        />
        <Works
          company="Ong Anjos de Rua - Taquaritinga"
          position="Mobile Developer"
          initialDate="04/2017"
          finalDate="07/2017"
          description="Anjos de rua is an NGO that rescues pet animals at risk and take care of them like food and looking for a new sweet home. In university we do a Volunteer work in this NGO, working to create a system to help them to work better. I was responsible for the development of the mobile application."
        />
      </Container>
    );
  }
}

export default Home;
