import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';

const RestaurantsList = ({ restaurants, children, ...otherProps }) =>
  restaurants.map(({ id, name, render }, index) => (
    <Card key={id} {...otherProps}>
      <h1>{name}</h1>
      {children?.(restaurants[index])}
    </Card>
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
