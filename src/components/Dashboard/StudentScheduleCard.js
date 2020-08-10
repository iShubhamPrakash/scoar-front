import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import CardHeader from "@material-ui/core/CardHeader";
import SubjectIcon from "@material-ui/icons/Subject";
import LinearProgress from "@material-ui/core/LinearProgress";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import IconButton from "@material-ui/core/IconButton";
import { useHistory } from "react-router-dom";
import { WHITEBOARD_PATH } from "../../constants/path";

export default function StudentScheduleCard() {

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
						handleJoin={(e) => alert("Joined")}
						handleCancel={(e) => alert("Cancel")}
					/>
				))}

				<br />
				<br />
			</CardContent>
		</Card>
	);
}

const ScheduleItem = (props) => {
	const history = useHistory()
	
	const {
		Icon,
		timeText,
		subject,
		classNo,
		handleJoin,
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
					onClick={(e) => history.push(WHITEBOARD_PATH)}
				>
					Join Now
				</Button>
				<Button
					variant="outlined"
					size="small"
					onClick={(e) => handleCancel()}
				>
					Cancel
				</Button>
			</div>
		</>
	);
};
