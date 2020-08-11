import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Card from "@material-ui/core/Card";
import { Avatar, TextField, Button } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
// import Select from "@material-ui/core/Select";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";
import CircularProgress from "@material-ui/core/CircularProgress";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import { toast } from "react-toastify";
import { DatePicker } from "@material-ui/pickers";
import { DASHBOARD_PATH, getDashboardPath } from "../../constants/path";
import { BASIC_DETAIL_API_URL, STUDENT_BASIC_DETAIL_API_URL } from "../../constants/api";
import { saveDataAsCookie } from "../../utils/cookieData";
import { AUTH_COOKIE_NAME } from "../../constants/base";

export default function StudentDetail() {
	const history = useHistory();

	const [step, setStep] = useState(1);
	const [loading, setLoading] = useState(false);

	/// Step 1
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [gender, setGender] = useState("Male");
	const [dateOfBirth, setDateOfBirth] = useState(new Date());

	/// Step 2
	const [schoolName, setSchoolName] = useState("");
	const [board, SetBoard] = useState("");
	const [addressLine1, setAddressLine1] = useState("");
	const [addressLine2, setAddressLine2] = useState("");
	const [city, setCity] = useState("");
	const [zip, setZip] = useState("");
	const [country, setCountry] = useState("India");

	const auth = useSelector((state) => state.auth);

	useEffect(() => {
		console.log("state", auth);
	}, []);

	// Submit
	const handleFinalSubmit = async () => {
		console.log("submit start...");
		setLoading(true);

		const token = auth.token;

		const submitData = {
			firstname: firstName,
			lastname: lastName,
			email: email,
      gender: gender,
      dob: new Date(dateOfBirth).toLocaleDateString(),
			profilepic: "",
      institutionname: schoolName,
			board: board,
			address:{
			line1: addressLine1,
			line2: addressLine2,
			city: city,
			zipcode: zip,
			country: country,
			}
    };

		try {
			const res = await fetch(`${STUDENT_BASIC_DETAIL_API_URL}${token}`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},

				body: JSON.stringify(submitData),
			});

			const result = await res.text();

			console.log("Result", result);
			if (result.includes("SUCCESS")) {
				toast("SUCCESS");
				saveDataAsCookie(AUTH_COOKIE_NAME, {
					...auth,
					basicDetailsExist: true,
				});
				setLoading(false);
				history.push(getDashboardPath(auth.role));
			} else if (result === "WRONGTOKEN") {
				toast("Wrong token. please sign in again...");
				setLoading(false);
			} else {
				toast("Something went wrong");
				setLoading(false);
				// history.push(getDashboardPath(auth.role));
			}
		} catch (e) {
			console.log("Error submitting data", e);
			toast("Error: Could not submit data");
			setLoading(false);
			// history.push(getDashboardPath(auth.role));
		}
	};
	return (
		<div className="detailsForm container-flex">
			<div className="row detailsForm__mainRow">
				<div className="col col-12 col-xsm-12 col-sm-12 col-md-6 left">
					<img src="/icons/details/left_svg.svg" alt="" />
				</div>
				<div className="col col-12 col-xsm-12 col-sm-12 col-md-6 right">
					<Card className="detailsForm__card">
						<div className="header">
							<img src="/logo-full-small.png" alt="" />
							<div className="stepIndicator">
								<span
									className={step == 1 ? "active" : null}
									onClick={(e) => setStep(1)}
								>
									1
								</span>
								<span
									className={step == 2 ? "active" : null}
									onClick={(e) => setStep(2)}
								>
									2
								</span>
							</div>
						</div>

						<div className="body">
							{step === 1 ? (
								<StepOneForm
									firstName={firstName}
									setFirstName={setFirstName}
									lastName={lastName}
									setLastName={setLastName}
									email={email}
									setEmail={setEmail}
									gender={gender}
									setGender={setGender}
									dateOfBirth={dateOfBirth}
									setDateOfBirth={setDateOfBirth}
									setStep={setStep}
								/>
							) : step === 2 ? (
								<StepTwoForm
									schoolName={schoolName}
									setSchoolName={setSchoolName}
									board={board}
									SetBoard={SetBoard}
									addressLine1={addressLine1}
									setAddressLine1={setAddressLine1}
									addressLine2={addressLine2}
									setAddressLine2={setAddressLine2}
									city={city}
									setCity={setCity}
									zip={zip}
									setZip={setZip}
									country={country}
									setCountry={setCountry}
									setStep={setStep}
									handleFinalSubmit={handleFinalSubmit}
								/>
							) : null}
						</div>
					</Card>
				</div>
			</div>
		</div>
	);
}

