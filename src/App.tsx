import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './views/Login/login';
import LayOutRouter from './views/Layout';
import './common.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={
            // this.props.userData ?
              (props) => <LayOutRouter />
              // () => <Redirect to="/login" push />
          }
        />
        <Route path="/login" component={Login} />
        <Route path="/" render={props => <LayOutRouter />} />
      </Switch>
  </Router>
  );
}

export default App;
