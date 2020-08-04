import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import { toast } from "react-toastify";
import { handleSignIn,signIn, signOut, closeAuthModal } from "../../store/actions/authActions";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import { LOCAL_STORAGE_AUTH_KEY } from "../../constants/base";
import { getIPURL, sendLoginOTPURL, verifyOTPURL } from "../../constants/api";
import { WHITEBOARD_PATH, TEACHER_ADD_DETAILS_PATH } from "../../constants/path";

export default function Login(props) {
	const [mobile, setMobile] = useState("");
	const [otp, setOTP] = useState("");
	const [next, setNext] = useState(false);
	const [loading, setLoading] = useState(false);
	let history = useHistory();
	const dispatch = useDispatch();

	useEffect(() => {
		getIP();
	}, []);

	const getIP = async () => {
		try {
			const res = await fetch(getIPURL);
			const result = await res.text();
			console.log("result:", result);
		} catch (e) {
			console.log("Error getting IP", e);
		}
	};

	const sendOTP = async (mobile) => {
		try {
			setLoading(true);
			const res = await fetch(`${sendLoginOTPURL}${mobile}`);
			const result = await res.text();
			console.log("result:", result);
			if (result === '"SUCCESS"') {
				setLoading(false);
				setNext(true);
			} else if (result === '"USERNOTEXISTS"') {
				toast("💡 You have not signed up yet. Please sign up first...");
				setLoading(false);
				props.setView("signup");
			} else {
				toast("❌ Try again! OTP could not be sent!!");
				setLoading(false);
			}
		} catch (e) {
			console.log("Error sending OTP", e);
			toast("❌ Try again! Something went wrong!!");
			setLoading(false);
		}
	};

	const handleNext = () => {
		sendOTP(mobile);
	};

	const handleLogin = async () => {
		setLoading(true);
		try {
			const res = await fetch(`${verifyOTPURL}${otp}`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},

				body: JSON.stringify({
					contactNo: mobile,
					role: 0,
				}),
			});
			const result = await res.json();

			if (result.statusCode === "SUCCESS") {
					console.log("Login Success");
					setLoading(false);

					const userData= {
						token: result.token,
						role: result.user.role,
						uid: result.user.uid,
						contactNo: result.user.contactNo,
						basicDetailsExist: result.user.basicDetailsExist
					}

        console.log("Setting data in localstorage", userData )
        await localStorage.setItem(LOCAL_STORAGE_AUTH_KEY, userData.token)
        console.log("localstorage done.. now dispatching" )
        
				await dispatch(signIn(userData));
				await dispatch(closeAuthModal());
				
				if(userData.role === 'Teacher' && !userData.basicDetailsExist){
					history.push(TEACHER_ADD_DETAILS_PATH);
				}else{
					history.push(WHITEBOARD_PATH);
				}
        
			} else {
				toast("❌ Invalid OTP!!");
				setLoading(false);
			}
		} catch (e) {
			console.log("Error verifying OTP", e);
			toast("❌ Try again! Something went wrong!!");
			setLoading(false);
		}
	};

	return (
		<div className="login">
			<h1 className="login__header">LOGIN</h1>
			<h2 className="login__subheader">BE ONE OF US!</h2>

			{!next ? (
				<div className="login__form">
					<PhoneInput
						country={"in"}
						value={mobile}
						onChange={(mobile) => setMobile(mobile)}
						inputProps={{
							name: "phone",
							required: true,
							autoFocus: true,
						}}
					/>
					<button
						className="btn btn-purple"
						disabled={mobile.length < 5}
						onClick={handleNext}
					>
						NEXT
					</button>
					{loading && <CircularProgress size={24} className={"nextLoading"} />}
				</div>
			) : (
				<div className="login__form">
					<TextField
						id="input"
						label="OTP"
						variant="outlined"
						value={otp}
						onChange={(e) => setOTP(e.target.value)}
					/>
					<button
						className="btn btn-purple"
						disabled={otp.length === 0}
						onClick={handleLogin}
					>
						LOGIN
					</button>
					{loading && <CircularProgress size={24} className={"nextLoading"} />}
				</div>
			)}
		</div>
	);
}
