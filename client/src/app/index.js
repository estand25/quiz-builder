import React from 'react';

import {
  NavBar
} from '../components'

import {
  FrontPage,
  Question,
  Quiz,
  Score,
  UserSignIn as In,
  UserSignOut as Out,
  UserSignUp as Up,
  UserProfile as Pro
} from '../pages'

import { 
  BrowserRouter as Router, 
  Route, 
  Switch 
} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'

import UserProvider from '../hooks/UserContext'

const App = () => {
  return (
    <UserProvider>
      <Router>
        <NavBar />
        <Switch>
          <Route exact={true} path="/" component={FrontPage} />
          <Route path="/quiz" exact component={Quiz} />
          <Route path="/question" exact component={Question} />
          <Route path="/score" exact component={Score} />
          <Route Path="/signUp" exact component={Up} />
          <Route Path="/signOut" exact component={Out} />
          <Route Path="/signIn" exact component={In} />
          <Route Path="/userProfile" exact component={Pro} /> 
        </Switch>
      </Router>
    </UserProvider>
  );
}

export default App;
