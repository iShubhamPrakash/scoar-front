import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import CardHeader from "@material-ui/core/CardHeader";
import SubjectIcon from "@material-ui/icons/Subject";
import LinearProgress from "@material-ui/core/LinearProgress";
import { Avatar } from "@material-ui/core";

export default function StudentClassoomCard() {
	return (
		<Card className="card classroomCard">
			<CardHeader
				subheader="Class Room List"
				style={{ borderBottom: "1px solid lightgray" }}
				size="small"
			/>
			<CardContent className="cardContent">
				{[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((i) => (
					<ClassroomItem
						Icon={(e) => <SubjectIcon />}
						classroomText={"Science for class 6th"}
						num={10}
						totalStudents={14}
						handleView={(e) => alert("View open")}
						handleChangeSchedule={(e) => alert("Change schedule")}
					/>
				))}
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
			</div>

			<div className="classroomItem__weekView">
				<h5 className="text-left">Classes on</h5>
				<div className="week">
					<div className="day">
						<Avatar className="active">S</Avatar>
						<p>{"7:00 PM"}</p>
						<p>{"8:00 PM"}</p>
					</div>
					<div className="day">
						<Avatar className="">M</Avatar>
						<p>{"-"}</p>
						<p>{"-"}</p>
					</div>
					<div className="day">
						<Avatar className="active">T</Avatar>
						<p>{"7:00 PM"}</p>
						<p>{"8:00 PM"}</p>
					</div>
					<div className="day">
						<Avatar className="active">W</Avatar>
						<p>{"7:00 PM"}</p>
						<p>{"8:00 PM"}</p>
					</div>
					<div className="day">
						<Avatar className="">T</Avatar>
						<p>{"-"}</p>
						<p>{"-"}</p>
					</div>
					<div className="day">
						<Avatar className="active">F</Avatar>
						<p>{"7:00 PM"}</p>
						<p>{"8:00 PM"}</p>
					</div>
					<div className="day">
						<Avatar className="active">S</Avatar>
						<p>{"7:00 PM"}</p>
						<p>{"8:00 PM"}</p>
					</div>
				</div>
			</div>
		</div>
	);
};
