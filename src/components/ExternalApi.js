import React, { useState } from 'react';
import { useAuth0 } from '../react-auth0-spa';

const ExternalApi = () => {
  const [apiMessage, setApiMessage] = useState('');
  const { getTokenSilently, isAuthenticated } = useAuth0();

  const callApi = async () => {
    try {
      const token = await getTokenSilently();
      const response = await fetch('/restaurants/1', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const responseData = await response.json();

      setApiMessage(responseData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1>External API</h1>
      <button onClick={callApi} disabled={!isAuthenticated}>
        {isAuthenticated ? 'Ping API' : 'Log in first'}
      </button>
      {apiMessage && <code>{JSON.stringify(apiMessage, null, 2)}</code>}
    </>
  );
};

export default ExternalApi;
