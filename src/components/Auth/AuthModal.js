import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import CancelIcon from "@material-ui/icons/Cancel";
import Login from "./Login";
import Signup from "./Signup";

import "normalize.css";
import { openAuthModal, closeAuthModal } from "../../store/actions/authActions";

export default function AuthModal() {
	const open = useSelector((state) => state.auth.modalOpen);
	const dispatch = useDispatch();

	const [view, setView] = useState("login");

	const setOpen = (value) => {
		value ? dispatch(openAuthModal()) : dispatch(closeAuthModal());
	};

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div className="authmodalcontainer">
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
							<div className="col col-sm-6 col-md-8 col-lg-8">
								<WelcomeGraphics view={view} setView={setView} />
							</div>
							<div className="col col-sm-6 col-md-4 col-lg-4">
								<p
									className="backBtn"
									onClick={(e) =>
										view === "login" ? setView("signup") : setView("login")
									}
								>
									Back to{" "}
									<span className="pink">
										{view === "login" ? "SignUp" : "LogIn"}
									</span>
								</p>
								<div className="form">
									{view === "login" ? (
										<Login setView={setView} open={open} setOpen={open} />
									) : (
										<Signup setView={setView} open={open} setOpen={open} />
									)}
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
			<p className="signup-link-text">
				Don't have account?{" "}
				<span
					style={{ color: "#fc0384", cursor: "pointer" }}
					onClick={(e) => setView("signup")}
				>
					Sign Up
				</span>
			</p>
		) : (
			<p className="signup-link-text">
				Already have an account?{" "}
				<span
					style={{ color: "#fc0384", cursor: "pointer" }}
					onClick={(e) => setView("login")}
				>
					Log In
				</span>
			</p>
		)}

		<span id="logo">
			<img src={"./logo-full-small.png"} alt="" />
		</span>
		<img id="coaching" src={"./icons/auth/coaching.svg"} alt="" />
		<img id="teacher" src={"./icons/auth/teacher.svg"} alt="" />
	</div>
);
