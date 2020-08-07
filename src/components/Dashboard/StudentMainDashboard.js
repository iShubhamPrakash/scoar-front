import React from "react";
import "normalize.css";
import PaymentCard from "./PaymentCard";
import Button from '@material-ui/core/Button';
import AddBoxIcon from '@material-ui/icons/AddBox';
import StudentAssignmentCard from "./StudentAssignmentCard";
import StudentScheduleCard from "./StudentScheduleCard";
import StudentClassroomCard from "./StudentClassroomCard";
import StudentPaymentCard from "./StudentPaymentCard";
export default function StudentMainDashboard() {
	return (
		<div className="dashboard container-fluid" style={{padding:"0"}}>
			<div className="row dashboard__topRow">
				<div className="col col-sm-12 col-md-5 col-lg-5">
					<div className="welcome">
						<h2>Let's Scoar</h2>
						<h1>Welcome to your Dashboard</h1>
					</div>
				</div>
				<div className="col col-sm-12 col-md-7 col-lg-7">
					<div className="paymentCard">
            <StudentPaymentCard />
          </div>
				</div>
			</div>
			
			<br />

			<div className="row dashboard__bottomRow">
				<div className="col col-12 col-md-12 col-lg-5">
					<StudentClassroomCard/>
				</div>
				<div className="col col-12 col-md-12 col-lg-3">
            <StudentScheduleCard/>
				</div>
				<div className="col col-12 col-md-12 col-lg-4">
						<StudentAssignmentCard/>
				</div>
			</div>
		</div>
	);
}
