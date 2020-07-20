import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import CancelIcon from "@material-ui/icons/Cancel";
import Login from "./Login";
import Signup from "./Signup";
import "normalize.css";

export default function AuthModal() {
  const [view, setView] = useState("login");
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="authmodalcontainer">
      <button type="button" onClick={handleOpen}>
        Login / Signup
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 300,
        }}
        className="authmodalcontainer__modal"
      >
        <Fade in={open}>
          <div className="container">
            <CancelIcon className="cancel-btn" onClick={handleClose} />
            <div className="row">
              <div className="col col-12 col-md-9 col-lg-9">
                <WelcomeGraphics view={view} setView={setView} />
              </div>
              <div className="col col-12 col-md-3 col-lg-3">
                <div className="form">
                  {view === "login" ? <Login /> : <Signup />}
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

const WelcomeGraphics = ({ view, setView }) => (
  <div className="welcome">
    <h1>WELCOME TO SCOAR</h1>
    <h2>Join our community that</h2>
    {view === "login" ? (
      <p>
        Don't have account?{" "}
        <span
          style={{ color: "#fc0384", cursor: "pointer" }}
          onClick={(e) => setView("signup")}
        >
          Sign Up
        </span>
      </p>
    ) : (
      <p>
        Already have an account?{" "}
        <span
          style={{ color: "#fc0384", cursor: "pointer" }}
          onClick={(e) => setView("login")}
        >
          Log In
        </span>
      </p>
    )}

    <span id="logo" ><img src={"./logo.png"} alt="" /> <h1>SCOAR</h1></span>
    <img id="coaching" src={"./icons/auth/coaching.svg"} alt="" />
    <img id="teacher" src={"./icons/auth/teacher.svg"} alt="" />
  </div>
);
