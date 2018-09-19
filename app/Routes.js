/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes.json';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import JointPage from './containers/JointPage';
import MergePage from './containers/MergePage';

export default () => (
  <App>
    <Switch>
      <Route path={routes.COUNTER} component={CounterPage} />
      <Route path={routes.HOME} component={HomePage} />
      <Route path={routes.JOINT} component={JointPage} />
      <Route path={routes.MERGE} component={MergePage} />
    </Switch>
  </App>
);
