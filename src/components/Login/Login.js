import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Login.css";

const Login = () => {
  const { googleSignIn } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/shop";
  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      history.push(redirect_uri);
    });
  };
  return (
    <div className="login-form">
      <div>
        <h2>Please Log In</h2>
        <form onSubmit="">
          <input type="email" name="" id="" placeholder="Your Email" />
          <br />
          <input type="password" name="" id="" placeholder="Your Password" />
          <br />
          <input type="submit" value="Login" />
        </form>
        <p>New In Here</p>
        <Link to="/register">Please Register Your Account</Link>
        <div>--------Or--------</div>
        <button className="btn-regular" onClick={handleGoogleSignIn}>
          Google Sign In
        </button>
      </div>
    </div>
  );
};

export default Login;
