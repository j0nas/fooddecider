import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import NavBar from './components/NavBar';
import { CompanyAssociationSelection } from './views/CompanyAssociationSelection';
import { RestaurantAssociationSelection } from './views/RestaurantAssociationSelection';
const App = () => (
  <BrowserRouter>
    <div className="bp3-dark">
      <NavBar />
      <Switch>
        <Route path="/company">
          <CompanyAssociationSelection />
        </Route>
        <Route path="/restaurant">
          <RestaurantAssociationSelection />
        </Route>
        <Route>
          <Redirect to="/restaurant" />
        </Route>
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
