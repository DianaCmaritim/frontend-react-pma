import React, { useState } from 'react';
import '../styles/RegistrationForm.css'; // import the CSS file

const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleSubmit = async (event) => {
  event.preventDefault();

  const response = await fetch('http://localhost:9292/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      email,
      password
    })
  });

  if (response.ok) {
    setRegistrationSuccess(true);
    setTimeout(() => {
      window.location.href = '/LoginForm';
    }, 3000);
  } else {
    const errorData = await response.json();
    console.error('Registration error:', errorData);
  }
};

  return (
    <div>
      {registrationSuccess && <p>Registration successful! Redirecting to login page...</p>}
      {!registrationSuccess && (
        <form onSubmit={handleSubmit} className="registration-form">
          <label>
            Name:
            <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
          </label>
          <label>
            Email:
            <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
          </label>
          <label>
            Password:
            <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
          </label>
          <label>
            Confirm Password:
            <input type="password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} />
          </label>
          <button type="submit">Register</button>
        </form>
      )}
    </div>
  );
};

export default RegistrationForm;