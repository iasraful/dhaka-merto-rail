import React, { useContext } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./config.firebase";
import { Link, useHistory, useLocation } from "react-router-dom";
import {UserContext} from "../../App"


const Login = () => {

  const [loggedInUser, SetLoggedInUser] = useContext(UserContext);

  const history = useHistory;
  const location = useLocation;
  const { from } = location.state || { from: { pathname: "/" } };
  
  const loginHandle = () => {
    firebase.initializeApp(firebaseConfig);
    let provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const {displayName, email} = result.user;
        const signInUser = {name: displayName, email};
        SetLoggedInUser(signInUser);

        history.replace(from);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  
  return (
    <div>
      <div className="container">
        <div className="row py-5">
          <div className="col-md-6 mx-auto">
            <form>
              <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <button type="submit" onClick={loginHandle} className="btn btn-primary mt-2">
                Login
              </button>
              <div className="d-flex">
                <p>Create account</p>
                <Link to="/signup" >Sign Up</Link>
              </div>
            </form>
            <hr/>
            <button type="button" onClick={loginHandle} className="btn btn-primary btn-block mt-2">
              Login with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
