import React, { Component } from "react";
import {Card} from 'semantic-ui-react';
import PageController from "../controller/pageController";

class help extends Component {
  state = {};
  render() {
    return (
      <div>
        <PageController>
          <Card>
          <Card.Group>
            <Card fluid color="red" header="Option 1" />
            <Card fluid color="orange" header="Option 2" />
            <Card fluid color="yellow" header="Option 3" />
          </Card.Group>
          </Card>
         
        </PageController>
      </div>
    );
  }
}

export default help;
