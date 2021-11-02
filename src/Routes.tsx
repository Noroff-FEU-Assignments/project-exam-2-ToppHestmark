import { Route, Switch } from 'react-router-dom';

import { AddProperty, Home, Login } from './pages';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/add-property" component={AddProperty} />
  </Switch>
);

export default Routes;
