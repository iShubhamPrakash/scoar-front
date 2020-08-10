import React, { useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import CardHeader from "@material-ui/core/CardHeader";
import SubjectIcon from "@material-ui/icons/Subject";
import LinearProgress from "@material-ui/core/LinearProgress";
import { Avatar } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getClassRoomPath, getClassRoomViewPath } from "../../constants/path";
import LoadingIcon from "../UI/LoadingIcon";
import { fetchClassRoomList } from "../../store/actions/classRoomActions";
import ChangeScheduleModal from "./Classroom/ChangeScheduleModal";

export default function ClassoomCard(props) {
	const auth = useSelector((state) => state.auth);
	const classRoom = useSelector((state) => state.classRoom);
	const history = useHistory();

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchClassRoomList(auth.token));
	}, []);

	return (
		<Card className="card classroomCard">
			<CardHeader
				subheader="Class Room List"
				action={
					<Button
						size="small"
						onClick={(e) => history.push(getClassRoomPath(auth.role))}
					>
						Create New
					</Button>
				}
				style={{ borderBottom: "1px solid lightgray" }}
				size="small"
			/>
			<CardContent className="cardContent">
				{/* {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((i) => (
					<ClassroomItem
						Icon={(e) => <SubjectIcon />}
						classroomText={"Science for class 6th"}
						num={10}
						totalStudents={14}
						handleView={(e) => alert("View open")}
						handleChangeSchedule={(e) => alert("Change schedule")}
					/>
				))} */}
				{classRoom.loadingList ? (
					<LoadingIcon />
				) : classRoom.list.length ? (
					classRoom.list.map((item) => {
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
						} = item;
						return (
							<ClassroomItem
								key={crid}
								Icon={(e) => <SubjectIcon />}
								classroomText={classroomname}
								totalStudents={noofstudents}
								startTime={starttime}
								endTime={endtime}
								handleView={(e) =>
									history.push(getClassRoomViewPath(auth.role, crid))
								}
								handleChangeSchedule={(e) => alert("Change schedule")}
							/>
						);
					})
				) : (
					<p className="center-text">No data to show!!</p>
				)}
				<br />
				<br />
			</CardContent>
		</Card>
	);
}

const ClassroomItem = (props) => {
	const {
		Icon,
		classroomText,
		totalStudents,
		startTime,
		endTime,
		handleView,
		handleChangeSchedule,
	} = props;
	return (
		<div className="classroomItem row">
			<div className="col col-1 col-sm-1 col-md-1 col-lg-1 classroomItem__left">
				<div className="icon">
					<Icon />
				</div>
			</div>
			<div className="col col-6 col-sm-6 col-md-6 col-lg-6 classroomItem__center">
				<p className="text-bold">{classroomText}</p>
				<p className="small">Total Students: {totalStudents}</p>
			</div>
			<div className="col col-5 col-sm-5 col-md-5 col-lg-5 classroomItem__right">
				<Button variant="outlined" size="small" onClick={(e) => handleView()}>
					View
				</Button>
				<ChangeScheduleModal
					buttonText={"Re-Schedule"}
					startTime={startTime}
					endTime={endTime}
					setStartTime={(e) => {}}
					setEndTime={(e) => {}}
					buttonVarient={"outlined"}
				/>
			</div>

			<div className="classroomItem__weekView">
				<h5 className="text-left">Classes on</h5>
				<div className="week">
					{["S", "M", "T", "W", "T", "F", "S"].map((WeekDay, i) => (
						<div className="day">
							<Avatar
								className={
									startTime[i] && startTime[i].length ? "active" : null
								}
							>
								{WeekDay}
							</Avatar>
							{/* <p>{startTime[i]}</p>
							<p>{endTime[i]}</p> */}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
