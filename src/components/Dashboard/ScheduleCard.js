import React, { useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import CardHeader from "@material-ui/core/CardHeader";
import SubjectIcon from "@material-ui/icons/Subject";
import LinearProgress from "@material-ui/core/LinearProgress";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import IconButton from "@material-ui/core/IconButton";
import { useSelector, useDispatch } from "react-redux";
import LoadingIcon from "../UI/LoadingIcon";
import CachedIcon from '@material-ui/icons/Cached';
import { fetchTodaysClassRoomList } from "../../store/actions/classRoomActions";
import { toast } from "react-toastify";
import { CANCEL_CLASS_API_URL } from "../../constants/api";
import SingleChengeScheduleModal from "../UI/SingleChengeScheduleModal";

export default function ScheduleCard() {
	const auth = useSelector((state) => state.auth);
	const classRoom = useSelector((state) => state.classRoom);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchTodaysClassRoomList(auth.token));
	}, []);

	return (
		<Card className="card scheduleCard">
			<CardHeader
				subheader="Today's Schedule"
				action={
					<IconButton color="primary" onClick={e=>dispatch(fetchTodaysClassRoomList(auth.token))}>
						<CachedIcon />
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
								crid={crid}
								Icon={(e) => <SubjectIcon />}
								starttime={starttime.split(" ")[1]?starttime.split(" ")[1] : ""}
								endtime={endtime.split(" ")[1] ? endtime.split(" ")[1] : ""}
								classRoomName={classname}
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
	const { crid, Icon,starttime,endtime, classRoomName, handleReSchedule } = props;

	const handleCancel = async () => {
		try {
			const res = await fetch(`${CANCEL_CLASS_API_URL}${crid}`);
			const result = await res.text();

			if (result.includes("SUCCESS")) {
				toast("✅ Class canceled");
			} else {
				toast.error("❌ Could not cancel class");
			}
		} catch (e) {
			console.log("Error cancelling class", e);
			toast.error("❌ Could not cancel class");
		}
	};

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
					<p className="small">{starttime} to {endtime}</p>
				</div>
			</div>
			<div className="row scheduleItem__bottom">
				<SingleChengeScheduleModal
					crid={crid}
					starttime={starttime}
					endtime={endtime}
					buttonVarient={"outlined"}
					buttonText={"Re-shedule"}
				/>
				<Button variant="outlined" size="small" onClick={(e) => handleCancel()}>
					Cancel
				</Button>
			</div>
		</>
	);
};
