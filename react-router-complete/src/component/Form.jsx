import { useNavigate } from 'react-router-dom';

const Form = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard', {
      state: { message: 'Form submitted successfully!' },
    });
  };

  return (
    <div className="m-2">
      <h1>Login form</h1>
      <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-2">
        <label htmlFor="username">Username</label>
        <input
          className="border-2 border-white p-2"
          type="text"
          id="username"
          name="username"
          placeholder="enter your username"
        />
        <label htmlFor="password">Password</label>
        <input
          className="border-2 border-white p-2"
          type="text"
          id="password"
          name="password"
          placeholder="enter your password"
        />
        <button
          type="submit"
          className="px-1 py-1 text-black bg-amber-600 font-bold"
        >
          Submit
        </button>
        <p>{location?.state?.message ? location.state.message : null}</p>
      </form>
    </div>
  );
};

export default Form;
