import React from 'react';
import { Switch } from 'react-router-dom';

import SignIn from '../pages/SignIn/index';
import SignUp from '../pages/SignUp/index';
import Dashboard from '../pages/Dashboard/index';
import Route from './Route';
 
const Routes: React.FC = () => (
  <Switch>
    <Route path='/' exact component={SignIn}/> 
    <Route path='/signup' component={SignUp}/>
    <Route path='/dashboard' component={Dashboard} isPrivate={ true }/>
  </Switch>
);

export default Routes;
