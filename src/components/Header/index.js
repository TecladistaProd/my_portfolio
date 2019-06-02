import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

import { Header, Menu } from "./styled";

function HeaderComp({ onActive, active }) {
  const [hist, setHist] = useState(
    location.hash.replace("#", "").replace(/\?\S+$/gi, "")
  );
  const clickMenu = str => {
    setHist(str);
    onActive(false);
    let pageTitle = "About Me";
    let page = "/";
    switch (str) {
      case "/":
        pageTitle = "About Me";
        page = "/";
        break;
      case "/skills":
        pageTitle = "My Skills";
        page = "/skills";
        break;
      case "/projects":
        pageTitle = "My Projects";
        page = "/projects";
        break;
      case "/contacts":
        pageTitle = "Contact Me";
        page = "/contacts";
        break;
      default:
        pageTitle = "About Me";
        page = "/";
        break;
    }
    window.gtag("config", "UA-124805508-1", {
      page_title: pageTitle,
      page_path: page
    });
  };

  return (
    <Fragment>
      <Header>
        <h2>Vitor Cruz</h2>
        <button onClick={onActive.bind(null, true)}>
          <i className="fas fa-bars" />
        </button>
      </Header>
      <Menu active={active}>
        <a className="closebtn" onClick={onActive.bind(null, false)}>
          &times;
        </a>
        <Link
          to="/"
          disable={(hist == "/").toString()}
          className={hist == "/" ? "active" : ""}
          onClick={clickMenu.bind(null, "/")}
        >
          About
        </Link>
        <Link
          to="/skills"
          disable={(!!hist.match("/skills")).toString()}
          className={!!hist.match("/skills") ? "active" : ""}
          onClick={clickMenu.bind(null, "/skills")}
        >
          Skills
        </Link>
        <Link
          to="/contacts"
          disable={(!!hist.match("/contacts")).toString()}
          className={!!hist.match("/contacts") ? "active" : ""}
          onClick={clickMenu.bind(null, "/contacts")}
        >
          Contacts
        </Link>
        <Link
          to="/projects"
          disable={(!!hist.match("/projects")).toString()}
          className={!!hist.match("/projects") ? "active" : ""}
          onClick={clickMenu.bind(null, "/projects")}
        >
          Projects
        </Link>
      </Menu>
    </Fragment>
  );
}

export default HeaderComp;
