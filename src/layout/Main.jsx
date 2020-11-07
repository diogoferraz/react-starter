import React from 'react';
import { Switch } from 'react-router-dom';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';
import routes from '../routes';
import './styles';

const Layout = () => {
  const getRoutes = () => routes.map(({ path, component, layout }) => (<PrivateRoute key={path} path={layout + path} component={component} />));
  return (
    <div className="theme-light">
      <div className="app-container">
        <main>
          <Switch>{getRoutes()}</Switch>
        </main>
      </div>
    </div>
  );
};

export default Layout;
