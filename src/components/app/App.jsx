import React from 'react';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import Main from '../../layout/Main';
import Login from '../../views/Login/Login';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/dashboard" render={(props) => <Main {...props} />} />
      <Route path="/login" exact component={Login} />
      <Redirect from="/" to="/dashboard/overview" />
    </Switch>
  </BrowserRouter>
);

export default App;
