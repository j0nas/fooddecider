import { endpoint as employeesEndpoint } from './employees';

export const endpoint = '/restaurants';

export const fetchRestaurants = () => fetch(endpoint).then(res => res.json());

export const fetchRestaurantsForUser = userId =>
  fetch(`${employeesEndpoint}/${userId}${endpoint}`).then(res => res.json());

export const createRestaurant = async name => {
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name }),
  });
  const createdRestaurant = await response.json();
  if (!createdRestaurant.id) {
    console.log(`Failed creating company: [${createdRestaurant}]`);
  }

  return createdRestaurant;
};
