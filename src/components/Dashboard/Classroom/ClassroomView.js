import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import {useSelector} from "react-redux";
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
import EditClassModal from "./EditClassModal";
import ChangeScheduleModal from "./ChangeScheduleModal";
import StudentDetailsModal from "./StudentDetailsModal";
import { CLASSROOMS_LIST_API_URL } from "../../../constants/api";
import LoadingIcon from "../../UI/LoadingIcon";
import { getDiffInHr } from "../../../utils/dateTime";


export default function ClassroomView(props) {
	const history = useHistory();
	const [classList, setClassList] = useState([]);
	const [classListLoading, setClassListLoading] = useState(true)
	const auth = useSelector((state) => state.auth);
	const token = auth.token;

	useEffect(() => {
		console.log("class view props", props);
		fetchClassRoomList()
	}, []);

	const fetchClassRoomList = ()=>{
		try{
			fetch(`${CLASSROOMS_LIST_API_URL}/${token}`)
			.then(res=>res.json())
			.then(data=>{
				console.log("classlist data", data)
				if(data.statusCode.includes("SUCCESS")){
					setClassList(data.classRoom)
					setClassListLoading(false)
				}else{
					setClassList([])
					setClassListLoading(false)
				}
			})
		}catch (e){

		}
	}


	return (
		<div className="classroomView">
			<Avatar
				className={"classroomView__backBtn"}
				onClick={(e) => history.push("/dashboard/classroom")}
			>
				<ArrowBackIcon />
			</Avatar>
			<div className="classroomView__body row">
				<div className="col col-5 col-sm-5 col-md-5 col-lg-5">
					<div className="contentContainer">
						{classListLoading ? (
							<LoadingIcon/>
						):classList.length?(
							classList.map(classRoom =>{
								const {
									crid,
									classroomname,
									classtype,
									starttime,
									endtime,
									mode,
									fees,
									description,
									noofstudents
								} = classRoom;
								return (
									<ClassCard 
										{...props}
										crid = {crid}
										classroomname = {classroomname}
										classtype = {classtype}
										starttime = {starttime}
										endtime = {endtime}
										mode = {mode}
										fees = {fees}
										description = {description}
										noofstudents = {noofstudents}
									/>
								)
							})
						): <p className="center-text">No data to show</p>}

					</div>
				</div>
				<div className="col col-7 col-sm-7 col-md-7 col-lg-7">
					<Card className="contentContainer rightCard" raised>
						<ClassDetailCard {...props} />
					</Card>
				</div>
			</div>
		</div>
	);
}

const ClassCard = (props) => {

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
		noofstudents
	} = props;


	const classId = props.match.params.id;

	console.log("clicked", crid, classId);
	return (
		<Card
			className="classCard"
			id={props.crid == classId ? "activeCard" : null}
			onClick={(e) => history.push(`/dashboard/classroom/${crid}`)}
		>
			<div className="classData__dataContainer">
				<div className="icon">
					<span>
						<SubjectIcon />
					</span>
				</div>
				<div className="studentDetails">
					<h4>
						{classroomname}
					</h4>
					<p>Total students: {noofstudents}</p>
					{/* <p>Mode of instruction: {"English"}</p> */}
					<p>
						<ScheduleIcon /> {getDiffInHr(starttime,endtime)} hours
					</p>
				</div>
			</div>
		</Card>
	);
};

const ClassDetailCard = (props) => {
	return (
		<div className="classDetailCard">
			<div className="top">
				<ClassData {...props} />
			</div>
			<div className="bottom">
				<StudentList {...props} />
			</div>
		</div>
	);
};

const ClassData = (props) => {
	return (
		<div className="classData">
			<div className="classData__id">
				<div className="flex-grow-1" />
				<Button
					size="small"
					variant="contained"
					onClick={(e) => ""}
					className="topBtn joinBtn"
				>
					Join Now
				</Button>
				&nbsp; &nbsp;
				<ChangeScheduleModal />
				&nbsp; &nbsp;
				<Button
					size="small"
					variant="contained"
					onClick={(e) => ""}
					className="topBtn"
				>
					Cancel
				</Button>
				&nbsp; &nbsp;
				<EditClassModal />
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
			<h5>Description</h5>
			<div className="description">
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi,
					nobis natus debitis hic asperiores minima! Lorem ipsum, dolor sit amet
					consectetur adipisicing elit. Excepturi, nobis natus debitis hic
					asperiores minima!
				</p>
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
						<div className="col col-2 col-sm-2 col-md-2 col-lg-2">
							<p>Join Date</p>
						</div>
						<div className="col col-2 col-sm-2 col-md-2 col-lg-2">
							<p>Assignment</p>
						</div>
						<div className="col col-1 col-sm-1 col-md-1 col-lg-1">
							<p>Fee</p>
						</div>

						<div className="col col-2 col-sm-2 col-md-2 col-lg-2">
							<p>&nbsp;</p>
						</div>
					</div>
				</div>
				<div className="body">
					<TableRow
						name="Shubham"
						avatar="/shubham.png"
						assignment="Issued"
						fee="Paid"
						date="23 Aug, 2020"
						handleView={(e) => alert("View open")}
					/>
					<TableRow
						name="Shubham"
						avatar="/shubham.png"
						assignment="Issued"
						fee="Paid"
						date="23 Aug, 2020"
						handleView={(e) => alert("View open")}
					/>
					<TableRow
						name="Shubham"
						avatar="/shubham.png"
						assignment="Issued"
						fee="Paid"
						date="23 Aug, 2020"
						handleView={(e) => alert("View open")}
					/>
					<TableRow
						name="Shubham"
						avatar="/shubham.png"
						assignment="Issued"
						fee="Paid"
						date="23 Aug, 2020"
						handleView={(e) => alert("View open")}
					/>
					<TableRow
						name="Shubham"
						avatar="/shubham.png"
						assignment="Issued"
						fee="Paid"
						date="23 Aug, 2020"
						handleView={(e) => alert("View open")}
					/>
					<TableRow
						name="Shubham"
						avatar="/shubham.png"
						assignment="Issued"
						fee="Paid"
						date="23 Aug, 2020"
						handleView={(e) => alert("View open")}
					/>
					<TableRow
						name="Shubham"
						avatar="/shubham.png"
						assignment="Issued"
						fee="Paid"
						date="23 Aug, 2020"
						handleView={(e) => alert("View open")}
					/>
					<TableRow
						name="Shubham"
						avatar="/shubham.png"
						assignment="Issued"
						fee="Paid"
						date="23 Aug, 2020"
						handleView={(e) => alert("View open")}
					/>
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

			<div className="col col-2 col-sm-2 col-md-2 col-lg-2">
				<Typography gutterBottom variant="subtitle2" component="p">
					{date}
				</Typography>
			</div>

			<div className="col col-2 col-sm-2 col-md-2 col-lg-2">
				<Typography gutterBottom variant="subtitle2" component="p">
					{assignment}
				</Typography>
			</div>

			<div className="col col-1 col-sm-1 col-md-1 col-lg-1">
				<Typography
					gutterBottom
					variant="subtitle2"
					component="p"
					color="textSecondary"
				>
					{fee}
				</Typography>
			</div>

			<div className="col col-2 col-sm-2 col-md-2 col-lg-2">
				<StudentDetailsModal/>
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
