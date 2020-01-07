import React from 'react';

import { Container, List, ListItem, ListItemTitle } from './styles';

function HomeInfos() {
  return (
    <Container>
      <List>
        <ListItem>
          <ListItemTitle>
            Web Development
          </ListItemTitle>
          Development of websites, webservers, microservices, rest apis, pwa and others.
        </ListItem>
        <ListItem>
          <ListItemTitle>
            Mobile Development
          </ListItemTitle>
          Development of hybrid apps, pwa, native apps (react native or flutter).
        </ListItem>
        <ListItem>
          <ListItemTitle>
            Desktop Development
          </ListItemTitle>
          Development of desktop apps (electron)
        </ListItem>
      </List>
    </Container>
  );
}

export default HomeInfos
