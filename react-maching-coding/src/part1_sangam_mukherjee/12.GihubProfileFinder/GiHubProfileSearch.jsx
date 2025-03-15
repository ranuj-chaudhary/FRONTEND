import React, { useEffect, useState } from 'react';
import User from './User';
const GiHubProfileSearch = () => {
  const [username, setUserName] = useState('ranuj-chaudhary');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [userData, setUserData] = useState('');

  async function fetchUser() {
    setLoading(true);
    try {
      const res = await fetch(`https://api.github.com/users/${username}`, {
        method: 'GET',
      });
      if (!res.ok) {
        throw new Error('Problem fetching data');
      }

      const userData = await res.json();

      if (userData) {
        setUserData(userData);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchUser();
  }, []);

  function handleSearch() {
    setTimeout(() => {
      fetchUser();
    }, 5000);
  }

  return (
    <div className="github-profile p-4">
      <header className="">
        <h1 className="text-2xl">Search Git Hub Profile</h1>
        <div className="search flex items-center justify-center gap-4">
          <input
            type="text"
            placeholder="enter your github username"
            name="search"
            className="border-2 p-2"
            value={username}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            id="search-user"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-400 text-white rounded-md px-4 py-2 hover:bg-blue-600"
          >
            Search
          </button>
        </div>
      </header>
      <div className="github-profile__user ">
        {loading && !userData.length ? (
          <div className="h-full w-full flex justify-center items-center min-h-72">
            <p>Loading user...</p>
          </div>
        ) : (
          <User userData={userData} />
        )}
        {error.length > 0 ? <p>{error}</p> : null}
      </div>
    </div>
  );
};

export default GiHubProfileSearch;
