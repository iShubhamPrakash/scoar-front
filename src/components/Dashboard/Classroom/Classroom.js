import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import SubjectIcon from "@material-ui/icons/Subject";
import ScheduleIcon from "@material-ui/icons/Schedule";
import HeaderTop from "../Containers/HeaderTop";
import {
	Card,
	Button,
	Avatar,
	TextField,
	CircularProgress,
} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";

import { withStyles } from "@material-ui/core/styles";
import {
	CLASSROOMS_LIST_API_URL,
	ADD_STUDENT_TO_CLASS_API_URL,
	CREATE_CLASS_API_URL,
} from "../../../constants/api";
import { getDiffInHr } from "../../../utils/dateTime";
import LoadingIcon from "../../UI/LoadingIcon";
import { CLASSROOM_PATH } from "../../../constants/path";
import { toast } from "react-toastify";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import ChangeScheduleModal from "./ChangeScheduleModal";
import { fetchClassRoomList } from "../../../store/actions/classRoomActions";

export default function Classroom() {
	const auth = useSelector((state) => state.auth);
	const classRoom = useSelector(state => state.classRoom)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchClassRoomList(auth.token));
	}, []);

	return (
		<div className="classroom">
			<HeaderTop>
				<h1>Your Class Room List</h1>
				<div className="flex-grow"></div>
				&nbsp;&nbsp;&nbsp;&nbsp;
				<SearchInput />
			</HeaderTop>

			<div className="classroom__body row">
				<div className="col-sm-8 col-lg-8">
					<div className="row classCardRow">
						{classRoom.loadingList ? (
							<LoadingIcon />
						) : classRoom.list.length ? (
							classRoom.list.map((classRoom) => {
								const {
									crid,
									classroomname,
									classtype,
									starttime,
									endtime,
									mode,
									fees,
									description,
									noofstudents,
								} = classRoom;
								return (
									<div className="col-12 col-sm-12 col-lg-6">
										<Card className="classCard">
											<ClassData
												crid={crid}
												classroomname={classroomname}
												classtype={classtype}
												starttime={starttime}
												endtime={endtime}
												mode={mode}
												fees={fees}
												description={description}
												noofstudents={noofstudents}
											/>
										</Card>
									</div>
								);
							})
						) : (
							<p className="center-text">No data to show</p>
						)}
					</div>
				</div>
				<div className="col-sm-4 col-lg-4 formContainer">
					<Card>
						<CreateClassRoomForm fetchClassRoomList={e=>dispatch(fetchClassRoomList(auth.token))} />
					</Card>
				</div>
			</div>
		</div>
	);
}

const SearchInput = () => {
	return (
		<Input
			id="search-input"
			variant="outlined"
			placeholder="Search Student"
			startAdornment={
				<InputAdornment position="start">
					<SearchIcon />
				</InputAdornment>
			}
		/>
	);
};

const ClassData = (props) => {
	const history = useHistory();

	const {
		crid,
		classroomname,
		classtype,
		starttime,
		endtime,
		mode,
		fees,
		description,
		noofstudents,
	} = props;
	return (
		<div className="classData">
			<div className="classData__id">
				<p>Classroom ID: {crid}</p>
			</div>

			<div className="classData__dataContainer">
				<div className="icon">
					<span>
						<SubjectIcon />
					</span>
				</div>
				<div className="studentDetails">
					<h4>{classroomname}</h4>
					<p>Total students: {noofstudents}</p>
					<p>Mode of instruction: {mode}</p>
					{/* <p>
						<ScheduleIcon /> {getDiffInHr(starttime,endtime)} hour
					</p> */}
				</div>
			</div>

			<div className="classData__calendar">
				<h5 className="text-left">Classes on</h5>
				<div className="week">
					<div className="day">
						<Avatar className="active">S</Avatar>
					</div>
					<div className="day">
						<Avatar className="">M</Avatar>
					</div>
					<div className="day">
						<Avatar className="active">T</Avatar>
					</div>
					<div className="day">
						<Avatar className="active">W</Avatar>
					</div>
					<div className="day">
						<Avatar className="">T</Avatar>
					</div>
					<div className="day">
						<Avatar className="active">F</Avatar>
					</div>
					<div className="day">
						<Avatar className="active">S</Avatar>
					</div>
				</div>
			</div>

			<div className="classData__btnContainer">
				<AddStudentModal {...props} />
				&nbsp; &nbsp;
				<Button
					size="small"
					variant="contained"
					onClick={(e) => history.push(`${CLASSROOM_PATH}/${crid}`)}
				>
					View
				</Button>
			</div>
		</div>
	);
};

