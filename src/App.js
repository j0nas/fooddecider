import React, { Fragment, useState } from "react";
import "@blueprintjs/icons/lib/css/blueprint-icons.css"
import NavBar from "./components/NavBar";
import ExternalApi from "./components/ExternalApi";
import { useAuth0 } from "./react-auth0-spa";
import { fetchCompanies } from "./apiClients/companies";
import CompaniesList from "./components/CompaniesList";
import {joinCompany} from "./apiClients/employees";

const App = () => {
  const { isAuthenticated } = useAuth0();

  let style = {
    width: 300,
    margin: '0 auto',
    padding: 10,
  };

  const [companies, setCompanies] = useState([]);
  function onKeyPress(event) {
    if (event.key === 'Enter') {
      fetchCompanies(setCompanies, console.log)
    }
  }

  const HARDCODED_CURRENT_USER_ID = 1;
  const onJoinClick = companyId => joinCompany(HARDCODED_CURRENT_USER_ID, companyId);

  const a = isAuthenticated || true ?
    <div style={style} className="bp3-dark">
      <div className="bp3-input-group">
        <span className="bp3-icon bp3-icon-search" />
        <input className="bp3-input" type="search" placeholder="Search input"
               dir="auto" autoFocus="autoFocus" onKeyPress={onKeyPress} />
      </div>

      <CompaniesList companies={companies} onJoinClick={onJoinClick} />
    </div> : null;

  return (
    <div className="bp3-dark">
      <NavBar/>

      {a}

    </div>
  );
};

export default App;
