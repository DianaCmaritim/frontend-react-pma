import React, { useState } from 'react';
import '../styles/LoginForm.css'; // import the CSS file

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('https://prt-mngt-backend.onrender.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    });

    if (response.ok) {
      setLoginSuccess(true);
      setTimeout(() => {
        window.location.href = '/Projects'; // redirect to dashboard page
      }, 3000);
    } else {
      const errorData = await response.json();
      console.error('Login error:', errorData);
    }
  };

  return (
    <div>
      {loginSuccess && <p>Login successful! Redirecting to projects page...</p>}
      {!loginSuccess && (
        <form onSubmit={handleSubmit} className="login-form">
          <label>
            Email:
            <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
          </label>
          <label>
            Password:
            <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
          </label>
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
};

export default LoginForm;