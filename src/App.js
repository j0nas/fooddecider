import React from 'react';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import NavBar from './components/NavBar';
import { CompanyAssociationSelection } from './views/CompanyAssociationSelection';
import { RestaurantAssociationSelection } from './views/RestaurantAssociationSelection';

const App = () => (
  <div className="bp3-dark">
    <NavBar />
    <CompanyAssociationSelection />
    <RestaurantAssociationSelection />
  </div>
);

export default App;
