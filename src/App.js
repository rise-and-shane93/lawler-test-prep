import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';

import './App.css';

import store from './redux/store';
import { Provider } from 'react-redux';

import Landing from './components/layout/Landing';
import Header from './components/layout/Header';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          <Switch>
            <Route exact path="/" component={Landing} />
          </Switch>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  const message = state.message;
  return {
    message
  }
}

export default connect(mapStateToProps)(App);
