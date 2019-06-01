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
