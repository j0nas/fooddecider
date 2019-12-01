import React from 'react';
import { Button, Menu, MenuItem, Popover, Position } from '@blueprintjs/core';
import { useAuth0 } from '../react-auth0-spa';

const Profile = () => {
  const { loading, user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  if (!isAuthenticated) {
    return <Button rightIcon="log-in" text="Log in" onClick={loginWithRedirect} />;
  }

  return (
    <Popover
      content={
        <Menu>
          <MenuItem text="Log out" icon="log-out" onClick={logout} />
        </Menu>
      }
      position={Position.BOTTOM_LEFT}
    >
      <Button className="bp3-minimal" rightIcon="caret-down" text={user ? user.name : ''} loading={loading || !user} />
    </Popover>
  );
};

export default Profile;