const StepOneForm = (props) => {
	const {
		firstName,
		setFirstName,
		lastName,
		setLastName,
		email,
		setEmail,
		gender,
		setGender,
		setStep,
		dateOfBirth,
		setDateOfBirth,
	} = props;

	return (
		<>
			<h2 className="text-center">Account Details</h2>
			<Avatar src="" className="avatar" />
			<br />
			<form>
				<TextField
					id="first-name"
					label="First Name"
					variant="outlined"
					size="small"
					className="input"
					value={firstName}
					onChange={(e) => setFirstName(e.target.value)}
				/>

				<br />

				<TextField
					id="last-name"
					label="Last Name"
					variant="outlined"
					size="small"
					className="input"
					value={lastName}
					onChange={(e) => setLastName(e.target.value)}
				/>

				<br />

				<TextField
					id="email"
					label="Email"
					variant="outlined"
					size="small"
					className="input"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<br />
				<br />
				<FormControl component="fieldset" className="radiogroup">
					<FormLabel component="legend">
						<small>Gender</small>
					</FormLabel>
					<RadioGroup
						aria-label="gender"
						name="gender"
						value={gender}
						defaultValue="Student"
						onChange={(e) => setGender(e.target.value)}
					>
						<FormControlLabel
							value="Male"
							control={<Radio color="primary" />}
							label="Male"
						/>
						<FormControlLabel
							value="Female"
							control={<Radio color="primary" />}
							label="Female"
						/>
						<FormControlLabel
							value="Other"
							control={<Radio color="primary" />}
							label="Other"
						/>
					</RadioGroup>
				</FormControl>

				<br />
				<DatePicker
					disableFuture
					openTo="year"
					format="dd/MM/yyyy"
					label="Date of birth"
					views={["year", "month", "date"]}
					size="small"
					variant="inline"
					inputVariant="outlined"
					className="input"
					value={dateOfBirth}
					onChange={setDateOfBirth}
				/>
				<br />
				<br />

				<Button variant="contained" color="primary" onClick={(e) => setStep(2)}>
					Next
				</Button>
			</form>
		</>
	);
};

const StepTwoForm = (props) => {
	const {
		schoolName,
		setSchoolName,
		board,
		SetBoard,
		addressLine1,
		setAddressLine1,
		addressLine2,
		setAddressLine2,
		city,
		setCity,
		zip,
		setZip,
		country,
		setCountry,
		handleFinalSubmit,
	} = props;

	return (
		<>
			<h2 className="text-center">Account Details</h2>
			<form>
				<TextField
					id="school-name"
					label="Name of the School"
					variant="outlined"
					size="small"
					className="input"
					value={schoolName}
					onChange={(e) => setSchoolName(e.target.value)}
				/>
				<br />

				<TextField
					id="board"
					label="Board"
					variant="outlined"
					size="small"
          className="input"
          placeholder="CBSE"
					value={board}
					onChange={(e) => SetBoard(e.target.value)}
				/>
				<small>* Enter NA if studying in collage.</small>
				<br />
				<br />
				<br />


				<TextField
					id="addressLine1"
					label="Address line 1"
					variant="outlined"
					size="small"
					className="input"
					value={addressLine1}
					onChange={(e) => setAddressLine1(e.target.value)}
				/>
				<br />
				<TextField
					id="addressLine2"
					label="Address line 2"
					variant="outlined"
					size="small"
					className="input"
					value={addressLine2}
					onChange={(e) => setAddressLine2(e.target.value)}
				/>
				<br />
				<br />

				<div className="input groupOfTwo">
					<TextField
						id="city"
						label="City"
						variant="outlined"
						size="small"
						value={city}
						onChange={(e) => setCity(e.target.value)}
					/>
					<TextField
						id="zip"
						label="Zip Code"
						variant="outlined"
						size="small"
						value={zip}
						onChange={(e) => setZip(e.target.value)}
					/>
				</div>
				<br />

				<TextField
					id="country"
					label="City"
					variant="outlined"
					size="small"
					className="input"
					value={country}
					onChange={(e) => setCountry(e.target.value)}
				/>
				<br />
				<br />

				<Button variant="contained" color="primary" onClick={handleFinalSubmit}>
					Submit
				</Button>
			</form>
		</>
	);
};
