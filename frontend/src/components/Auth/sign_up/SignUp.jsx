import React, { useState } from "react";
import "./SignUp.css";
import logo from "../../../assets/images/logo.png";
import { RiLockPasswordFill } from "react-icons/ri";
import { Button } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import { FaMobile } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link, useHistory, useNavigate } from "react-router-dom";
import Login from "../login/Login";


const SignUp = () => {

  const Navigate = useNavigate(); // useHistory hook

  const [name, setName] = useState(""); // Name state
  const [email, setEmail] = useState(""); // Email state
  const [mobile, setMobile] = useState(""); // Mobile state
  const [password, setPassword] = useState(""); // Password state
  const [cPassword, setCpassword] = useState(""); // Confirm Password state
  const [error, setError] = useState({}); // Errors state

  const SignUpValidation = () => {
    let formError = {};
    let formValid = true;

    // Name validation
    if (!name) {
      formValid = false;
      formError["name"] = "Name is required!";
    } else if (name.length < 3) {
      formValid = false;
      formError["name"] = "Name must be at least 3 characters!";
    }

    // Email validation
    if (!email) {
      formValid = false;
      formError["email"] = "Email is required!";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formValid = false;
      formError["email"] = "Email is invalid!";
    }

    // Mobile validation
    if (!mobile) {
      formValid = false;
      formError["mobile"] = "Mobile is required!";
    } else if (mobile.length !== 10) {
      formValid = false;
      formError["mobile"] = "Mobile number must be 10 digits!";
    }

    // Password validation
    if (!password) {
      formValid = false;
      formError["password"] = "Password is required!";
    } else if (password.length < 6) {
      formValid = false;
      formError["password"] = "Password must be at least 6 characters!";
    }

    // Confirm password validation
    if (!cPassword) {
      formValid = false;
      formError["cPassword"] = "Confirm Password is required!";
    } else if (cPassword !== password) {
      formValid = false;
      formError["cPassword"] = "Password and Confirm Password do not match!";
    }

    setError(formError);
    return formValid;
  };

  const handleSignUp = (e) => {
    e.preventDefault(); // Form ke default submit behaviour ko roka
    if (SignUpValidation()) {
      alert("Admin Successfully Registered");
      Navigate('/')
    }
  };

  return (
    <div className="Smain">
      <h1 className="Sheadtext">Register Admin</h1>
      <div className="SregisterContainer">
        <img src={logo} className="Slogo" alt="logo" /> {/* Logo display */}
        <div className="SinputBox">
          <span>
            <FaUser className="Sicon" /> {/* User icon */}
          </span>
          <input
            type="text"
            placeholder="Enter Name"
            className="Sinput"
            value={name} // Name input value
            onChange={(e) => setName(e.target.value)} // Name state update
          />
        </div>
        {error.name && (
          <h6 style={{ color: "red",marginLeft:'5%' }} className="error">
            {error.name}
          </h6>
        )}

        

        <div className="SinputBox">
          <span>
            <FaMobile className="Sicon" /> {/* Mobile icon */}
          </span>
          <input
            type="number"
            placeholder="Enter Mobile"
            className="Sinput"
            value={mobile} // Mobile input value
            onChange={(e) => setMobile(e.target.value)} // Mobile state update
          />
        </div>
        {error.mobile && (
          <h6 style={{ color: "red" ,marginLeft:'5%'}} className="error">
            {error.mobile}
          </h6>
        )}
        <div className="SinputBox">
          <span>
            <MdEmail className="Sicon" /> {/* Email icon */}
          </span>
          <input
            type="email"
            placeholder="Enter Email"
            className="Sinput"
            value={email} // Email input value
            onChange={(e) => setEmail(e.target.value)} // Email state update
          />
        </div>
        {error.email && (
          <h6 style={{ color: "red" ,marginLeft:'5%'}} className="error">
            {error.email}
          </h6>
        )}

        <div className="SinputBox">
          <span>
            <RiLockPasswordFill className="Sicon" /> {/* Password icon */}
          </span>
          <input
            type="password"
            placeholder="Enter Password"
            className="Sinput"
            value={password} // Password input value
            onChange={(e) => setPassword(e.target.value)} // Password state update
          />
        </div>
        {error.password && (
          <h6 style={{ color: "red",marginLeft:'5%' }} className="error">
            {error.password}
          </h6>
        )}

        <div className="SinputBox">
          <span>
            <RiLockPasswordFill className="Sicon" /> {/* Confirm Password icon */}
          </span>
          <input
            type="password"
            placeholder="Enter Confirm Password"
            className="Sinput"
            value={cPassword} // Confirm Password input value
            onChange={(e) => setCpassword(e.target.value)} // Confirm Password state update
          />
        </div>
        {error.cPassword && (
          <h6 style={{ color: "red",marginLeft:'5%' }} className="error">
            {error.cPassword}
          </h6>
        )}

        <Button variant="success" className="Sbtn" onClick={handleSignUp}>
          Register
        </Button> {/* Register button */}
        <Link to='/' style={{color:'blue',textDecoration:'none',fontWeight:'500',marginLeft:"5%",fontSize:12}}>Already have an Account? </Link>  
      </div>
    </div>
  );
};

export default SignUp;
