import React, { useEffect, useState } from 'react';
import { GoogleLogin, googleLogout, useGoogleLogin } from '@react-oauth/google';

// @react-oauth/google
//

const GoogleOAuthLogin = () => {
  const [user, setUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [error, setError] = useState('');

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log(tokenResponse);
      setUser(tokenResponse);
      return tokenResponse;
    },
    onError: () => {
      setError('Login Failed');
    },
  });

  useEffect(() => {
    (async function fetchUserProfile() {
      try {
        // authInfo.access_token
        // bearer token authInfo.token_type authInfo.access_token
        const option = {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${user.access_token}`,
            Accept: 'application/json',
          },
        };

        const res = await fetch(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          option
        );
        if (!res.ok) {
          throw new Error('Problem login to account');
        }

        const userDetails = await res.json();

        setUserProfile(userDetails);
      } catch (error) {
        setError(error.message);
      } finally {
      }
    })();
  }, [user]);

  function handleLogout() {
    setUser(null);
    setUserProfile(null);
    googleLogout();
  }

  return (
    <div className="google-oauth">
      {!userProfile ? (
        <button className="btn" onClick={() => login()}>
          Google Login
        </button>
      ) : (
        <button className="btn" onClick={handleLogout}>
          Logout
        </button>
      )}
      <div className="google-oauth__user-profile">
        {userProfile && (
          <div className="userDetail">
            <img src={`${userProfile.picture}`} alt={`${userProfile.name}`} />
            <p>Email: {userProfile.email}</p>
            <p>Name: {userProfile.name}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GoogleOAuthLogin;
