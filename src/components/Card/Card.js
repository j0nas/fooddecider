import React from 'react';
import PropTypes from 'prop-types';
import { Card as BlueprintCard, Elevation } from '@blueprintjs/core';
import './Card.css';

const Card = ({ onClick, children, centeredContent, ...otherProps }) => (
  <BlueprintCard
    interactive={Boolean(onClick)}
    elevation={Elevation.TWO}
    className={'Card__container' + (centeredContent ? ' Card__container--centeredContent' : '')}
    children={children}
    {...otherProps}
  />
);

Card.propTypes = {
  onClick: PropTypes.func,
  centeredContent: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
};

Card.defaultProps = {
  onClick: null,
  centeredContent: false,
  children: null,
};

export default Card;
