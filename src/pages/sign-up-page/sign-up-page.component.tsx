import React, { useState } from 'react';

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import './sign-up-page.styles.scss';

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (password !== password2) {
      console.log('Hasła się nie zgadzają!');
      setError('Hasła się nie zgadzają!');
    }

    console.log('Email: ', email);
    console.log('Password: ', password);
    console.log('Password2: ', password2);

    setLoading(true);

    setTimeout(() => setLoading(false), 5000);
  };

  return (
    <div className="sign-up">
      <p>Sign up Page</p>
      <form className="form">
        <FormInput
          type="email"
          name="email"
          label="Email"
          value={email}
          handleChange={(e) => setEmail(e.target.value)}
        />
        <FormInput
          type="password"
          name="password"
          label="Password"
          value={password}
          handleChange={(e) => setPassword(e.target.value)}
        />
        <FormInput
          type="password"
          name="password2"
          label="Repeat Password"
          value={password2}
          handleChange={(e) => setPassword2(e.target.value)}
        />
        <CustomButton
          type="submit"
          onClick={(e) => handleSubmit(e)}
          loading={loading}
        >
          Zarejestruj się
        </CustomButton>

        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default SignUpPage;
