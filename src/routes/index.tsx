import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Main from '../pages/Main';
import Instructions from '../pages/Instructions';
import Game from '../pages/Game';
import TheoreticalFramework from '../pages/TheoreticalFramework';
import Error404 from '../pages/Error404';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Main} />
    <Route path="/instrucoes" exact component={Instructions} />
    <Route path="/jogo" exact component={Game} />
    <Route path="/base-teorica" exact component={TheoreticalFramework} />
    <Route path="*" component={Error404} />
  </Switch>
);

export default Routes;
