import {joinCompany} from "./employees";

const endpoint = '/companies';

export function fetchCompanies(onSuccess, onError) {
  fetch(endpoint)
    .then(res => res.json())
    .then(onSuccess)
    .catch(onError);
}

export const createCompany = async (companyName, employeeId) => {
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ name: companyName }),
  });
  const createdCompany = await response.json();

  if (!createdCompany.id) {
    console.log(`Failed creating company: [${createdCompany}]`);
    return;
  }

  await joinCompany(employeeId, createdCompany.id)
};
