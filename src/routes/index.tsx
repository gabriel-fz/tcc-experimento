import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import Home from '../pages/Home';
import Main from '../pages/Main';
import Error404 from '../pages/Error404';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Main} />
    <Route path="*" component={Error404} />
  </Switch>
);

export default Routes;
