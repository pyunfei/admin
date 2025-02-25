import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import App from './App';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <Router>
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/" push />} />
      <Route path="/app" component={App} />
      {/* <Route path="/404" component={NotFound} />
      <Route path="/login" component={Login} /> */}
      {/* <Route component={NotFound} /> */}
    </Switch>
  </Router>
);
