import React,{useState, useEffect} from "react";
import "normalize.css";
import PaymentCard from "./PaymentCard";
import Button from '@material-ui/core/Button';
import AddBoxIcon from '@material-ui/icons/AddBox';
import AssignmentCard from "./AssignmentCard";
import ScheduleCard from "./ScheduleCard";
import ClassoomCard from "./ClassroomCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchClassRoomList, fetchTodaysClassRoomList } from "../../store/actions/classRoomActions";
import { useHistory } from "react-router-dom";
import { getClassRoomPath } from "../../constants/path";

export default function MainDashboard() {
	const history = useHistory()

	const dispatch = useDispatch()
	const auth = useSelector(state => state.auth)

	useEffect(()=>{
		console.log("dashoard useEffect")
		// dispatch(fetchTodaysClassRoomList(auth.token))
	})

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
            <Button onClick={e=>history.push(getClassRoomPath(auth.role))}>
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
				<div className="col col-12 col-md-12 col-lg-5">
					<ClassoomCard/>
				</div>
				<div className="col col-12 col-md-12 col-lg-3">
            <ScheduleCard/>
				</div>
				<div className="col col-12 col-md-12 col-lg-4">
						<AssignmentCard/>
				</div>
			</div>
		</div>
	);
}
