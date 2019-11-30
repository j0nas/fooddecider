export const joinCompany = async (employeeId, companyId) => {
  const response = await fetch(`/employees/${employeeId}`, {
    method: 'PUT',
    body: JSON.stringify({ companyId })
  });

  return await response.json();
};
