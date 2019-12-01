export const endpoint = '/employees';
export const HARDCODED_CURRENT_USER_ID = 1;

export const joinCompany = async (employeeId, companyId) => {
  const employeesUrl = `${endpoint}/${employeeId}`;
  const initialStateResponse = await fetch(employeesUrl);
  const initialStateEmployee = await initialStateResponse.json();
  const updatedEmployee = { ...initialStateEmployee, companyId };

  const response = await fetch(employeesUrl, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedEmployee),
  });

  return await response.json();
};
