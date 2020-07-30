import React from "react";
import { useHistory } from "react-router";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import SubjectIcon from "@material-ui/icons/Subject";
import ScheduleIcon from "@material-ui/icons/Schedule";
import HeaderTop from "../Containers/HeaderTop";
import { Card, Button, Avatar, TextField, CircularProgress } from "@material-ui/core";
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


export default function Assignment() {
  return (
    <div className="assignment">
      <HeaderTop>
      <h1>Assignments</h1>
				<div className="flex-grow"></div>
				&nbsp;&nbsp;&nbsp;&nbsp;
				<SearchInput />
      </HeaderTop>
      
			<div className="assignment__body row">
				<div className="col-sm-8 col-lg-8">
					<div className="row assignmentCardRow">
						{[1, 2].map((i) => (
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
  )
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
				<h5>Topic:<span>{"Number Theory"}</span></h5>
        <h5>Number of questions:<span>{"5"}</span></h5>
        <h5>Reference Notes:<span>{"Given"}</span> </h5>
			</div>

			<div className="assignmentData__btnContainer">
        <Button size="small" variant="contained">
					<span className="text-bold">364</span>&nbsp;&nbsp; Submitted &nbsp;&nbsp; <CircularProgressWithLabel value={70}/>
				</Button>
			  <div className="flex-grow"/>
				<Button size="small" variant="contained" onClick={e=>history.push('/dashboard/assignment/123')}>
					View
				</Button>
			</div>
		</div>
	);
};

const CreateAssignmentRoomForm = (props) => {
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