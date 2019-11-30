import React, { useState } from "react";
import CompaniesList from "./CompaniesList";
// import { useAuth0 } from "../react-auth0-spa";
import { fetchCompanies } from "../apiClients/companies";
import { joinCompany } from "../apiClients/employees";
import { Button } from "@blueprintjs/core";

const style = {
  width: 300,
  margin: '0 auto',
  padding: 10,
};


export const CompanyAssociationSelection = () => {
  const [companies, setCompanies] = useState([]);
  // const { isAuthenticated } = useAuth0();
  // if (!isAuthenticated) {
  //   return null;
  // }

  function onKeyPress(event) {
    if (event.key === 'Enter') {
      fetchCompanies(setCompanies, console.log)
    }
  }

  const HARDCODED_CURRENT_USER_ID = 1;
  const onJoinClick = companyId => joinCompany(HARDCODED_CURRENT_USER_ID, companyId);

  return (
    <div style={style} className="bp3-dark">
      <div className="bp3-input-group">
        <span className="bp3-icon bp3-icon-search"/>
        <input className="bp3-input" type="search" placeholder="Search input"
               dir="auto" autoFocus="autoFocus" onKeyPress={onKeyPress}/>
      </div>

      <CompaniesList companies={companies} onJoinClick={onJoinClick}/>

      <div style={{ marginTop: 20 }}>
        <span style={{ marginRight: 5 }}>No matches?</span>
        <Button icon="plus">Create a new company </Button>
      </div>
    </div>
  );
};
