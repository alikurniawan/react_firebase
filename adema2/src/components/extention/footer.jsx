import React, { Component } from "react";
import { Grid, Button, Card } from "semantic-ui-react";

class footer extends Component {
  state = {};
  render() {
    return (
      <div>
        <Grid columns={3}>
          <Grid.Row>
            <Grid.Column size={4}>Footer</Grid.Column>
            <Grid.Column size={4}>Footer 2</Grid.Column>
            <Grid.Column size={4}>
              <Card.Group>
                <Button circular color="facebook" icon="facebook" />
                <Button circular color="twitter" icon="twitter" />
                <Button circular color="linkedin" icon="linkedin" />
                <Button circular color="google plus" icon="google plus" />
              </Card.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default footer;
