import React from "react";
import NavigationBar from "../extention/navigationBar";
import { Grid } from "semantic-ui-react";
import Footer from "../extention/footer";
import '../css/all1.css';

const pageController = props => {
  return (
    <div>
      <Grid Row={3}>
        <Grid.Row>
          <Grid.Column>
            <NavigationBar />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>{props.children}</Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <hr className="hr14"/>
            <Footer />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default pageController;
