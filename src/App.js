import "./App.css";
import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Destination from "./Components/Destination/Destination";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import Header from "./Components/Header";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";
import Signup from "./Components/Login/SignUp";
import PrivetRoute from "./Components/PrivetRoute/PrivetRoute";

export const UserContext = createContext();

function App() {
 const [loggedInUser, SetLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, SetLoggedInUser]}>
      <p>Name :{loggedInUser.name}</p>

    <div>
      <Router>
          <Header />
          <Switch>
            <PrivetRoute path="/destination">
              <Destination/>
            </PrivetRoute>
            <Route path="/blog">
              <Blog />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
      </Router>
    </div>
    </UserContext.Provider>
  );
}

export default App;
