import React from 'react';
import { Image } from 'antd';
import { Link } from 'react-router-dom';
import Logo from '../../styles/assets/Logos/StackedBrandmark_Green.png';
import { colors } from '../../styles/data_vis_colors';
import '../../styles/headerStyle.css';
import { useAuth0 } from '@auth0/auth0-react';
import { CgProfile } from 'react-icons/cg';

const { primary_accent_color } = colors;

function HeaderContent() {
  const { loginWithRedirect, logout, user, isLoading } = useAuth0();
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: primary_accent_color,
      }}
    >
      <div className="hrf-logo">
        <a href="https://www.humanrightsfirst.org/">
          <Image
            width={200}
            height={150}
            src={Logo}
            preview={false}
            alt="HRF logo white"
          />
        </a>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/graphs">Graphs</Link>
        {!isLoading && !user && (
          <button
            className="btn btn-primary"
            onClick={() => loginWithRedirect()}
          >
            Login
          </button>
        )}
        {!isLoading && user && (
          <button className="btn btn-primary" onClick={() => logout()}>
            Logout
          </button>
        )}
        {!user ? null : (
          <Link to="/profile">
            <CgProfile className="profile-img" />
          </Link>
        )}
      </div>
    </div>
  );
}

export { HeaderContent };
