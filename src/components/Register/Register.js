import React from "react";
import { Link } from "react-router-dom";
import "../Login/Login.css";

const Register = () => {
  return (
    <div className="login-form">
      <div>
        <h2>Register Your Account</h2>
        <form onSubmit="">
          <input type="email" name="" id="" placeholder="Your Email" />
          <br />
          <input type="password" name="" id="" placeholder="Your Password" />
          <br />
          <input
            type="password"
            name=""
            id=""
            placeholder="Re-enter Password"
          />
          <br />
          <input type="submit" value="Register" />
        </form>
        <p>Already Have An Account</p>
        <Link to="/login">Please Log In</Link>
        <br />
        <br />
        <br />
        <div>--------Or----------</div>
        <button className="btn-regular">Google Sign In</button>
      </div>
    </div>
  );
};

export default Register;
