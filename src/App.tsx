import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import LayOut from './components/Layout';
import Login from './components/Login';
import './common.css';

import Home from './views/Home';
import Edit from './views/Edit';
import ErrorPage from './views/ErrorPage';

function App() {
  const token = window.localStorage.getItem('token');

  // 面板
  const LayOutRouter = (
    <LayOut>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/edit" component={Edit} />
        {/* <Route path="/course" component={CourseRouter} /> */}
        <Route component={ErrorPage} />
      </Switch>
    </LayOut>
  );

  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => token ? LayOutRouter : <Redirect to="/login" push />}
        />
        <Route path="/login" component={Login} />
        <Route path="/" render={props => LayOutRouter} />
      </Switch>
    </Router>
  );
}

export default App;
