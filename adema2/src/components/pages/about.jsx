import React, { Component } from "react";
import PageController from "../controller/pageController";
import RecentActivity from "../pluginThis/recentActivity";
import {Card} from 'semantic-ui-react';

class about extends Component {
  state = {};
  render() {
    return (
      <div>
        <PageController>
            <Card>
            <RecentActivity />
            </Card>
          
        </PageController>
      </div>
    );
  }
}

export default about;
