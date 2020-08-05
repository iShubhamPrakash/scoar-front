import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
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
import { CLASSROOMS_LIST_API_URL, STUDENT_LIST_API_URL } from "../../../constants/api";
import LoadingIcon from "../../UI/LoadingIcon";
import { getDiffInHr } from "../../../utils/dateTime";

export default function ClassroomView(props) {
	const history = useHistory();
	const [classRoomList, setclassRoomList] = useState([]);
	const [classRoomListLoading, setclassRoomListLoading] = useState(true);
	const auth = useSelector((state) => state.auth);
	const token = auth.token;

	useEffect(() => {
		console.log("class view props", props);
		fetchClassRoomList();
	}, []);

	const fetchClassRoomList = () => {
		try {
			fetch(`${CLASSROOMS_LIST_API_URL}/${token}`)
				.then((res) => res.json())
				.then((data) => {
					console.log("classRoomList data", data);
					if (data.statusCode.includes("SUCCESS")) {
						setclassRoomList(data.classRoom);
						setclassRoomListLoading(false);
					} else {
						setclassRoomList([]);
						setclassRoomListLoading(false);
					}
				});
		} catch (e) {
			setclassRoomListLoading(false);
		}
	};

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
						{classRoomListLoading ? (
							<LoadingIcon />
						) : classRoomList.length ? (
							classRoomList.map((classRoom) => {
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
									<ClassCard
										{...props}
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
								);
							})
						) : (
							<p className="center-text">No data to show</p>
						)}
					</div>
				</div>
				<div className="col col-7 col-sm-7 col-md-7 col-lg-7">
					{classRoomList.length ? (
						<Card className="contentContainer rightCard" raised>
							<ClassDetailCard {...props} classRoomList={classRoomList} />
						</Card>
					) : null}
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
		noofstudents,
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
					<h4>{classroomname}</h4>
					<p>Total students: {noofstudents}</p>
					<p>Mode of instruction: {mode}</p>
					{/* <p>
						<ScheduleIcon /> {getDiffInHr(starttime,endtime)} hours
					</p> */}
				</div>
			</div>
		</Card>
	);
};

const ClassDetailCard = (props) => {
	const { classRoomList } = props;

	const classId = props.match.params.id;

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
	} = classRoomList.find(classRoom => classRoom.crid == classId);

	return (
		<div className="classDetailCard">
			<div className="top">
				<ClassData
					{...props}
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
			</div>
			<div className="bottom">
				<StudentList
					{...props}
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
			</div>
		</div>
	);
};

const ClassData = (props) => {
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
				<ChangeScheduleModal 
					startTime={starttime}
					endTime ={endtime}
					setStartTime={e=>{}}
					setEndTime={e=>{}}
					buttonClass="topBtn"
					buttonText="Change schedule"
				/>
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
						{classroomname}
					</h4>
					<p>Total students: {noofstudents}</p>
					<p>Mode of instruction: {mode}</p>
					{/* <p>
						<ScheduleIcon /> {"1 hour"}
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
			<h5>Description</h5>
			<div className="description">
				<p>
				{description}
				</p>
			</div>
		</div>
	);
};

const StudentList = (props) => {
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

	const [studentList, setStudentList] = useState([])
	const [loading, setLoading] = useState(false)
	
	useEffect(() => {
		fetchStudentList(crid);
	}, [crid])	

	const fetchStudentList=(crid)=>{
		setLoading(true)
		setStudentList([])
		try{
			fetch(`${STUDENT_LIST_API_URL}/${crid}`)
			.then(res=> res.json())
			.then(data=>{
				setStudentList(data)
				setLoading(false)
			})
		}catch (e){
			console.log("Error fetching student list", e)
			setLoading(false)
		}
	}
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
					{studentList.length ?(
						studentList.map(student=>(
							<TableRow
							name={student.firstName}
							avatar={student.profilepic}
							assignment={student.assignmentstatus}
							fee={student.feesstatus}
							date={new Date(student.joindate).toLocaleDateString()}
							handleView={(e) => alert("View open")}
						/>
						))
					):(
						loading ? <LoadingIcon/> : <p className="center-text">No data to display</p>
					)}
				
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
				<StudentDetailsModal />
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
