import React, { useState, useEffect } from 'react';
// import { useAuth0 } from "../react-auth0-spa";
import { fetchRestaurants, fetchRestaurantsForUser } from '../apiClients/restaurants';
import { Button } from '@blueprintjs/core';
import { HARDCODED_CURRENT_USER_ID } from '../apiClients/employees';

const style = {
  width: 300,
  margin: '0 auto',
  padding: 10,
};

export const RestaurantAssociationSelection = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [userRestaurants, setUserRestaurants] = useState([]);

  useEffect(() => {
    async function getRestaurants() {
      const userRestaurants = await fetchRestaurantsForUser(HARDCODED_CURRENT_USER_ID);
      setUserRestaurants(userRestaurants);
    }

    getRestaurants();
  }, [HARDCODED_CURRENT_USER_ID]);

  // const { isAuthenticated } = useAuth0();
  // if (!isAuthenticated) {
  //   return null;
  // }

  async function onKeyPress(event) {
    if (event.key === 'Enter') {
      setRestaurants(await fetchRestaurants());
    }
  }

  return (
    <div style={style} className="bp3-dark">
      Your restaurants:
      {userRestaurants.map(({ name, key }) => (
        <li key={key}>{name}</li>
      ))}
      <div className="bp3-input-group">
        <span className="bp3-icon bp3-icon-search" />
        <input
          className="bp3-input"
          type="search"
          placeholder="Search restaurants"
          dir="auto"
          autoFocus="autoFocus"
          onKeyPress={onKeyPress}
        />
      </div>
      {restaurants.map(({ name, key }) => (
        <li key={key}>{name}</li>
      ))}
      <div style={{ margin: '20px 0' }}>
        <span style={{ marginRight: 5 }}>No matches?</span>
        <Button icon="plus" onClick={() => setShowCreateForm(true)} minimal>
          Create new restaurant
        </Button>
      </div>
    </div>
  );
};
