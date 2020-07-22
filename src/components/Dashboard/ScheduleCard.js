import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import CardHeader from "@material-ui/core/CardHeader";
import SubjectIcon from "@material-ui/icons/Subject";
import LinearProgress from "@material-ui/core/LinearProgress";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import IconButton from "@material-ui/core/IconButton";

export default function ScheduleCard() {
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
				{[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((i) => (
					<ScheduleItem
						Icon={(e) => <SubjectIcon />}
						timeText={"Today: 7:00 PM to 8:00 PM"}
						subject={"Maths"}
						classNo={"class 9th"}
						handleSchedule={(e) => alert("Schedule")}
						handleReSchedule={(e) => alert("ReSchedule")}
					/>
				))}

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
		subject,
		classNo,
		handleSchedule,
		handleReSchedule,
	} = props;
	return (
		<>
			<div className="scheduleItem row">
				<div className="col col-2 col-sm-2 col-md-2 col-lg-2 scheduleItem__left">
					<div className="icon">
						<Icon />
					</div>
				</div>
				<div className="col col-10 col-sm-10 col-md-10 col-lg-10 scheduleItem__right">
					<p className="text-bold">
						{subject} for {classNo}
					</p>
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
				<Button
					variant="outlined"
					size="small"
					onClick={(e) => handleSchedule()}
				>
					Cancel
				</Button>
			</div>
		</>
	);
};
