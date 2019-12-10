import { fetchUser, addRestaurant } from './employees';

export const endpoint = '/restaurants';

export const fetchRestaurants = async () => {
  const response = fetch(endpoint);
  console.log(response);
  return await response.json();
};

export const fetchRestaurant = async id => {
  const response = await fetch(`${endpoint}/${id}`);
  return await response.json();
};

export const fetchRestaurantsForUser = async userId => {
  const { restaurants } = await fetchUser(userId);
  return await Promise.all(restaurants.map(fetchRestaurant));
};

export const createRestaurant = async (name, userId) => {
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name }),
  });
  const createdRestaurant = await response.json();
  if (!createdRestaurant.id) {
    console.log(`Failed creating company: [${createdRestaurant}]`);
  }

  await addRestaurant(userId, createdRestaurant.id);
};
