export const endpoint = '/employees';
export const HARDCODED_CURRENT_USER_ID = 1;

export const fetchUser = async id => {
  const response = await fetch(`${endpoint}/${id}`);
  return await response.json();
};

export const updateUser = async (id, updatedUser) => {
  const response = await fetch(`${endpoint}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedUser),
  });

  return await response.json();
};

export const joinCompany = async (employeeId, companyId) => {
  const initialStateEmployee = await fetchUser(employeeId);
  return await updateUser(employeeId, { ...initialStateEmployee, companyId });
};

export const addRestaurant = async (employeeId, restaurantId) => {
  const employeesUrl = `${endpoint}/${employeeId}`;
  const initialStateResponse = await fetch(employeesUrl);
  const initialStateEmployee = await initialStateResponse.json();
  const updatedEmployee = { ...initialStateEmployee, restaurants: [...initialStateEmployee.restaurants, restaurantId] };

  const response = await fetch(employeesUrl, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedEmployee),
  });

  return await response.json();
};
