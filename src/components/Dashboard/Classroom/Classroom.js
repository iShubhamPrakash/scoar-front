import React from "react";
import {useHistory} from 'react-router'
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import FilterListIcon from "@material-ui/icons/FilterList";
import SubjectIcon from "@material-ui/icons/Subject";
import ScheduleIcon from "@material-ui/icons/Schedule";

import HeaderTop from "../Containers/HeaderTop";
import { Card, Button, Avatar, TextField } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";

import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import GetAppIcon from "@material-ui/icons/GetApp";
import { withStyles } from "@material-ui/core/styles";

export default function Classroom() {
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
						{[1, 2, 3, 4, 5].map((i) => (
							<div className="col-12 col-sm-12 col-lg-6">
								<Card className="classCard">
									<ClassData />
								</Card>
							</div>
						))}
					</div>
				</div>
				<div className="col-sm-4 col-lg-4 formContainer">
					<Card>
						<CreateClassRoomForm />
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
	return (
		<div className="classData">
			<div className="classData__id">
				<p>Classroom ID: {123}</p>
			</div>

			<div className="classData__dataContainer">
				<div className="icon">
					<span>
						<SubjectIcon />
					</span>
				</div>
				<div className="studentDetails">
					<h4>
						{"Science"} for class {"6th"}
					</h4>
					<p>Total students: {"40"}</p>
					<p>Mode of instruction: {"English"}</p>
					<p>
						<ScheduleIcon /> {"1 hour"}
					</p>
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
				<AddStudentModal />
				&nbsp; &nbsp;
				<Button size="small" variant="contained" onClick={e=>history.push('/dashboard/classroom/123')}>
					View
				</Button>
			</div>
		</div>
	);
};

const CreateClassRoomForm = (props) => {
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
					/>

					<br />

					<FormControl variant="outlined">
						<InputLabel>Tution Type</InputLabel>
						<Select
							labelId="demo-simple-select-outlined-label"
							id="demo-simple-select-outlined"
							value={"one"}
							onChange={(e) => {}}
							label="Type of teacher"
							size="small"
							className="input"
						>
							<MenuItem value={"one"}>one</MenuItem>
							<MenuItem value={"two"}>two</MenuItem>
							<MenuItem value={"three"}>three</MenuItem>
						</Select>
					</FormControl>

					<br />

					<TextField
						id="addSchedule"
						label="Add Schedule"
						variant="outlined"
						size="small"
						className="input"
					/>
					<br />
					<FormControl variant="outlined">
						<InputLabel>Instruction mode</InputLabel>
						<Select
							labelId="demo-simple-select-outlined-label"
							id="demo-simple-select-outlined"
							value={"one"}
							onChange={(e) => {}}
							label="Type of teacher"
							size="small"
							className="input"
						>
							<MenuItem value={"one"}>one</MenuItem>
							<MenuItem value={"two"}>two</MenuItem>
							<MenuItem value={"three"}>three</MenuItem>
						</Select>
					</FormControl>
					<br />

					<div className="feeRow">
						<TextField
							id="fee"
							label="Enter Fee"
							variant="outlined"
							size="small"
						/>
						<FormControl variant="outlined" className="periodSelect">
							<InputLabel>Billing period</InputLabel>

							<Select
								labelId="timeperiod"
								id="timeperiod"
								value={"one"}
								onChange={(e) => {}}
								label="Type of teacher"
								size="small"
								style={{ height: "40px" }}
							>
								<MenuItem value={"one"}>per month</MenuItem>
								<MenuItem value={"two"}>quaterly</MenuItem>
								<MenuItem value={"three"}>Yearly</MenuItem>
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
					/>
					<br />
					<Button
						variant="contained"
						className="createClassbtn"
						onClick={(e) => ""}
					>
						Create Class
					</Button>
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
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
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
							<h4>
								{"Science"} for class {"6th"}
							</h4>
							<p>Total students: {"40"}</p>
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
								size="small"
								className="input"
							/>
							<br />
							<TextField
								id="number"
								label="Mobile Number"
								variant="outlined"
								size="small"
								className="input"
							/>
							<br />
							<TextField
								id="fees"
								label="Fees"
								variant="outlined"
								size="small"
								className="input"
							/>
							<br />
							<Button
								variant="contained"
								className="createClassbtn"
								onClick={(e) => ""}
							>
								Add Student
							</Button>
						</form>
					</div>
				</DialogContent>
			</Dialog>
		</div>
	);
};
