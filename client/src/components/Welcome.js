import React, { Component, Fragment } from 'react';
import { Grid, Icon, Segment} from 'semantic-ui-react';




class Welcome extends Component {
  render() {
    return (
      <Segment>
        <Grid  columns='three' celled='internally' >
          <Grid.Row>
            <Grid.Column>
              <Icon Icon name='home' size='massive'/>
            </Grid.Column>
            <Grid.Column>
              <Icon Icon name='home' size='massive'/>
            </Grid.Column>
            <Grid.Column>
              <Icon Icon name='home' size='massive'/>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <Icon Icon name='home' size='massive'/>
            </Grid.Column>
            <Grid.Column>
              <Icon Icon name='home' size='massive'/>
            </Grid.Column>
            <Grid.Column>
              <Icon Icon name='home' size='massive'/>
            </Grid.Column>
          </Grid.Row>
          
          <Grid.Row>
            <Grid.Column>
              <Icon Icon name='home' size='massive'/>
            </Grid.Column>
            <Grid.Column>
              <Icon Icon name='home' size='massive'/>
            </Grid.Column>
            <Grid.Column>
              <Icon Icon name='home' size='massive'/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      
    );
  }
}

export default Welcome;