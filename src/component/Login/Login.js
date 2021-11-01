import React from "react";
import { useHistory, useLocation } from "react-router";
import UseAuth from "../../hooks/useAuth.js";

const Login = () => {
  const { signInUsingGoogle } = UseAuth();
  const location = useLocation();
  const history = useHistory();
  const { from } = location.state || { from: { pathname: "/" } };
  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center h-100 w-100 my-5">

      <h2 className="text-danger"> Please Login : </h2> <br />
      <button onClick={signInUsingGoogle} className="btn btn-danger mb-5">
        Google Sign in
      </button>
    </div>
  );
};

export default Login;
