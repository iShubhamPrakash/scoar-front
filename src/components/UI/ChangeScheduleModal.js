import React, { useEffect } from "react";
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
	const {
		startTime,
		endTime,
		setStartTime,
		setEndTime,
		buttonText,
		buttonClass,
		buttonVarient
	} = props;

	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
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
							<div className="classData__calendar" style={{ padding: "0 2em" }}>
								<h5 className="text-left">Days</h5>
								<div className="week">
									<div className="day">
										<Avatar className={startTime[0] && startTime[0].length && endTime[0].length ? "active": null}>S</Avatar>
									</div>
									<div className="day">
										<Avatar className={startTime[1] && startTime[1].length && endTime[1].length ? "active": null}>M</Avatar>
									</div>
									<div className="day">
										<Avatar className={startTime[2] && startTime[2].length && endTime[2].length ? "active": null}>T</Avatar>
									</div>
									<div className="day">
										<Avatar className={startTime[3] && startTime[3].length && endTime[3].length ? "active": null}>W</Avatar>
									</div>
									<div className="day">
										<Avatar className={startTime[4] && startTime[4].length && endTime[4].length ? "active": null}>T</Avatar>
									</div>
									<div className="day">
										<Avatar className={startTime[5] && startTime[5].length && endTime[5].length ? "active": null}>F</Avatar>
									</div>
									<div className="day">
										<Avatar className={startTime[6] && startTime[6].length && endTime[6].length ? "active": null}>S</Avatar>
									</div>
								</div>
							</div>
							<form autoComplete="off" className="form">
								{days.map((day,i) => (
									<div className="row" style={{ margin: "0.4em 0" }}>
										<div className="col col-sm-2 col-md-2 col-lg-1"></div>
										<div className="col col-sm-3 col-md-3 col-lg-3">
											<p className="text-bold">{day}</p>
										</div>
										<div className="col col-sm-2 col-md-2 col-lg-3">
											<TimePickers 
												value={startTime[i]}
												onChange={e=>{
													let temp = [...startTime]
													temp[i] = e.target.value
													setStartTime(temp)
												}}
											/>
										</div>
										<div className="col col-sm-1 col-md-1 col-lg-1"> to </div>
										<div className="col col-sm-2 col-md-2 col-lg-3">
											<TimePickers 
												value={endTime[i]}
												onChange={e=>{
													let temp = [...endTime]
													temp[i] = e.target.value
													setEndTime(temp)
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
									onClick={(e) => handleClose()}
								>
									Save
								</Button>
							</form>
						</div>
					</div>
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default ChangeScheduleModal;
