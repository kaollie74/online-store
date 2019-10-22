import React, { Component } from 'react';
import "gestalt/dist/gestalt.css";

// import components
import Home from "../Home/Home";
import Signin from '../Signin/Signin';
import Signup from '../Signup/Signup';
import Checkout from '../Checkout/Checkout';
import Navbar from '../Navbar/Navbar';
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
        <React.Fragment>
          <Navbar />

          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route component={Home} path="/home" />
            <Route component={Signin} path="/signin" />
            <Route component={Signup} path="/signup" />
            <Route component={Checkout} path="/checkout" />
          </Switch>
        </React.Fragment>
      </Router>
    )
  }



}

export default App;
