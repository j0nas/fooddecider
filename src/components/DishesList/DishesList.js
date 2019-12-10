import React from 'react';
import PropTypes from 'prop-types';
import { Card } from '@blueprintjs/core';

const DishesList = ({ dishes }) =>
  dishes.map(({ name, comments }) => (
    <Card key={name}>
      <h2>{name}</h2>
      <ul className="bp3-list bp3-list-unstyled">
        {comments?.map(comment => (
          <li key={comment}>{comment}</li>
        ))}
      </ul>
    </Card>
  ));

DishesList.propTypes = {
  dishes: PropTypes.arrayOf(PropTypes.object),
};

DishesList.defaultProps = {
  dishes: [],
};

export default DishesList;
