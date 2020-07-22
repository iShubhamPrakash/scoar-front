import React from "react";
import "normalize.css";
import PaymentCard from "./PaymentCard";
import Button from '@material-ui/core/Button';
import AddBoxIcon from '@material-ui/icons/AddBox';
import AssignmentCard from "./AssignmentCard";
export default function MainDashboard() {
	return (
		<div className="dashboard container-fluid" style={{padding:"0"}}>
			<div className="row dashboard__topRow">
				<div className="col col-12 col-md-12 col-lg-4">
					<div className="welcome">
						<h2>Let's Scoar</h2>
						<h1>Welcome to your Dashboard</h1>
					</div>
				</div>
				<div className="col col-12 col-md-12 col-lg-4">
					<div className="createClassroom">
            <Button>
              <div>
                <div><AddBoxIcon/></div>
                <h2>Create Classroom</h2>
              </div>
            </Button>
          </div>
				</div>
				<div className="col col-12 col-md-12 col-lg-4">
					<div className="paymentCard">
            <PaymentCard />
          </div>
				</div>
			</div>
			
			<br />

			<div className="row dashboard__bottomRow">
				<div className="col col-12 col-md-12 col-lg-4">
            <AssignmentCard/>
				</div>
				<div className="col col-12 col-md-12 col-lg-4">
            <AssignmentCard/>
				</div>
				<div className="col col-12 col-md-12 col-lg-4">
            <AssignmentCard/>
				</div>
			</div>
		</div>
	);
}
