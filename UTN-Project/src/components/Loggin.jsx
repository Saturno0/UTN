import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../hooks/userSlice';

const Login = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register({ username, password }));
  };

  return (
    <main className="login-page-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2 className="login-title">Login</h2>

          <label className="login-label">Nombre de usuario</label>
          <input
            className="login-input"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label className="login-label">Contraseña</label>
          <input
            className="login-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="login-button" type="submit">
            Registrarse
          </button>
        </form>
    </main>
  );
};

export default Login;
