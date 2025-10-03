import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // TODO: Add authentication logic
    alert('Logged in as ' + email);
  };

  return (
    <div id="loginPage" className="page">
      <div className="auth-container">
        <div className="auth-box">
          <h2>Welcome Back</h2>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Email</label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
            </div>
            <button type="submit">Login</button>
          </form>
          <div className="auth-link">
            Don't have an account? <a href="/signup">Sign Up</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
