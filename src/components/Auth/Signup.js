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

import { signIn, signOut } from "../../store/actions/authActions";

const addUserURL = "https://score-backend.herokuapp.com/scoar/cred/add";
const checkUserExistURL =
	"https://score-backend.herokuapp.com/scoar/cred/checkuserexists/";

const sendOTPURL =
	"https://score-backend.herokuapp.com/scoar/auth/signup/sendotp/";

const verifyOTPURL =
	"https://score-backend.herokuapp.com/scoar/auth/verifyotp/";

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
			const res = await fetch(`${sendOTPURL}${mobile}`);
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
						contactNo: result.user.contactNo
					}

        console.log("Setting data in localstorage", userData )
        await localStorage.setItem('scoar_auth_token', userData.token)
        console.log("localstorage done.. now dispatching" )
        
        await dispatch(signIn(userData));
        
        history.push("/whiteboard");
			} else {
				toast("Invalid OTP!!");
				setLoading(true);
				return;
			}
		} catch (e) {
			console.log("Error verifying OTP", e);
			toast("Try again! Something went wrong!!");
			setLoading(true);
			return false;
		}
	};

	// const addNewUser = async (data) => {
	// 	try {
	// 		const rawResponse = await fetch(addUserURL, {
	// 			method: "POST",
	// 			headers: {
	// 				Accept: "application/json",
	// 				"Content-Type": "application/json",
	// 			},
	// 			body: JSON.stringify(data),
	// 		});

	// 		console.log(JSON.stringify(data));

	// 		const result = await rawResponse.json();

	// 		console.log("add user res", result);

	// 		// TODO: complete the signup

	// 		// if(result === 'approved'){
	// 		//   console.log("Signup Success")
	// 		//  toast("Sign up success.. Please login to continue")
	// 		// }else{
	// 		// 	toast("Sign Up failed.. please try again")
	// 		// }
	// 	} catch (e) {
	// 		console.log("Error verifying OTP", e);
	// 		toast("Try again! Something went wrong!!");
	// 	}
	// };

	const handleNext = async () => {
		// setNext(true);
		try {
			sendOTP(mobile);
			// let res = await fetch(`${checkUserExistURL}${mobile}`);
			// if (res.status === 200) {
			// 	res = await res.json();
			// 	console.log("sucess", res);
			// 	const { uid } = res.credential;
			// 	if (uid !== 0) {
			// 		toast("User already exist. Please Login");
			// 	} else {
			// 		console.log("sending OTP...");
			// 		sendOTP(mobile);
			// 	}
			// } else {
			// 	toast("Try again! Something went wrong!!");
			// }
		} catch (e) {
			toast("Try again! Something went wrong!!");
		}
	};

	const handleSignup = async () => {
		// toast("Success");
		try {
			// verify otp
			await verifyOTP(otp);

			// if (verified) {
			// 	// Add new user in DB
			// 	await addNewUser({ contactNo: mobile, role: role });
			// }
		} catch (e) {
			console.log("Error signup", e);
			toast("Try again! Something went wrong!!");
		}
	};

	const handleLogIn = async (otp) => {
		try {
			const res = await fetch(
				`https://score-backend.herokuapp.com/scoar/auth/verifyotp/${otp}`
			);
			const result = await res.text();

			if (result === "approved") {
				console.log("Success");
				history.push("/whiteboard");
			} else {
				toast("Try again! Something went wrong!!");
			}
		} catch (e) {
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
