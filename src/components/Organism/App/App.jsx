import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';

const Main = lazy(() => import('../../../layout/Main'));
const Login = lazy(() => import('../../../views/Login/Login'));

const App = () => (
  <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path="/dashboard" render={(props) => <Main {...props} />} />
        <Route path="/login" exact component={Login} />
        <Redirect from="/" to="/dashboard/overview" />
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default App;
