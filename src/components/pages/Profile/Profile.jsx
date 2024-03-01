import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

const Profile = () => {
  const { user } = useAuth0();
  const { name, picture, email } = user;
  const style = {
    margin: '0 auto',
  };
  return (
    <div className="profile-container" style={style}>
      <div className="row align-items-center profile-header">
        <div className="col-md-2 mb-3">
          <img
            src={picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />
        </div>
        <div className="col-md text-center text-md-left">
          <label style={{ marginTop: '20px' }} htmlFor="name">
            Username:
            <h2 id="name">{name}</h2>
          </label>
          <label htmlFor="email">
            Email:
            <p className="lead text-muted" id="email">
              {email}
            </p>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Profile;
