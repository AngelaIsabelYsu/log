import React from "react";
import './LoginForm.css';
import { FaUser, FaUnlockAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div className="wrapper">
      <form action="">
        <h1>Iniciar sesión</h1>
        <div className="input-box">
          <input type="text" placeholder="Username" required />
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" required />
          <FaUnlockAlt className="icon" />
        </div>
        <div className="remember-forgot">
          <label>
            <input type="checkbox" /> Remember
          </label>
          <a href="#">Forgot password</a>
        </div>
        <button type="submit">Access</button> {/* Sin Auth0 */}
        <div className="register-link">
          <p>Don't have an account? <Link to="/register">Register</Link></p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;







