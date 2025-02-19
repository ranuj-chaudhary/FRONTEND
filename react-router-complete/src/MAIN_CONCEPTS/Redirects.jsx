import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const user = {
  username: 'ranujchoudhary@gmail.com',
  password: 'ranuj@1234',
};
const Redirects = () => {
  const [attempts, setAttempts] = useState(3);
  const [error, setError] = useState('');
  const [searchedProducts, setSearchedProducts] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (attempts <= 0) {
      setError(`All attempts failed redirecting...`);
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }
  }, [attempts, navigate]);

  async function handleSubmit(e) {
    e.preventDefault();
    if (username === user.username && password === user.password) {
      navigate('/dashboard');
    } else {
      setAttempts((attempts) => attempts - 1);
      setError(`Wrong username of password ${attempts - 1} left`);
    }
  }

  return (
    <div className="h-72 overflow-auto">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col border-2 p-4 items-center gap-3"
      >
        <input
          type="text"
          className="border-2 p-2 w-full"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="enter your username"
          required
        />
        <input
          type="text"
          className="border-2 p-2 w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="enter your password"
          required
        />
        <p className="my-2">{error.length > 0 ? error : null}</p>

        <button
          type="submit"
          className="bg-white text-black px-4 py-2 rounded-md hover:bg-blue-200 cursor-pointer transition-all active:scale-95  "
        >
          Login
        </button>
      </form>

      <div className="productsTitle flex gap-2 flex-wrap p-2 overflow-y-auto">
        {searchedProducts && searchedProducts.length > 0
          ? searchedProducts.map((prod) => (
              <li
                key={prod.id}
                className="list-none p-1 bg-white text-black rounded-md"
              >
                {prod.title}
              </li>
            ))
          : null}
      </div>
    </div>
  );
};

export default Redirects;
