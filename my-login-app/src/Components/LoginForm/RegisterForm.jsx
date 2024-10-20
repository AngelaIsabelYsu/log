import React from "react";
import './RegisterForm.css';
import { FaUser, FaEnvelope, FaUnlockAlt } from "react-icons/fa";
import { useAuth0 } from '@auth0/auth0-react';

const RegisterForm = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="wrapper">
      <form action="">
        <h1>Registro</h1>
        <div className="input-box">
          <input type="text" placeholder="Username" required />
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input type="email" placeholder="Email" required />
          <FaEnvelope className="icon" />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" required />
          <FaUnlockAlt className="icon" />
        </div>
        <button type="submit">Register</button>
        <button type="button" onClick={() => loginWithRedirect({ connection: 'google-oauth2' })}>Register with Google</button>
        <button type="button" onClick={() => loginWithRedirect({ connection: 'facebook' })}>Register with Facebook</button>
        <div className="register-link">
          <p>Already have an account? <a href="/">Login</a></p>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;







