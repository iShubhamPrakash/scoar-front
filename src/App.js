import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import {useDispatch} from "react-redux";
import Demo from "./components/Demo";
import Whiteboard from "./components/Whiteboard/WhiteBoard2.js";
import AuthModal from "./components/Auth/AuthModal";
import LandingPage from "./components/Landing/LandingPage";
import Dashboard from "./components/Dashboard/Dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getInitialAuthData } from "./store/actions/authActions";
import ProtectedRoute from "./components/ProtectedRoute";
import { DASHBOARD_PATH, AUTH_PATH, WHITEBOARD_PATH, LANDING_PAGE_PATH } from "./constants/path";
import Auth from "./components/Auth/Auth";

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
        <Route exact path="/demo">
          <Demo />
        </Route>
        <Route exact path={LANDING_PAGE_PATH} component={LandingPage}/>
        <Route exact path={AUTH_PATH} component={Auth}/>
        <ProtectedRoute path={WHITEBOARD_PATH} component={Whiteboard}/>
        <ProtectedRoute path={DASHBOARD_PATH} component={Dashboard}/>
        <Route path="" component={LandingPage} />
      </Switch>
    </div>
  );
}

export default App;
