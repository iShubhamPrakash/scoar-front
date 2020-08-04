import React, { useCallback, useEffect, useState } from "react";
import { Route, Switch, Link } from "react-router-dom";
import {useDispatch} from "react-redux";
import Basic from "./components/ContactForm";
import Demo from "./components/Demo";
import Whiteboard from "./components/Whiteboard/WhiteBoard2.js";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import AuthModal from "./components/Auth/AuthModal";
import LandingPage from "./components/Landing/LandingPage";
import Dashboard from "./components/Dashboard/Dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getInitialAuthData } from "./store/actions/authActions";

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    console.log("App mounted")
    dispatch(getInitialAuthData())
  }, []);

  return (
    <div>
      <ToastContainer/>
      <AuthModal/>
      <Switch>
        <Route exact path="/" >
          <LandingPage/>
        </Route>
        <Route exact path="/form">
          <Basic />
          <Link to="/test">Test</Link>
        </Route>
        <Route exact path="/test">
          <h1>Hey there! Why are you still testing ??</h1>
          <Link to="/">Go to home page</Link>
        </Route>

        <Route exact path="/demo">
          <Demo />
        </Route>

        <Route exact path="/whiteboard">
          <Whiteboard />
        </Route>
        <Route path="/dashboard">
          <Dashboard/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
