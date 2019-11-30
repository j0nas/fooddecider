export function fetchCompanies(onSuccess, onError) {
  fetch('/companies')
    .then(res => res.json())
    .then(onSuccess)
    .catch(onError);
}
