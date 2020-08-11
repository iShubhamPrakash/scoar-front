import React, { useState, useEffect } from "react";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import GetAppIcon from "@material-ui/icons/GetApp";
import { withStyles } from "@material-ui/core/styles";
import { Card, Button, Avatar, TextField } from "@material-ui/core";
import SubjectIcon from "@material-ui/icons/Subject";
import ScheduleIcon from "@material-ui/icons/Schedule";
import EditIcon from "@material-ui/icons/Edit";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import TimePickers from "./TimePickers";
import { GET_SCHEDULE_DATA_API_URL,RESCHEDULE_CLASS_API_URL } from "../../constants/api";
import LoadingIcon from "./LoadingIcon";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { fetchClassRoomList } from "../../store/actions/classRoomActions";

const styles = (theme) => ({
	root: {
		margin: 0,
		padding: theme.spacing(2),
	},
	closeButton: {
		position: "absolute",
		right: theme.spacing(1),
		top: theme.spacing(1),
		color: theme.palette.grey[500],
	},
});

const DialogTitle = withStyles(styles)((props) => {
	const { children, classes, onClose, ...other } = props;
	return (
		<MuiDialogTitle disableTypography className={classes.root} {...other}>
			<Typography variant="h6">{children}</Typography>
			{onClose ? (
				<IconButton
					aria-label="close"
					className={classes.closeButton}
					onClick={onClose}
				>
					<CloseIcon />
				</IconButton>
			) : null}
		</MuiDialogTitle>
	);
});

const DialogContent = withStyles((theme) => ({
	root: {
		padding: theme.spacing(2),
	},
}))(MuiDialogContent);

const ChangeScheduleModal = (props) => {
	const [open, setOpen] = useState(false);
	const [loading, setLoading] = useState(true);
	const [startTime, setStartTime] = useState(["", "", "", "", "", "", ""]);
	const [endTime, setEndTime] = useState(["", "", "", "", "", "", ""]);

	const { crid, buttonText, buttonClass, buttonVarient } = props;

	useEffect(() => {
		console.log("ChangeShedule UseEffect");
		return () => {
			setStartTime(["", "", "", "", "", "", ""]);
			setEndTime(["", "", "", "", "", "", ""]);
		};
	}, [crid]);

	const dispatch = useDispatch()

	const auth = useSelector(state => state.auth)

	const fetchScheduleData = async () => {
		console.log("Fetching schedule data", crid);
		try {
			setLoading(true);
			const res = await fetch(`${GET_SCHEDULE_DATA_API_URL}${crid}`);
			const data = await res.json();
			if (data.length === 7) {
				setStartTime(
					data.map((item) =>
						item.starttime && item.starttime.split(" ")[1]
							? item.starttime.split(" ")[1]
							: ""
					)
				);
				setEndTime(
					data.map((item) =>
						item.endttime && item.endttime.split(" ")[1]
							? item.endttime.split(" ")[1]
							: ""
					)
				);
			}
			setLoading(false);
		} catch (e) {
			console.log("Error fetching shchedule", e);
			setLoading(false);
		}
	};

	const handleSubmit = async () =>{

		let submitData = ['S','M','T','W','T','F','S'].map((day,i)=>{
			return {
				crid:crid,
				startdate: startTime[i],
				enddate: endTime[i]
			}
		})
		
		try{
			const res= await fetch(RESCHEDULE_CLASS_API_URL,{
				method: 'POST',
				headers:{
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(submitData)
			})

			const response = await res.text()
			console.log(res)
			if(response.includes("SUCCESS")){
				toast("✅ Class rescheduled");
				dispatch(fetchClassRoomList(auth.token))
				handleClose()
			}
		}catch(e){
			console.log("Error submitting data",e)
		}
	}

	const handleClickOpen = () => {
		setOpen(true);
		fetchScheduleData();
	};
	const handleClose = () => {
		setOpen(false);
	};

	const days = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];

	return (
		<div>
			<Button
				size="small"
				variant={buttonVarient ? buttonVarient : "contained"}
				onClick={handleClickOpen}
				className={buttonClass}
			>
				{buttonText}
			</Button>
			<Dialog
				onClose={handleClose}
				aria-labelledby="customized-dialog-title"
				open={open}
				className="addStudentModal"
				fullWidth={true}
				maxWidth={"sm"}
			>
				<DialogTitle id="customized-dialog-title" onClose={handleClose}>
					<img src="/logo-full-small.png" alt="" style={{ width: "100px" }} />
					<h3 className="text-center m-0">Change Schedule</h3>
				</DialogTitle>
				<DialogContent>
					<div className="createClassRommForm" style={{ marginTop: "-3em" }}>
						<div className="createClassRommForm__body">
							{loading ? (
								<LoadingIcon />
							) : (
								<>
									<div
										className="classData__calendar"
										style={{ padding: "0 2em" }}
									>
										<h5 className="text-left">Days</h5>
										<div className="week">
											{["S", "M", "T", "W", "T", "F", "S"].map((WeekDay, i) => (
												<div className="day">
													<Avatar
														className={
															startTime[i] && startTime[i].length
																? "active"
																: null
														}
													>
														{WeekDay}
													</Avatar>
													<p>
														&nbsp;
														{startTime[i] }
														&nbsp;
													</p>
													<br />
													<p>
														&nbsp;
														{endTime[i] }
														&nbsp;
													</p>
												</div>
											))}
										</div>
									</div>
									<form autoComplete="off" className="form">
										{days.map((day, i) => (
											<div
												className="row"
												style={{ margin: "0.4em 0" }}
												key={i}
											>
												<div className="col col-sm-2 col-md-2 col-lg-1"></div>
												<div className="col col-sm-3 col-md-3 col-lg-3">
													<p className="text-bold">{day}</p>
												</div>
												<div className="col col-sm-2 col-md-2 col-lg-3">
													<TimePickers
														value={startTime[i]}
														onChange={(e) => {
															let temp = [...startTime];
															temp[i] = e.target.value;
															setStartTime(temp);
														}}
													/>
												</div>
												<div className="col col-sm-1 col-md-1 col-lg-1">
													{" "}
													to{" "}
												</div>
												<div className="col col-sm-2 col-md-2 col-lg-3">
													<TimePickers
														value={endTime[i]}
														onChange={(e) => {
															let temp = [...endTime];
															temp[i] = e.target.value;
															setEndTime(temp);
														}}
													/>{" "}
												</div>
												<div className="col col-sm-2 col-md-2 col-lg-1"></div>
											</div>
										))}

										<br />

										<Button
											variant="contained"
											className="createClassbtn"
											onClick={(e) => handleSubmit()}
										>
											Save new Timing
										</Button>
									</form>
								</>
							)}
						</div>
					</div>
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default ChangeScheduleModal;
