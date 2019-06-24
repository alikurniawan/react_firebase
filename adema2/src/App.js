import React from 'react';
import './App.css';
import './components/css/bgDegradation.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './components/pages/homePage';
import About from './components/pages/about';
// import SignUp from './components/pages/signUp';
import Login from './components/pages/login';
import Help from './components/pages/help';

import 'semantic-ui-css/semantic.min.css';
import { Grid } from 'semantic-ui-react';

function App() {
  return (
    <div className='bgDegra'>
      <Router>
        <Switch>
          <Grid celled='internally'>
            <Grid.Row>
              <Grid.Column width={2}></Grid.Column>
              <Grid.Column width={12}>
                
                <Route exact path="/" component={Home} />
                <Route path="/About" component={About} />
                <Route path="/Login" component={Login} />
                {/* <Route path="/SignUp" component={SignUp} /> */}
                <Route path="/Help" component={Help} />
              </Grid.Column>
              <Grid.Column width={2}></Grid.Column>
            </Grid.Row>
          </Grid>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
