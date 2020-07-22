import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import CardHeader from "@material-ui/core/CardHeader";
import SubjectIcon from "@material-ui/icons/Subject";
import LinearProgress from "@material-ui/core/LinearProgress";

export default function ClassoomCard() {
	return (
		<Card className="card assignmentCard">
			<CardHeader
				subheader="Assignments"
				action={<Button size="small">Create</Button>}
				style={{ borderBottom: "1px solid lightgray" }}
				size="small"
			/>
			<CardContent className="cardContent">
				{[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((i) => (
					<AssignmentItem
						Icon={(e) => <SubjectIcon />}
						assignmentText={"Science for class 6th"}
						num={10}
						total={14}
						handleView={(e) => alert("View open")}
					/>
				))}
				<br />
				<br />
			</CardContent>
		</Card>
	);
}

const AssignmentItem = ({ Icon, assignmentText, num, total, handleView }) => {
	return (
		<div className="assignmentItem row">
			<div className="col col-2 col-sm-2 col-md-2 col-lg-2 assignmentItem__left">
				<div className="icon">
					<Icon />
				</div>
			</div>
			<div className="col col-7 col-sm-7 col-md-7 col-lg-7 assignmentItem__center">
				<p className="small">Submission for</p>
				<p className="text-bold">
					{assignmentText} <span className="small">{`${num}/${total}`}</span>
				</p>
				<LinearProgress
					variant="determinate"
					value={parseInt((num * 100) / total) || 0}
				/>
			</div>
			<div className="col col-3 col-sm-3 col-md-3 col-lg-3 assignmentItem__right">
				<Button variant="outlined" size="small" onClick={(e) => handleView()}>
					View
				</Button>
			</div>
		</div>
	);
};
