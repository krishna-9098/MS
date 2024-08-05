import React, { useState } from "react";
import "./Login.css";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import logo from "../../../assets/images/logo.png";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest } from "../../../redux/action/Action";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state);

  // Form validation function
  const validateForm = () => {
    let formErrors = {};
    let valid = true;

    // Email validation
    if (!email) {
      valid = false;
      formErrors['email'] = 'Email is required !';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      valid = false;
      formErrors['email'] = 'Email is invalid !';
    }

    // Password validation
    if (!password) {
      valid = false;
      formErrors['password'] = 'Password is required !';
    } else if (password.length < 6) {
      valid = false;
      formErrors['password'] = 'Password must be at least 6 characters !';
    }

    setErrors(formErrors);
    return valid;
  };

  // Form submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(loginRequest(email, password));
    }
  };

  return (
    <>
      <div className="main">
        <h1 className="headtext">Admin Login</h1>
        <div className="inputContainer">
          <img src={logo} className="logo" alt="logo" />
          <form onSubmit={handleSubmit}>
            <div className="inputBox">
              <span>
                <MdEmail className="icon" />
              </span>
              <input
                type="email"
                placeholder="Enter Email"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {errors.email && <h6 style={{ color: 'red' }} className="error">{errors.email}</h6>}
            <div className="inputBox">
              <span>
                <RiLockPasswordFill className="icon" />
              </span>
              <input
                type="password"
                placeholder="Enter Password"
                className="input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {errors.password && <h6 style={{ color: 'red' }} className="error">{errors.password}</h6>}
            <Button variant="success" className="btn" type="submit">Login</Button>
          </form>
          {loading && <div>
            <CircularProgress color="success" />
            </div>
            }
        </div>
      </div>
    </>
  );
};

export default Login;
