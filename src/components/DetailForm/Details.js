import React, { useState, useEffect } from "react";
import {useSelector} from 'react-redux'
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

const BASIC_DETAIL_API_URL ="https://score-backend.herokuapp.com/scoar/teacher/details/add/"

export default function Details() {
	const [step, setStep] = useState(1);
	const [loading, setLoading] = useState(false)

	/// Step 1
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [gender, setGender] = useState("Male");
	const [experience, setExperience] = useState("0");
	const [teacherType, setTeacherType] = useState("Tuition");

	/// Step 2 
	const [schoolName, setSchoolName] = useState("");
	const [centrename, setCentrename] = useState("");
	const [noOfStudents, SetNoOfStudents] = useState("");
	const [subjects, setSubjects] = useState([]); 
	const [addressLine1, setAddressLine1] = useState("");
	const [addressLine2, setAddressLine2] = useState("");
	const [city, setCity] = useState("");
	const [zip, setZip] = useState("");
	const [country, setCountry] = useState("India");

	/// Step 3

	const [beneficiary, setBeneficiary] = useState("")
	const [accountNo, setAccountNo] = useState("")
	const [accountNoConfirm, setAccountNoConfirm] = useState("")
	const [ifsc, setIfsc] = useState("")
	const [beneficiaryBankName, setBeneficiaryBankName] = useState("")
	const [branch, setBranch] = useState("")

	const auth = useSelector(state => state.auth)

	useEffect(() => {
		console.log("state", auth)
	}, [])

	// Submit
	const handleFinalSubmit = async ()=>{
		console.log("submit start...")
		setLoading(true)

		const token = auth.token;

		const submitData = {
			firstname: firstName,
			lastname: lastName,
			email: email,
			gender: gender,
			experience: experience,
			type: teacherType,
			centrename: centrename,
			noofstudents: noOfStudents,
			profilepic: "",
			schoolname: schoolName,
			line1: addressLine1,
			line2: addressLine2,
			city: city,
			zipcode: zip,
			country: country,
			holdername: beneficiary,
			accountnumber: accountNo,
			ifsccode: ifsc,
			bankname: beneficiaryBankName,
			branchname: branch,
			subjects: subjects
		}

		try{
			const res = await fetch(`${BASIC_DETAIL_API_URL}${token}`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},

				body: JSON.stringify(submitData),
			});

			const result = await res.text();

			console.log("Result", result)
			if(result === "SUCCESS"){
				alert("SUCCESS")
			} else if(result === "WRONGTOKEN"){
				alert("Wrong token. please sign in again...")
			}else{
				alert("Something went wrong")
			}
		}catch (e) {
			console.log("Error submitting data", e)
			alert("Error: Could not submit data")
			setLoading(false)
		}

	}
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
								<span
									className={step == 3 ? "active" : null}
									onClick={(e) => setStep(3)}
								>
									3
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
								
								<StepThreeForm
									beneficiary={beneficiary}
									setBeneficiary={setBeneficiary}
									accountNo={accountNo}
									setAccountNo={setAccountNo}
									accountNoConfirm={accountNoConfirm}
									setAccountNoConfirm={setAccountNoConfirm}
									ifsc={ifsc}
									setIfsc={setIfsc}
									beneficiaryBankName={beneficiaryBankName}
									setBeneficiaryBankName={setBeneficiaryBankName}
									branch={branch}
									setBranch={setBranch}
									handleFinalSubmit={handleFinalSubmit}
									loading={loading}
									setLoading={setLoading}
								/>
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
		value && setSubjects(value.map((item) => item.value));
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
				{teacherType === "School" ? (
					<>
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
					</>
				) : null}
				<TextField
					id="institute-name"
					label="Institute/Coaching center Name"
					variant="outlined"
					size="small"
					className="input"
					value={centrename}
					onChange={(e) => setCentrename(e.target.value)}
					helperText="* Enter NA if not applicable"
					style={{ marginBottom: "1em" }}
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

				{teacherType !== "Extra" ? (
					<>
						<CreatableSelect
							components={components}
							inputValue={inputValue}
							isClearable
							isMulti
							menuIsOpen={false}
							onChange={handleChange}
							onInputChange={handleInputChange}
							onKeyDown={handleKeyDown}
							placeholder="Add Subject (Press enter to add multiple items)"
							value={value}
							className="input"
						/>
						<small>Press enter to add more subjects...</small>
						<br />
					</>
				) : null}

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

				<Button variant="contained" color="primary" onClick={(e) => setStep(3)}>
					Next
				</Button>
			</form>
		</>
	);
};

const StepThreeForm = (props) =>{
	const {
		beneficiary,
		setBeneficiary,
		accountNo,
		setAccountNo,
		accountNoConfirm,
		setAccountNoConfirm,
		ifsc,
		setIfsc,
		beneficiaryBankName,
		setBeneficiaryBankName,
		branch,
		setBranch,
		handleFinalSubmit,
		loading,
		setLoading
	} = props;

	return (
		<>
			<form>
				<h2 className="text-center">Bank Details</h2>
				<TextField
					id="beneficiary-name"
					label="Beneficiary Name"
					variant="outlined"
					size="small"
					className="input"
					value={beneficiary}
					onChange={(e) => setBeneficiary(e.target.value)}
				/>
				<br />

				<TextField
					id="account-no"
					label="Account Number"
					variant="outlined"
					size="small"
					className="input"
					value={accountNo}
					onChange={(e) => setAccountNo(e.target.value)}
				/>
				<br />

				<TextField
					id="account-no-confirm"
					label="Confirm Account Number"
					variant="outlined"
					size="small"
					className="input"
					value={accountNoConfirm}
					onChange={(e) => setAccountNoConfirm(e.target.value)}
				/>
				<br />


				<TextField
					id="ifcs"
					label="IFSC Code"
					variant="outlined"
					size="small"
					className="input"
					value={ifsc}
					onChange={(e) => setIfsc(e.target.value)}
				/>
				<br />

				<TextField
					id="beneficiary-bank-name"
					label="Beneficiary Bank Name"
					variant="outlined"
					size="small"
					className="input"
					value={beneficiaryBankName}
					onChange={(e) => setBeneficiaryBankName(e.target.value)}
				/>
				<br />

				<TextField
					id="branch-name"
					label="Branch Name"
					variant="outlined"
					size="small"
					className="input"
					value={branch}
					onChange={(e) => setBranch(e.target.value)}
				/>
				<br />

				<Button variant="contained" color="primary" onClick={(e) => handleFinalSubmit()}>
					Submit
				</Button>
			</form>
		</>
	);
}