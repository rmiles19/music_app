import React, { Component, Fragment } from 'react';
import { Header } from 'semantic-ui-react';
import LakeMarySmall from '../images/home/LakeMarySmall.jpg';
import styled from 'styled-components';

class Home extends Component {
  render() {
    return (
      <Fragment>
        <MainContainer>
          <Header as='h1' textAlign='center'>Coda Music Tutor</Header>
        </MainContainer>
      </Fragment>
    );
  }
}

//Styled Components
const MainContainer = styled.div`
  border: 1px solid #000;
  background-image: url(${LakeMarySmall});

`

export default Home;
