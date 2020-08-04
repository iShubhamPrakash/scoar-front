import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useSelector, useDispatch } from "react-redux";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import { toast } from "react-toastify";

import { signIn, signOut, closeAuthModal } from "../../store/actions/authActions";
import { verifyOTPURL,sendSignupOTPURL } from "../../constants/api";
import { WHITEBOARD_PATH, TEACHER_ADD_DETAILS_PATH } from "../../constants/path";
import { LOCAL_STORAGE_AUTH_KEY } from "../../constants/base";


export default function Signup(props) {
	const [mobile, setMobile] = useState("");
	const [otp, setOTP] = useState("");
	const [role, setRole] = useState("Student");
	const [next, setNext] = useState(false);
	const [loading, setLoading] = useState(false);
	const dispatch = useDispatch();

	let history = useHistory();

	const handleChange = (event) => {
		setRole(event.target.value);
	};

	const sendOTP = async (mobile) => {
		try {
			setLoading(true);
			const res = await fetch(`${sendSignupOTPURL}${mobile}`);
			const result = await res.text();
			console.log("result:", result);
			if (result === '"SUCCESS"') {
				setLoading(false);
				setNext(true);
			} else if (result === '"USERALREADYEXISTS"') {
				setLoading(false);
				toast("Account already exists, please sign in");
				props.setView("login");
			} else {
				toast("Try again! OTP could not be sent!!");
				setLoading(false);
			}
		} catch (e) {
			console.log("Error sending OTP", e);
			toast("Try again! Something went wrong!!");
			setLoading(false);
		}
	};

	const verifyOTP = async (otp) => {
		try {
			setLoading(true);
			const res = await fetch(`${verifyOTPURL}${otp}`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},

				body: JSON.stringify({
					contactNo: mobile,
					role: role,
				}),
			});
			const result = await res.json();

			if (result.statusCode === "SUCCESS") {
				console.log("Sign up Success");

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
				toast("Invalid OTP!!");
				setLoading(false);
				return;
			}
		} catch (e) {
			console.log("Error verifying OTP", e);
			toast("Try again! Something went wrong!!");
			setLoading(false);
			return false;
		}
	};

	const handleNext = async () => {
		sendOTP(mobile);
	};

	const handleSignup = async () => {
		try {
			// verify otp
			await verifyOTP(otp);
		} catch (e) {
			console.log("Error signup", e);
			toast("Try again! Something went wrong!!");
		}
	};

	return (
		<div className="login">
			<h1 className="login__header">SIGN UP</h1>
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
					<FormControl component="fieldset">
						<FormLabel component="legend" style={{ paddingLeft: "1.5em" }}>
							I'm a
						</FormLabel>
						<RadioGroup
							aria-label="role"
							name="role"
							value={role}
							defaultValue="Student"
							onChange={handleChange}
							className="radiogroup"
						>
							<FormControlLabel
								value="Student"
								control={<Radio color="primary" />}
								label="STUDENT"
							/>
							<FormControlLabel
								value="Teacher"
								control={<Radio color="primary" />}
								label="TEACHER"
							/>
						</RadioGroup>
					</FormControl>

					<TextField
						id="input"
						label="Enter OTP"
						variant="outlined"
						value={otp}
						onChange={(e) => setOTP(e.target.value)}
					/>
					<button
						className="btn btn-purple"
						disabled={otp.length === 0}
						onClick={handleSignup}
					>
						SIGN UP
					</button>
					{loading && <CircularProgress size={24} className={"nextLoading"} />}
				</div>
			)}
		</div>
	);
}
