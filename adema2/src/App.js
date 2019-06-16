import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

import Home from './components/pages/homePage'



function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
