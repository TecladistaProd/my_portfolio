import React from "react";

import { Helmet } from "react-helmet";

import { Rows, Column } from "./styled";

import Bar from "../../components/Bar/";
import { Consumer } from "../../context/";

const Skills = () => (
  <div>
    <Helmet>
      <title>My Skills</title>
    </Helmet>
    <h1>Here we go know my Skills</h1>
    <Rows>
      <Column>
        <h2>Languages and Frameworks</h2>
        <h3>Languages</h3>
        <Bar percent={90} label="HTML5" color="#3f51b5" backcolor="#c62828" />
        <Bar percent={90} label="CSS3" color="#3f51b5" backcolor="#c62828" />
        <Bar
          percent={95}
          label="JavaScript"
          color="#3f51b5"
          backcolor="#c62828"
        />
        <Bar percent={95} label="NodeJS" color="#3f51b5" backcolor="#c62828" />
        <Bar percent={65} label="PHP" color="#3f51b5" backcolor="#c62828" />
        <Bar percent={60} label="Dart" color="#3f51b5" backcolor="#c62828" />
        <Bar percent={50} label="Ruby" color="#3f51b5" backcolor="#c62828" />
        <Bar percent={40} label="Python" color="#3f51b5" backcolor="#c62828" />
        <Bar percent={20} label="Java" color="#3f51b5" backcolor="#c62828" />
        <h3>Frameworks and Libs</h3>
        <Bar percent={95} label="React" color="#3f51b5" backcolor="#c62828" />
        <Bar percent={85} label="SASS" color="#3f51b5" backcolor="#c62828" />
        <Bar percent={70} label="Vue" color="#3f51b5" backcolor="#c62828" />
        <Bar percent={30} label="Angular" color="#3f51b5" backcolor="#c62828" />
        <h3>Mobile</h3>
        <Bar
          percent={90}
          label="React Native"
          color="#3f51b5"
          backcolor="#c62828"
        />
        <Bar percent={70} label="Flutter" color="#3f51b5" backcolor="#c62828" />
        <Bar percent={50} label="Java" color="#3f51b5" backcolor="#c62828" />
        <Bar
          percent={30}
          label="NativeScript"
          color="#3f51b5"
          backcolor="#c62828"
        />
        <Bar percent={30} label="Weex" color="#3f51b5" backcolor="#c62828" />
        <h3>Desktop</h3>
        <Bar
          percent={70}
          label="ElectronJS"
          color="#3f51b5"
          backcolor="#c62828"
        />
      </Column>
      <Column>
        <h2>Tools, Bundlers and Transpilers</h2>
        <Bar
          percent={85}
          label="ParcelJS"
          color="#43a047"
          backcolor="#c62828"
        />
        <Bar percent={75} label="Webpack" color="#43a047" backcolor="#c62828" />
        <Bar percent={45} label="BabelJS" color="#43a047" backcolor="#c62828" />
        <Bar
          percent={65}
          label="TypeScript"
          color="#43a047"
          backcolor="#c62828"
        />
        <Bar percent={75} label="NPM" color="#43a047" backcolor="#c62828" />
        <Bar percent={65} label="Yarn" color="#43a047" backcolor="#c62828" />
        <Bar percent={70} label="Git" color="#43a047" backcolor="#c62828" />
        <Bar percent={60} label="Docker" color="#43a047" backcolor="#c62828" />
        <Bar percent={45} label="Pip" color="#43a047" backcolor="#c62828" />
      </Column>
      <Column>
        <h2>Services, APIs and Databases</h2>
        <Bar
          percent={70}
          label="Firebase"
          color="#607d8b"
          backcolor="#c62828"
        />
        <Bar percent={70} label="Heroku" color="#607d8b" backcolor="#c62828" />
        <Bar
          percent={80}
          label="Terminal"
          color="#607d8b"
          backcolor="#c62828"
        />
        <Bar
          percent={50}
          label="Google Cloud"
          color="#607d8b"
          backcolor="#c62828"
        />
        <Bar
          percent={40}
          label="Azure Cloud"
          color="#607d8b"
          backcolor="#c62828"
        />
        <Bar
          percent={55}
          label="Google Cloud API"
          color="#607d8b"
          backcolor="#c62828"
        />
        <Bar percent={80} label="MongoDB" color="#607d8b" backcolor="#c62828" />
        <Bar percent={30} label="RealmDB" color="#607d8b" backcolor="#c62828" />
        <Bar percent={40} label="SQLite" color="#607d8b" backcolor="#c62828" />
        <Bar percent={70} label="MYSQL" color="#607d8b" backcolor="#c62828" />
        <Bar
          percent={70}
          label="OracleDB"
          color="#607d8b"
          backcolor="#c62828"
        />
        <Bar
          percent={40}
          label="PostGreSQL"
          color="#607d8b"
          backcolor="#c62828"
        />
        <Bar percent={30} label="RealmDB" color="#607d8b" backcolor="#c62828" />
      </Column>
    </Rows>
  </div>
);

export default Skills;
