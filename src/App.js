import React from "react";
import "@blueprintjs/icons/lib/css/blueprint-icons.css"
import NavBar from "./components/NavBar";
import { CompanyAssociationSelection } from "./components/CompanyAssociationSelection";

const App = () => (
  <div className="bp3-dark">
    <NavBar/>
    <CompanyAssociationSelection/>
  </div>
);

export default App;
