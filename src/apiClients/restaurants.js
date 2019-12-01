import { endpoint as employeesEndpoint } from './employees';

export const endpoint = '/restaurants';

export const fetchRestaurants = () => fetch(endpoint).then(res => res.json());

export const fetchRestaurantsForUser = userId =>
  fetch(`${employeesEndpoint}/${userId}${endpoint}`).then(res => res.json());
