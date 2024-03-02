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
      <h1 style={{ textAlign: 'center' }}>Profile</h1>
      <div class="card" style={{ width: '18rem' }}>
        <img class="card-img-top" src={picture} alt="Card image cap" />
        <div class="card-body text-center">
          <h3>Username</h3>
          <h5 class="card-title">{name}</h5>
          <h3 class="card-text">Email</h3>
          <p class="card-text">{email}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
