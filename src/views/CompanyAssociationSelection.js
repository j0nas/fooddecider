import React, { useState } from 'react';
import { Button } from '@blueprintjs/core';
// import { useAuth0 } from "../react-auth0-spa";
import { fetchCompanies } from '../apiClients/companies';
import { HARDCODED_CURRENT_USER_ID, joinCompany } from '../apiClients/employees';
import CompaniesList from '../components/CompaniesList';
import CreateCompanyForm from '../components/CreateCompanyForm/CreateCompanyForm';

const style = {
  width: 300,
  margin: '0 auto',
  padding: 10,
};

export const CompanyAssociationSelection = () => {
  const [companies, setCompanies] = useState([]);
  const [showCreateForm, setShowCreateForm] = useState(false);
  // const { isAuthenticated } = useAuth0();
  // if (!isAuthenticated) {
  //   return null;
  // }

  function onKeyPress(event) {
    if (event.key === 'Enter') {
      fetchCompanies(setCompanies, console.log);
    }
  }

  const onJoinClick = companyId => joinCompany(HARDCODED_CURRENT_USER_ID, companyId);

  return (
    <div style={style} className="bp3-dark">
      <div className="bp3-input-group">
        <span className="bp3-icon bp3-icon-search" />
        <input
          className="bp3-input"
          type="search"
          placeholder="Search companies"
          dir="auto"
          autoFocus="autoFocus"
          onKeyPress={onKeyPress}
        />
      </div>

      <CompaniesList companies={companies} onJoinClick={onJoinClick} />

      <div style={{ margin: '20px 0' }}>
        <span style={{ marginRight: 5 }}>No matches?</span>
        <Button icon="plus" onClick={() => setShowCreateForm(true)} minimal>
          Create a new company
        </Button>
      </div>

      <CreateCompanyForm show={showCreateForm} onCancelClick={() => setShowCreateForm(false)} />
    </div>
  );
};
