import React, { Component, Fragment } from 'react';
import { Image } from 'semantic-ui-react';
import { Header } from 'semantic-ui-react';

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Header as='h1' textAlign='center'>Music App</Header>
        <Image fluid src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Houghton_MS_Mus_99.2_-_Schubert%2C_Auf_dem_Strom.jpg/800px-Houghton_MS_Mus_99.2_-_Schubert%2C_Auf_dem_Strom.jpg"/>
      </Fragment>
    );
  }
}

export default Home;
