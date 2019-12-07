import React, { useState, useEffect } from 'react';
// import { useAuth0 } from "../react-auth0-spa";
import { fetchRestaurants, fetchRestaurantsForUser } from '../apiClients/restaurants';
import { Button } from '@blueprintjs/core';
import { fetchUser, HARDCODED_CURRENT_USER_ID } from '../apiClients/employees';
import CreateRestaurantForm from '../components/CreateRestaurantForm';

const style = {
  width: 300,
  margin: '0 auto',
  padding: 10,
};

export const RestaurantAssociationSelection = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [userRestaurants, setUserRestaurants] = useState([]);

  useEffect(() => {
    (async () => {
      setUserRestaurants(await fetchRestaurantsForUser(HARDCODED_CURRENT_USER_ID));
      setCurrentUser(await fetchUser(HARDCODED_CURRENT_USER_ID));
    })();
  }, []);

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
      {userRestaurants.map(({ id, name }, index) => (
        <li key={index}>
          {name}
          <ul>
            {currentUser?.dishes
              .filter(dish => dish.restaurantId === id)
              .map(dish => (
                <li>
                  {dish.name} ({dish.comments})
                </li>
              ))}
          </ul>
        </li>
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
      {restaurants.map(({ name }, index) => (
        <li key={index}>{name}</li>
      ))}
      <div style={{ margin: '20px 0' }}>
        <span style={{ marginRight: 5 }}>No matches?</span>
        <Button icon="plus" onClick={() => setShowCreateForm(true)} minimal>
          Create new restaurant
        </Button>
      </div>
      <CreateRestaurantForm show={showCreateForm} onCancelClick={() => setShowCreateForm(false)} />
    </div>
  );
};
