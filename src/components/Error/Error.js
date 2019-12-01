import React from 'react';
import { NonIdealState } from '@blueprintjs/core';

export const Error = ({ description }) => {
  if (!description) {
    return null;
  }

  return (
    <span style={{ margin: '0 10px' }}>
      <NonIdealState title="An error occurred" description={description} icon="error" />
    </span>
  );
};
