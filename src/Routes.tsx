import { Route, Switch } from 'react-router-dom';
import * as p_ from './pages';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={p_.Home} />
    <Route path="/login" component={p_.Login} />
    <Route path="/add-property" component={p_.AddProperty} />
    <Route path="/contact" component={p_.Contact} />
    <Route path="/all-properties" component={p_.AllProperties} />
    <Route path="/property-details/:id" component={p_.PropertyDetails} />
    <Route path="/enquiry/:id" component={p_.Enquiry} />
    <Route path="/bookings" component={p_.Bookings} />
    <Route path="/messages" component={p_.Messages} />
    <Route path="/summary" component={p_.Summary} />
  </Switch>
);

export default Routes;
