import React from 'react';
import PropTypes from 'prop-types';
import { NonIdealState } from '@blueprintjs/core';

const Error = ({ description }) => {
  if (!description) {
    return null;
  }

  return (
    <span style={{ margin: '0 10px' }}>
      <NonIdealState title="An error occurred" description={description} icon="error" />
    </span>
  );
};

Error.propTypes = {
  description: PropTypes.string,
};

Error.defaultProps = {
  description: null,
};

export default Error;
