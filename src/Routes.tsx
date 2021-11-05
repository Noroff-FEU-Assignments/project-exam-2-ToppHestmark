import { Route, Switch } from 'react-router-dom';

import { AddProperty, Home, Login, Contact } from './pages';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/add-property" component={AddProperty} />
    <Route path="/contact" component={Contact} />
  </Switch>
);

export default Routes;
