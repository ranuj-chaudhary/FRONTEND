import React, { useState } from 'react';
import './FormValidation.css';

const FormValidation = () => {
  const [formValue, setValue] = useState({
    username: '',
    password: '',
    email: '',
  });

  const [error, setError] = useState({
    username: '',
    password: '',
    email: '',
  });

  const errorMessage = {
    username: 'Username length should be greater than 3',
    email: 'Enter Valid Email',
    password: 'Password length should be >5',
  };

  function formValidation(name, value) {
    function testEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    let errorValue = '';
    switch (name) {
      case 'username':
        errorValue = value.length < 3 ? errorMessage[name] : '';
        setError((prevErr) => ({ ...prevErr, [name]: errorValue }));
        break;
      case 'email':
        errorValue = testEmail(value) ? '' : errorMessage[name];
        setError((prevErr) => ({ ...prevErr, [name]: errorValue }));
        break;
      case 'password':
        errorValue = value.length < 5 ? errorMessage[name] : '';
        setError((prevErr) => ({ ...prevErr, [name]: errorValue }));
        break;
      default:
        break;
    }
  }

  function handleSumbit(e) {
    e.preventDefault();
    let validateError = [];
    const isInputValid = Object.entries(formValue);
    isInputValid.forEach((ele) => {
      const [name, value] = ele;

      formValidation(name, value);
    
    });
   
  }

  function handleChange(event) {
    const { name, value } = event.target;

    const obj = {
      ...formValue,
      [name]: value,
    };
    setValue(obj);
    formValidation(name, value);
  }

  return (
    <form className="form" onSubmit={handleSumbit}>
      <div className="form__input-container">
        <label htmlFor="username" className="form__label">
          Username:
        </label>
        <input
          id="username"
          className="form__input"
          type="text"
          value={formValue.username}
          onChange={handleChange}
          name="username"
        />
        <p className="form__error">
          {error.username.length > 0 ? error.username : ''}
        </p>
      </div>
      <div className="form__input-container">
        <label htmlFor="password" className="form__label">
          Password:
        </label>
        <input
          id="password"
          className="form__input"
          type="text"
          value={formValue.password}
          onChange={handleChange}
          name="password"
        />
        <p className="form__error">
          {error.password.length > 0 ? error.password : ''}
        </p>
      </div>
      <div className="form__input-container">
        <label htmlFor="email" className="form__label">
          Email:
        </label>
        <input
          id="email"
          className="form__input"
          type="text"
          value={formValue.email}
          onChange={handleChange}
          name="email"
        />
        <p className="form__error">{error.email}</p>
      </div>
      <div className="form__input-container">
        <button type="submit" className="form__btn">
          Submit
        </button>
      </div>
    </form>
  );
};

export default FormValidation;
