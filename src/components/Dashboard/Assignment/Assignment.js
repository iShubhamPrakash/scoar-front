import React, { useState } from "react";
import { useHistory } from "react-router";
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
import CircularProgressWithLabel from "../../UI/CircularProgressWithLabel";
import { DropzoneArea } from "material-ui-dropzone";

export default function Assignment() {
	return (
		<div className="assignment">
			<HeaderTop>
				<h1>Assignments</h1>
				<div className="flex-grow"></div>
			</HeaderTop>

			<div className="assignment__body row">
				<div className="col-sm-8 col-lg-8">
					<div className="row assignmentCardRow">
						{[1, 2,3,4,5].map((i) => (
							<div className="col-12 col-sm-12 col-lg-6">
								<Card className="assignementCard">
									<AssignmentData />
								</Card>
							</div>
						))}
					</div>
				</div>
				<div className="col-sm-4 col-lg-4 formContainer">
					<Card>
						<CreateAssignmentRoomForm />
					</Card>
				</div>
			</div>
		</div>
	);
}

const AssignmentData = (props) => {
	const history = useHistory();
	return (
		<div className="assignmentData">
			<div className="assignmentData__id">
				<p>Submission Date: {"23-08-2020"}</p>
			</div>

			<div className="assignmentData__dataContainer">
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
				</div>
			</div>

			<div className="assignmentData__details">
				<h5>
					Topic:<span>{"Number Theory"}</span>
				</h5>
				<h5>
					Number of questions:<span>{"5"}</span>
				</h5>
				<h5>
					Reference Notes:<span>{"Given"}</span>{" "}
				</h5>
			</div>

			<div className="assignmentData__btnContainer">
				<Button size="small" variant="contained">
					<span className="text-bold">364</span>&nbsp;&nbsp; Submitted
					&nbsp;&nbsp; <CircularProgressWithLabel value={70} />
				</Button>
				<div className="flex-grow" />
				<Button
					size="small"
					variant="contained"
					onClick={(e) => history.push("/dashboard/assignment/123")}
				>
					View
				</Button>
			</div>
		</div>
	);
};

const CreateAssignmentRoomForm = (props) => {
	const [files, setFiles] = useState([]);

	const handleChange = (files) => {
		setFiles([...files]);
	};

	return (
		<div className="createAssignmentForm">
			<div className="createAssignmentForm__header">
				<h3>Create Assignment</h3>
			</div>
			<div className="createAssignmentForm__body">
				<form autoComplete="off" className="form">
					<TextField
						id="name"
						label="Assignment On"
						variant="outlined"
						size="small"
						className="input"
					/>

					<br />

					<FormControl variant="outlined">
						<InputLabel>Select Class</InputLabel>
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
						id="submissionDate"
						label="Submission date"
						variant="outlined"
						size="small"
						className="input"
					/>
					<br />
					<FormControl variant="outlined">
						<InputLabel>Assigned to</InputLabel>
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

					<FormControl variant="outlined">
						<InputLabel>ABC XYZ</InputLabel>
						<Select
							labelId="demo-simple-select-outlined-label"
							id="demo-simple-select-outlined"
							value={"one"}
							onChange={(e) => {}}
							label="abc xyzr"
							size="small"
							className="input"
						>
							<MenuItem value={"one"}>one</MenuItem>
							<MenuItem value={"two"}>two</MenuItem>
							<MenuItem value={"three"}>three</MenuItem>
						</Select>
					</FormControl>
					<br />


          <div className="upload">
            <DropzoneArea 
            onChange={handleChange.bind(this)} 
            acceptedFiles={['image/jpeg, image/png', '.doc','.docx','.pdf','.ppt','.pptx','.xls']}
            />
          </div>
					<br />
					<Button
						variant="contained"
						className="createAssignmentBtn"
						onClick={(e) => ""}
					>
						Create Class
					</Button>
				</form>
			</div>
		</div>
	);
};
