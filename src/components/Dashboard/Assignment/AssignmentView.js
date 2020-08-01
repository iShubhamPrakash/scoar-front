import React, { useEffect } from "react";
import { useHistory } from "react-router";
import {
	Avatar,
	Card,
	Button,
	IconButton,
	Input,
	InputAdornment,
	Paper,
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import SubjectIcon from "@material-ui/icons/Subject";
import ScheduleIcon from "@material-ui/icons/Schedule";
import EditIcon from "@material-ui/icons/Edit";
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";
import SearchIcon from "@material-ui/icons/Search";


export default function AssignmentView(props) {
	const history = useHistory();
	useEffect(() => {
		console.log("class view props", props);
	}, []);

	return (
		<div className="assignmentView">
			<Avatar
				className={"assignmentView__backBtn"}
				onClick={(e) => history.push("/dashboard/assignment")}
			>
				<ArrowBackIcon />
			</Avatar>
			<div className="assignmentView__body row">
				<div className="col col-5 col-sm-5 col-md-5 col-lg-5">
					<div className="contentContainer">
						{[1, 2, 3, 4, 5].map((i) => (
							<AssignmentCard {...props} classId={i} />
						))}
					</div>
				</div>
				<div className="col col-7 col-sm-7 col-md-7 col-lg-7">
					<Card className="contentContainer rightCard" raised>
						<AssignmentDetailCard {...props} />
					</Card>
				</div>
			</div>
		</div>
	);
}

const AssignmentCard = (props) => {
	const history = useHistory();
	const classId = props.match.params.id;

	console.log("clicked", props.classId, classId);
	return (
		<Card
			className="assignmentCard"
			id={props.classId == classId ? "activeCard" : null}
			onClick={(e) => history.push(`/dashboard/assignment/${props.classId}`)}
		>
			<div className="assignmentData__dataContainer">

        <div className="header">
          <span className="text-bold">Submission date:</span> <span>{"23-12-2020"}</span>
        </div>
				<div className="icon">
					<span>
						<SubjectIcon />
					</span>
				</div>
				<div className="studentDetails">
					<h4>
						{"Science"} for class {"6th"}
					</h4>
					<p><span className="text-bold">Total students: &nbsp; </span> {"40"}</p>
					<p><span className="text-bold">Topic: &nbsp; </span>{"Number Theory"}</p>
					<p><span className="text-bold">No of Student assigned: &nbsp; </span>  {"5"}</p>
					<p><span className="text-bold">Referance notes: &nbsp;</span>  {"Given"}</p>
				</div>
			</div>
		</Card>
	);
};

const AssignmentDetailCard = (props) => {
	return (
		<div className="assignmentDetailCard">
			<div className="top">
				<AssignmentData {...props} />
			</div>
			<div className="bottom">
				<StudentList {...props} />
			</div>
		</div>
	);
};

const AssignmentData = (props) => {
	return (
		<div className="assignmentData">
			<div className="assignmentData__id">
				<div className="flex-grow-1" />
        &nbsp;
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
					<p><span className="text-bold">Total students: &nbsp; </span> {"40"}</p>
					<p><span className="text-bold">Topic: &nbsp; </span>{"Number Theory"}</p>
					<p><span className="text-bold">No of Student assigned: &nbsp; </span>  {"5"}</p>
					<p><span className="text-bold">Referance notes: &nbsp;</span>  {"Given"}</p>
				</div>
			</div>
		</div>
	);
};

const StudentList = (props) => {
	const history = useHistory();
	return (
		<div className="studentList">
			<div className="table container-flex">
				<div className="header">
					<div className="row tableTop">
						<h5>Student List</h5>
						<Paper className="searchInput" elevation={3}>
							<SearchInput />
						</Paper>

            <Button size="small" variant="contained" className="topBtn">
							Add student
						</Button>

						<Button size="small" variant="contained" className="topBtn">
							Export Data
						</Button>
					</div>
					<div className="row headerRow">
						<div className="col col-1 col-sm-1 col-md-1 col-lg-1">
							<Checkbox
								color="primary"
								inputProps={{ "aria-label": "secondary checkbox" }}
								size="small"
								className="totalCheck"
							/>
						</div>
						<div className="col col-4 col-sm-4 col-md-4 col-lg-4">
							<p>Name</p>
						</div>

						<div className="col col-4 col-sm-4 col-md-4 col-lg-4">
							<p>Assignment</p>
						</div>

						<div className="col col-3 col-sm-3 col-md-3 col-lg-3">
							<p>&nbsp;</p>
						</div>
					</div>
				</div>
				<div className="body">
					{[1,2,3,4,5,6,7,8,9,10].map(i=>(
            <TableRow
						name="Shubham"
						avatar="/shubham.png"
						assignment="Issued"
						fee="Paid"
						date="23 Aug, 2020"
						handleView={(e) => alert("View open")}
					/>
          ))}
				</div>
			</div>
		</div>
	);
};

const TableRow = (props) => {
	const { name, avatar, assignment, fee, date, handleView } = props;
	return (
		<div className="row">
			<div className="col col-1 col-sm-1 col-md-1 col-lg-1">
				<Checkbox
					color="primary"
					inputProps={{ "aria-label": "secondary checkbox" }}
					size="small"
				/>
			</div>

			<div className="col col-4 col-sm-4 col-md-4 col-lg-4">
				<Avatar src={avatar} className="avatar" />
				<Typography
					gutterBottom
					variant="subtitle2"
					component="p"
					color="textSecondary"
					className="name"
				>
					{name}
				</Typography>
			</div>

			<div className="col col-4 col-sm-4 col-md-4 col-lg-4">
				<Typography gutterBottom variant="subtitle2" component="p">
					{assignment}
				</Typography>
			</div>

			<div className="col col-3 col-sm-3 col-md-3 col-lg-3">
				<Button
				>
					{fee}
				</Button>
			</div>

		</div>
	);
};

const SearchInput = () => {
	return (
		<Input
			id="search-input"
			variant="outlined"
			placeholder="Search Student"
			disableUnderline
			startAdornment={
				<InputAdornment position="start">
					<SearchIcon />
				</InputAdornment>
			}
		/>
	);
};
