import React, {useState} from "react";
import {Button, ButtonGroup, FormGroup, InputGroup, Spinner} from "@blueprintjs/core";
import {createCompany} from "../../apiClients/companies";
import {HARDCODED_CURRENT_USER_ID} from "../../apiClients/employees";
import {Error} from "../Error/Error";

export const CreateCompanyForm = ({ show, onCancelClick }) => {
  const [companyName, setCompanyName] = useState('');
  const [isCreatingCompany, setCreatingCompany] = useState(false);
  const [error, setError] = useState(false);

  if (!show) {
    return null;
  }

  async function onCreateCompanyClick() {
    setCreatingCompany(true);
    try {
      await createCompany(companyName, HARDCODED_CURRENT_USER_ID);
      setCreatingCompany(false);
      setError(null);
    } catch (error) {
      setCreatingCompany(false);
      setError(error.message)
    }
  }

  return (
    <FormGroup helperText="Create a new company">
      <Error description={error} />
      <InputGroup type="text" placeholder="Company name" value={companyName}
                  onChange={e => setCompanyName(e.target.value)} disabled={isCreatingCompany}/>
      <ButtonGroup style={{marginTop: 5}} fill>
        <Button disabled={isCreatingCompany} type="secondary" icon="cross" onClick={onCancelClick}>
          Cancel
        </Button>
        <Button disabled={isCreatingCompany} type="primary"
                icon={isCreatingCompany ? <Spinner size={Spinner.SIZE_SMALL}/> : 'floppy-disk'}
                onClick={onCreateCompanyClick}>
          {isCreatingCompany ? 'Creating' : 'Create'}
        </Button>
      </ButtonGroup>
    </FormGroup>
  );

};
