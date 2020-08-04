import React, { useState, useEffect } from "react";
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
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";

export default function Details() {
	const [step, setStep] = useState(1);
	/// Step 1
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [gender, setGender] = useState("Male");
	const [experience, setExperience] = useState("0");
	const [teacherType, setTeacherType] = useState("Tuition");

	/// Step 2 -TutionTeacher
	const [schoolName, setSchoolName] = useState(""); //school teacher

	const [centrename, setCentrename] = useState(""); // tutionTeacher

	const [noOfStudents, SetNoOfStudents] = useState("");

	const [subjects, setSubjects] = useState([]); // tutionTeacher

	const [addressLine1, setAddressLine1] = useState("");
	const [addressLine2, setAddressLine2] = useState("");
	const [city, setCity] = useState("");
	const [zip, setZip] = useState("");
	const [country, setCountry] = useState("India");

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
								<span className={step == 1 ? "active" : null}>1</span>
								<span className={step == 2 ? "active" : null}>2</span>
								<span className={step == 3 ? "active" : null}>3</span>
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
									experience={experience}
									setExperience={setExperience}
									teacherType={teacherType}
									setTeacherType={setTeacherType}
									setStep={setStep}
								/>
							) : step === 2 ? (
								<StepTwoForm
									teacherType={teacherType}
									schoolName={schoolName}
									setSchoolName={setSchoolName}
									centrename={centrename}
									setCentrename={setCentrename}
									noOfStudents={noOfStudents}
									SetNoOfStudents={SetNoOfStudents}
									subjects={subjects}
									setSubjects={setSubjects}
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
								/>
							) : (
								<h1>Step 3</h1>
							)}
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
		experience,
		setExperience,
		teacherType,
		setTeacherType,
		setStep,
	} = props;

	const teacherTypeSelectOptions = [
		{ value: "Tuition", label: "Tuition" },
		{ value: "School", label: "School" },
		{ value: "Extra", label: "Extra" },
	];

	return (
		<>
			<h2 className="text-center">Account Details</h2>
			<Avatar src="" className="avatar" />
			<br />
			<form autoComplete="off">
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
							value="Femail"
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
				<TextField
					id="last-name"
					label="Experience in years"
					variant="outlined"
					size="small"
					className="input"
					value={experience}
					onChange={(e) => setExperience(e.target.value)}
				/>
				<br />
				<Select
					className="input"
					classNamePrefix="select"
					defaultValue={teacherTypeSelectOptions[0]}
					name="typeOfTeacher"
					options={teacherTypeSelectOptions}
					value={teacherTypeSelectOptions.filter(
						(obj) => obj.value === teacherType
					)}
					onChange={(e) => setTeacherType(e.value)}
				/>
				<br />

				<Button variant="contained" color="primary" onClick={(e) => setStep(2)}>
					Next
				</Button>
			</form>
		</>
	);
};

const StepTwoForm = (props) => {
	const [value, setValue] = useState([]);
	const [inputValue, setInputValue] = useState("");

	const {
		teacherType,
		schoolName,
		setSchoolName,
		centrename,
		setCentrename,
		noOfStudents,
		SetNoOfStudents,
		subjects,
		setSubjects,
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
		setStep,
	} = props;

	useEffect(() => {
		setSubjects(value.map((item) => item.value));
	}, [value]);

	const components = {
		DropdownIndicator: null,
	};

	const createOption = (label) => ({
		label,
		value: label,
	});

	const handleChange = (value, actionMeta) => {
		console.group("Value Changed");
		console.log(value);
		console.log(`action: ${actionMeta.action}`);
		console.groupEnd();
		setValue(value);
	};

	const handleInputChange = (inputValue) => {
		setInputValue(inputValue);
	};

	const handleKeyDown = (event) => {
		if (!inputValue) return;
		switch (event.key) {
			case "Enter":
			case "Tab":
				console.group("Value Added");
				console.log(value);
				console.groupEnd();
				setInputValue("");
				setValue([...value, createOption(inputValue)]);

				event.preventDefault();
				break;
			default:
				return;
		}
	};

	return (
		<>
			<h2 className="text-center">Account Details</h2>
			<form>
				<TextField
					id="institute-name"
					label="Institute/Coaching center Name"
					variant="outlined"
					size="small"
					className="input"
					value={centrename}
					onChange={(e) => setCentrename(e.target.value)}
					helperText= "Enter NA if not applicable"
				/>

				<br />

				<TextField
					id="no-of-students"
					label="Number of Students"
					variant="outlined"
					size="small"
					className="input"
					value={noOfStudents}
					onChange={(e) => SetNoOfStudents(e.target.value)}
				/>

				<br />

				<CreatableSelect
					components={components}
					inputValue={inputValue}
					isClearable
					isMulti
					menuIsOpen={false}
					onChange={handleChange}
					onInputChange={handleInputChange}
					onKeyDown={handleKeyDown}
					placeholder="* Enter Subject names..."
					value={value}
					className="input"
				/>

				<br />
				<p className="text-bold text-small text-left">Shipping Address</p>
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
				<Button variant="contained" color="primary" onClick={(e) => setStep(2)}>
					Next
				</Button>
			</form>
		</>
	);
};
