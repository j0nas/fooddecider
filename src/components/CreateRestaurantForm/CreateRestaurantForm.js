import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup, FormGroup, InputGroup, Spinner } from '@blueprintjs/core';
import { createRestaurant } from '../../apiClients/restaurants';
import Error from '../Error';
import { HARDCODED_CURRENT_USER_ID } from '../../apiClients/employees';

const CreateRestaurantForm = ({ show, onCancelClick }) => {
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  if (!show) {
    return null;
  }

  async function onCreateCompanyClick() {
    setLoading(true);
    try {
      await createRestaurant(name, HARDCODED_CURRENT_USER_ID);
      setLoading(false);
      setError(null);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  }

  return (
    <FormGroup helperText="Create a new restaurant">
      <Error description={error} />
      <InputGroup
        type="text"
        placeholder="Restaurant name"
        value={name}
        onChange={e => setName(e.target.value)}
        disabled={loading}
      />
      <ButtonGroup style={{ marginTop: 5 }} fill>
        <Button disabled={loading} type="secondary" icon="cross" onClick={onCancelClick}>
          Cancel
        </Button>
        <Button
          disabled={loading}
          type="primary"
          icon={loading ? <Spinner size={Spinner.SIZE_SMALL} /> : 'floppy-disk'}
          onClick={onCreateCompanyClick}
        >
          {loading ? 'Creating' : 'Create'}
        </Button>
      </ButtonGroup>
    </FormGroup>
  );
};

CreateRestaurantForm.propTypes = {
  show: PropTypes.bool.isRequired,
  onCancelClick: PropTypes.func.isRequired,
};

export default CreateRestaurantForm;
