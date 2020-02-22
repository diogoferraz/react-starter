import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
import Main from '../../layout/Main';
import Login from '../../views/Login/Login';

const App = () => (
  <Router>
    <Switch>
      <Route path="/dashboard" render={(props) => <Main {...props} />} />
      <Route path="/login" component={Login} />
      <Redirect from="/" to="/dashboard/overview" />
    </Switch>
  </Router>
);

export default App;
