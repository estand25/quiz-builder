import React from 'react';

import {
  NavBar
} from '../components'

import {
  FrontPage,
  Question,
  Quiz,
  Score
} from '../pages'

import { 
  BrowserRouter as Router, 
  Route, 
  Switch 
} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={FrontPage} />
        <Route path="/quiz"        exact component={Quiz} />
        <Route path="/question" exact component={Question} />
        <Route path="/score" exact component={Score} />
      </Switch>
    </Router>
  );
}

export default App;
