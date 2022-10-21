import React, { useState } from 'react';

import axiosApiInstance from '../../utils/axiosInstance';

import CustomButton from '../../components/custom-button/custom-button.component';
import FormInput from '../../components/form-input/form-input.component';

import './sign-in-page.styles.scss';

const SignInPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    console.log('Username: ', username);
    console.log('Password: ', password);

    setLoading(true);

    const payload = {
      email: username,
      password,
    };

    axiosApiInstance
      .post(`${process.env.REACT_APP_BACKEND_URL}/auth/users/login/`, payload)
      .then((data) => {
        setLoading(false);
        console.log(data);
      });
  };

  return (
    <div className="sign-in">
      <p>Sign in Page</p>
      <form className="form">
        <FormInput
          type="text"
          name="username"
          label="Username"
          value={username}
          handleChange={(e) => setUsername(e.target.value)}
        />
        <FormInput
          type="password"
          name="password"
          label="Password"
          value={password}
          handleChange={(e) => setPassword(e.target.value)}
        />
        <CustomButton
          type="submit"
          onClick={(e) => handleSubmit(e)}
          loading={loading}
        >
          Zaloguj
        </CustomButton>
      </form>
    </div>
  );
};

export default SignInPage;
