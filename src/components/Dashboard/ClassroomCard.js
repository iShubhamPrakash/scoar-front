import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import CardHeader from "@material-ui/core/CardHeader";
import SubjectIcon from "@material-ui/icons/Subject";
import LinearProgress from "@material-ui/core/LinearProgress";

export default function ClassoomCard() {
	return (
		<Card className="card classroomCard">
			<CardHeader
				subheader="Class Room List"
				action={<Button size="small">Create New</Button>}
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
				<Button
					variant="outlined"
					size="small"
					onClick={(e) => handleChangeSchedule()}
				>
					Re-Schedule
				</Button>
			</div>

      {/* <div className="row">
        classes On
      </div> */}
		</div>
	);
};
