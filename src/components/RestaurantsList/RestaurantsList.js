import React from 'react';
import PropTypes from 'prop-types';
import { Card } from '@blueprintjs/core';
import { Zoom } from 'react-reveal';

const RestaurantsList = ({ restaurants, children }) =>
  restaurants.map(({ id, name, render }, index) => (
    <Zoom key={id}>
      <Card>
        <h1>{name}</h1>
        {children?.(restaurants[index])}
      </Card>
    </Zoom>
  ));

RestaurantsList.propTypes = {
  restaurants: PropTypes.arrayOf(PropTypes.object),
  children: PropTypes.func,
};

RestaurantsList.defaultProps = {
  restaurants: [],
  children: null,
};

export default RestaurantsList;
