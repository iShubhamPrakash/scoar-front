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
import {
	GET_SCHEDULE_DATA_API_URL,
	RESCHEDULE_CLASS_API_URL,
  RESCHEDULE_SINGLE_CLASS_API_URL,
} from "../../constants/api";
import LoadingIcon from "./LoadingIcon";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { fetchClassRoomList, fetchTodaysClassRoomList } from "../../store/actions/classRoomActions";

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

const SingleChengeScheduleModal = (props) => {
	const [open, setOpen] = useState(false);
	const [startTime, setStartTime] = useState("");
	const [endTime, setEndTime] = useState("");

	const {
		crid,
		buttonText,
		buttonClass,
		buttonVarient,
		starttime,
		endtime,
	} = props;

	useEffect(() => {
		setStartTime(starttime);
		setEndTime(endtime);
	}, []);

	const dispatch = useDispatch();

	const auth = useSelector((state) => state.auth);

	const handleSubmit = async () => {
		const submitData = {
      starttime:startTime,
      endtime: endTime,
      crid: crid
    };

		try {
			const res = await fetch(RESCHEDULE_SINGLE_CLASS_API_URL, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(submitData),
			});

			const response = await res.text();
			console.log(res);
			if (response.includes("SUCCESS")) {
				toast("✅ Class rescheduled");
				dispatch(fetchTodaysClassRoomList(auth.token));
				handleClose();
			}
		} catch (e) {
			console.log("Error submitting data", e);
		}
	};

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

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
							<form autoComplete="off" className="form">
								<div className="row" style={{ margin: "1em 0" }}>
									<div className="col col-sm-5 col-md-5 col-lg-5">
										<TimePickers
											value={startTime}
											onChange={(e) => setStartTime(e.target.value)}
										/>
									</div>
									<div className="col col-sm-1 col-md-1 col-lg-1"> to </div>
									<div className="col col-sm-5 col-md-5 col-lg-5">
										<TimePickers
											value={endTime}
											onChange={(e) => setEndTime(e.target.value)}
										/>{" "}
									</div>
									<div className="col col-sm-2 col-md-2 col-lg-1"></div>
								</div>
								<br />

								<Button
									variant="contained"
									className="createClassbtn"
									onClick={(e) => handleSubmit()}
								>
									Save new Timing
								</Button>
							</form>
						</div>
					</div>
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default SingleChengeScheduleModal;
