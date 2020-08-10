import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import CardHeader from "@material-ui/core/CardHeader";
import SubjectIcon from "@material-ui/icons/Subject";
import LinearProgress from "@material-ui/core/LinearProgress";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import IconButton from "@material-ui/core/IconButton";
import { useSelector } from "react-redux";
import LoadingIcon from "../UI/LoadingIcon";

export default function ScheduleCard() {
	const classRoom = useSelector((state) => state.classRoom);

	return (
		<Card className="card scheduleCard">
			<CardHeader
				subheader="Today's Schedule"
				action={
					<IconButton color="primary">
						<EventAvailableIcon />
					</IconButton>
				}
				style={{ borderBottom: "1px solid lightgray" }}
				size="small"
			/>
			<CardContent className="cardContent">
				{classRoom.loadingTodays ? (
					<LoadingIcon />
				) : classRoom.todays.length ? (
					classRoom.todays.map((item) => {
						const { crid, classname, starttime, endtime } = item;
						return (
							<ScheduleItem
								key={crid}
								Icon={(e) => <SubjectIcon />}
								timeText={`${starttime} to ${endtime}`}
								classRoomName={classname}
								handleSchedule={(e) => alert("Schedule")}
								handleReSchedule={(e) => alert("ReSchedule")}
							/>
						);
					})
				) : (
					<p className="center-text">No class Today!!</p>
				)}
				<br />
				<br />
			</CardContent>
		</Card>
	);
}

const ScheduleItem = (props) => {
	const {
		Icon,
		timeText,
		classRoomName,
		handleReSchedule,
		handleCancel,
	} = props;
	return (
		<>
			<div className="scheduleItem row">
				<div className="col col-3 col-sm-3 col-md-3 col-lg-3 scheduleItem__left">
					<div className="icon">
						<Icon />
					</div>
				</div>
				<div className="col col-9 col-sm-9 col-md-9 col-lg-9 scheduleItem__right">
					<p className="text-bold">{classRoomName}</p>
					<p className="small">{timeText}</p>
				</div>
			</div>
			<div className="row scheduleItem__bottom">
				<Button
					variant="outlined"
					size="small"
					onClick={(e) => handleReSchedule()}
				>
					Re-shedule
				</Button>
				<Button variant="outlined" size="small" onClick={(e) => handleCancel()}>
					Cancel
				</Button>
			</div>
		</>
	);
};
