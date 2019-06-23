import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './components/pages/homePage';
import 'semantic-ui-css/semantic.min.css'
import {Grid} from 'semantic-ui-react';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Grid celled='internally'>
            
          <Grid.Row>
          <Grid.Column width={2}></Grid.Column>
            <Grid.Column width={12}><Route exact path="/" component={Home}/></Grid.Column>
            <Grid.Column width={2}></Grid.Column>
          </Grid.Row>
          </Grid>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
