import React, { Component } from "react";
import PageController from "../controller/pageController";
import { Grid, Card, Form } from "semantic-ui-react";
import "../css/all1.css";

class login extends Component {
  state = {};
  render() {
    return (
      <div>
        <PageController>
          <Grid>
            <Grid.Row>
              <Grid.Column width={10}>
                <Form onSubmit={this.handleSubmit}>
                  <Card className="CardLogin">
                    <Form.Group>
                      <Form.Input placeholder="Name" name="name" />
                      <Form.Input placeholder="Email" name="email" />
                      <Form.Button content="Submit" />
                    </Form.Group>
                  </Card>
                </Form>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </PageController>
      </div>
    );
  }
}

export default login;
