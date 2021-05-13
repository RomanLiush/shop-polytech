import React from 'react';
import { Switch, Route } from 'react-router';

import Auto from './components/autos';
import Auto1 from './components/auto';
import Auth from './components/auth';

export default (
  <Switch>
    <Route path={'/auth'} component={Auth} />
    <Route path={'/'} component={Auto} exact/>
    <Route path={'/categories/:id'} component={Auto} />
    <Route path={'/autos/:id'} component={Auto1} />
  </Switch>
)
