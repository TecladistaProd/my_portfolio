//import modules
import React, { Component, Fragment, Suspense } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import { Helmet } from "react-helmet";

//import components
import Header from "./components/Header/";
import Spinner from "./components/spinner";

//import pages
import Home from "./pages/Home/";
const Contacts = React.lazy(() => import("./pages/Contacts/"));
const Projects = React.lazy(() => import("./pages/Projects/"));
const Skills = React.lazy(() => import("./pages/Skills/"));

import { ContextProvider, Consumer } from "./context/";

import fav from "./assets/js_fav.png";

export default class App extends Component {
  state = {
    activatedMenu: false,
    moving: false,
    px0: null,
    px1: null,
    py0: null,
    py1: null
  };
  handleTouchStart = () => {
    this.setState({ moving: true });
  };
  handleTouchMove = touchMoveEvent => {
    let touch = touchMoveEvent.changedTouches[0];
    let { px0, px1, py0, py1 } = this.state;

    if (!px0) px0 = touch.screenX;
    if (!py0) py0 = touch.screenY;

    px1 = touch.screenX;
    py1 = touch.screenY;
    this.setState({ px0, px1, py0, py1 });
  };
  handleTouchEnd = () => {
    let { moving, px0, px1, py0, py1, activatedMenu } = this.state;
    // console.log(px1 > px0, px1 > px0 + 30);
    console.log();
    if (px1 > px0 && px1 > px0 + 50 && Math.abs(py0 - py1) < 30) {
      activatedMenu = true;
    } else if (px1 < px0 && px0 > px1 + 50) {
      activatedMenu = false;
    }
    moving = false;
    px0 = px1 = py0 = py1 = null;
    this.setState({ moving, px0, px1, py0, py1, activatedMenu });
  };
  render() {
    return (
      <Fragment>
        <GlobalStyle activatedMenu={this.state.activatedMenu} />
        <Helmet>
          <link rel="icon" href={fav} />
        </Helmet>
        <Router>
          <Container
            onTouchStart={this.handleTouchStart}
            onTouchMove={this.handleTouchMove}
            onTouchEnd={this.handleTouchEnd}
          >
            <Header
              active={this.state.activatedMenu}
              onActive={activatedMenu => this.setState({ activatedMenu })}
            />
            <Content>
              <Suspense fallback={<Spinner />}>
                <Switch>
                  <ContextProvider>
                    <Route exact path="/" component={Home} />
                    <Route path="/skills" component={Skills} />
                    <Route path="/contacts" component={Contacts} />
                    <Route path="/projects" component={Projects} />
                  </ContextProvider>
                </Switch>
              </Suspense>
            </Content>
          </Container>
        </Router>
      </Fragment>
    );
  }
}

const GlobalStyle = createGlobalStyle`
  @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.min.css");
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
  }
  html,
  body,
  #app {
    position: relative;
    width: 100%;
    min-height: 100vh;
    transition: overflow 0.4s;
    overflow: ${props => (props.activatedMenu ? "hidden" : "auto")};
  }
  #app {
    transition: margin-left .5s, overflow 0.5s;
    margin-left: ${props => (props.activatedMenu ? "250px" : "0")};
  }
  @media screen and (max-width: 700px) {
    #app {
      transition: margin-left .5s, overflow 0.5s;
      margin-left: ${props => (props.activatedMenu ? "200px" : "0")};
    } 
  }
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: #f9f8f8;
`;

const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 1.5rem 2rem;
`;