const CreateClassRoomForm = (props) => {
	const { fetchClassRoomList } = props;

	const [name, setName] = useState("");
	const [tuitionType, setTuitionType] = useState("Academics");
	const [startTime, setStartTime] = useState(["", "", "", "", "", "", ""]);
	const [endTime, setEndTime] = useState(["", "", "", "", "", "", ""]);
	const [mode, setMode] = useState("English");
	const [fee, setFee] = useState(0);
	const [billingPeriod, setBillingPeriod] = useState("montly");
	const [description, setDescription] = useState("");
	const [loading, setLoading] = useState(false);

	const auth = useSelector((state) => state.auth);
	const formSubmit = () => {
		setLoading(true);

		if (name.length === 0 || description.length === 0) {
			toast.error("💡 All fiels are required");
			setLoading(false);
			return;
		}

		try {
			// Changing the fee to montly
			let fees = fee;
			if (billingPeriod === "quaterly") {
				fees = fee / 4;
			} else if (billingPeriod === "yearly") {
				fees = fee / 12;
			}

			fetch(`${CREATE_CLASS_API_URL}${auth.token}`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					classroomname: name,
					classtype: tuitionType,
					starttime: startTime,
					endtime: endTime,
					mode: mode,
					fees: fees,
					description: description,
				}),
			})
				.then((res) => res.json())
				.then((data) => {
					if (data.statusCode.includes("SUCCESS")) {
						toast("✅ Class room created successfully");
						fetchClassRoomList();
						setLoading(false);
					} else {
						toast.error("❌ Could not create class room");
						setLoading(false);
					}
				});
		} catch (e) {
			setLoading(false);
			toast.error("❌ Could not create class room");
			console.log("error submitting form", e);
		}
	};
	return (
		<div className="createClassRommForm">
			<div className="createClassRommForm__header">
				<h3>Create Class Room</h3>
			</div>
			<div className="createClassRommForm__body">
				<form autoComplete="off" className="form">
					<TextField
						id="name"
						label="Name"
						variant="outlined"
						size="small"
						className="input"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>

					<br />

					<FormControl variant="outlined">
						<InputLabel>Tution Type</InputLabel>
						<Select
							labelId="demo-simple-select-outlined-label"
							id="demo-simple-select-outlined"
							value={tuitionType}
							onChange={(e) => setTuitionType(e.target.value)}
							label="Type of teacher"
							size="small"
							className="input"
						>
							<MenuItem value={"Academics"}>Academics</MenuItem>
							<MenuItem value={"Dancing"}>Dancing</MenuItem>
							<MenuItem value={"Music"}>Music</MenuItem>
							<MenuItem value={"Painting"}>Painting</MenuItem>
						</Select>
					</FormControl>

					<br />

					<ChangeScheduleModal
						startTime={startTime}
						endTime={endTime}
						setStartTime={setStartTime}
						setEndTime={setEndTime}
						buttonText={"Add schedule"}
						buttonClass=""
					/>
					<br />
					<FormControl variant="outlined">
						<InputLabel>Instruction mode</InputLabel>
						<Select
							labelId="demo-simple-select-outlined-label"
							id="demo-simple-select-outlined"
							value={mode}
							onChange={(e) => {
								setMode(e.target.value);
							}}
							label="Type of teacher"
							size="small"
							className="input"
						>
							<MenuItem value={"English"}>English</MenuItem>
							<MenuItem value={"Hindi"}>Hindi</MenuItem>
							<MenuItem value={"Regional"}>Regional</MenuItem>
						</Select>
					</FormControl>
					<br />

					<div className="feeRow">
						<TextField
							id="fee"
							label="Enter Fee"
							variant="outlined"
							size="small"
							value={fee}
							type="number"
							onChange={(e) => setFee(e.target.value)}
						/>
						<FormControl variant="outlined" className="periodSelect">
							<InputLabel>Billing period</InputLabel>

							<Select
								labelId="timeperiod"
								id="timeperiod"
								value={billingPeriod}
								onChange={(e) => setBillingPeriod(e.target.value)}
								label="Type of teacher"
								size="small"
								style={{ height: "40px" }}
							>
								<MenuItem value={"montly"}>per month</MenuItem>
								<MenuItem value={"quaterly"}>quaterly</MenuItem>
								<MenuItem value={"yearly"}>yearly</MenuItem>
							</Select>
						</FormControl>
					</div>
					<br />

					<TextField
						id="description"
						label="Description"
						variant="outlined"
						size="small"
						style={{ width: "300px" }}
						multiline
						rows={4}
						rowsMax={4}
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					/>
					<br />
					<Button
						variant="contained"
						className="createClassbtn"
						onClick={formSubmit}
						disabled={loading}
					>
						Create Class
					</Button>

					{loading ? (
						<CircularProgress size={24} className="loadingIcon" />
					) : null}
				</form>
			</div>
		</div>
	);
};

