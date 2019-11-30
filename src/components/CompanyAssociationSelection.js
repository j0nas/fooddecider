import React, { useState } from "react";
import CompaniesList from "./CompaniesList";
// import { useAuth0 } from "../react-auth0-spa";
import {createCompany, fetchCompanies} from "../apiClients/companies";
import { joinCompany } from "../apiClients/employees";
import {Button, ButtonGroup, FormGroup, InputGroup, Spinner, NonIdealState } from "@blueprintjs/core";

const style = {
  width: 300,
  margin: '0 auto',
  padding: 10,
};


export const CompanyAssociationSelection = () => {
  const HARDCODED_CURRENT_USER_ID = 1;
  const [companies, setCompanies] = useState([]);
  const [showCreateForm, setCreateCompany] = useState(false);
  const [companyName, setCompanyName] = useState('');
  const [isCreatingCompany, setCreatingCompany] = useState(false);
  const [error, setError] = useState(false);
  // const { isAuthenticated } = useAuth0();
  // if (!isAuthenticated) {
  //   return null;
  // }

  function onKeyPress(event) {
    if (event.key === 'Enter') {
      fetchCompanies(setCompanies, console.log)
    }
  }

  async function onCreateCompanyClick() {
    setCreatingCompany(true);
    try {
      await createCompany(companyName, HARDCODED_CURRENT_USER_ID);
      setCreatingCompany(false);
      setError(null);
    } catch (error) {
      setError(error.message)
    }
  }

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
        <Button icon="plus" onClick={() => setCreateCompany(true)} minimal>Create a new company</Button>
      </div>

      <br/>
      {showCreateForm && (
        <FormGroup helperText="Create a new company">
          {error && <NonIdealState title="An error occurred" description={error} icon="error" />}

          <InputGroup type="text" placeholder="Company name" value={companyName}
                      onChange={e => setCompanyName(e.target.value)} disabled={isCreatingCompany} />
          <ButtonGroup style={{ marginTop: 5 }}  fill>
            <Button disabled={isCreatingCompany} type="secondary" icon="cross"
                    onClick={() => setCreateCompany(false)}>
              Cancel
            </Button>
            <Button disabled={isCreatingCompany} type="primary"
                    icon={isCreatingCompany ? <Spinner size={Spinner.SIZE_SMALL} /> : 'floppy-disk'}
                    onClick={onCreateCompanyClick}>
              {isCreatingCompany ? 'Creating' : 'Create'}
            </Button>
          </ButtonGroup>
        </FormGroup>
      )}
    </div>
  );
};
