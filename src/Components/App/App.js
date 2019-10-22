import React, { Component } from 'react';


// import components
import Home from "../Home/Home";
import Signin from '../Signin/Signin';
import Signup from '../Signup/Signup';
import Checkout from '../Checkout/Checkout';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Redirect  exact from = "/" to = "/home" />
          <Route component={Home} path="/home" />
          <Route component={Signin} path="/signin" />
          <Route component={Signup} path="/signup" />
          <Route component={Checkout} path="/checkout" />
        </Switch>
      </Router>
    )
  }



}

export default App;