// Modals

const styles = (theme) => ({
	root: {
		margin: 0,
		padding: theme.spacing(2),
	},
	closeButton: {
		position: "absolute",
		right: theme.spacing(1),
		top: theme.spacing(1),
		color: theme.palette.grey[500],
	},
});

const DialogTitle = withStyles(styles)((props) => {
	const { children, classes, onClose, ...other } = props;
	return (
		<MuiDialogTitle disableTypography className={classes.root} {...other}>
			<Typography variant="h6">{children}</Typography>
			{onClose ? (
				<IconButton
					aria-label="close"
					className={classes.closeButton}
					onClick={onClose}
				>
					<CloseIcon />
				</IconButton>
			) : null}
		</MuiDialogTitle>
	);
});

const DialogContent = withStyles((theme) => ({
	root: {
		padding: theme.spacing(2),
	},
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
	root: {
		margin: 0,
		padding: theme.spacing(1),
	},
}))(MuiDialogActions);

const AddStudentModal = (props) => {
	const {
		crid,
		classroomname,
		classtype,
		starttime,
		endtime,
		mode,
		fees,
		description,
		noofstudents,
	} = props;

	const [open, setOpen] = useState(false);
	const [loading, setLoading] = useState(false);
	const [name, setName] = useState("");
	const [mobile, setMobile] = useState("");
	const [fee, setFee] = useState(fees);

	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	const handleAddStudent = () => {
		if (name.length === 0 || mobile.length === 0 || fee.length === 0) {
			toast.error("💡 All fields are mandetory");
			return;
		}
		addStudentToClass(ADD_STUDENT_TO_CLASS_API_URL, crid, mobile, fee);
	};

	const addStudentToClass = (url, crid, mobile, fee) => {
		setLoading(true);
		try {
			fetch(`${url}/${crid}/${mobile}/${fee}`)
				.then((res) => res.text())
				.then((res) => {
					if (res.includes("SUCCESS")) {
						toast("✅ Student added successfully");
						handleClose();
					} else if (res.includes("USERALREADYEXISTS")) {
						toast.warn("💡 Student already added to the class");
					} else {
						toast.error("❌ Could not add student to the class");
					}
					setLoading(false);
				});
		} catch (e) {
			toast.error("❌ Could not add student to the class");
			setLoading(false);
		}
	};

	return (
		<div>
			<Button size="small" variant="contained" onClick={handleClickOpen}>
				Add Student
			</Button>
			<Dialog
				onClose={handleClose}
				aria-labelledby="customized-dialog-title"
				open={open}
				className="addStudentModal"
				fullWidth={true}
				maxWidth={"md"}
			>
				<DialogTitle id="customized-dialog-title" onClose={handleClose}>
					<img src="/logo-full-small.png" alt="" style={{ width: "100px" }} />
					<h2>Add student to the class</h2>
					<div className="heading">
						<div className="icon">
							<span>
								<SubjectIcon />
							</span>
						</div>
						<div className="details">
							<h4>{classroomname}</h4>
							<p>Total students: {noofstudents}</p>
							{/* <p>Mode of instruction: {"English"}</p> */}
						</div>
					</div>
				</DialogTitle>
				<DialogContent dividers>
					<div className="body">
						<form autoComplete="off" className="form">
							<TextField
								id="name"
								label="Name"
								variant="outlined"
								className="input"
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>

							<PhoneInput
								country={"in"}
								value={mobile}
								onChange={(mobile) => setMobile(mobile)}
								containerClass="phoneInput"
								inputProps={{
									name: "phone",
									required: true,
								}}
							/>

							<TextField
								id="fees"
								label="Fees"
								variant="outlined"
								className="input"
								value={fee}
								onChange={(e) => setFee(e.target.value)}
								type="number"
							/>
						</form>
						<div className="submitContainer">
							<div className="flex-grow" />
							{loading && <CircularProgress size={24} />}
							&nbsp; &nbsp;
							<Button
								variant="contained"
								className="createClassbtn"
								onClick={handleAddStudent}
								disabled={loading}
							>
								Add Student
							</Button>
						</div>
					</div>
				</DialogContent>
			</Dialog>
		</div>
	);
};
