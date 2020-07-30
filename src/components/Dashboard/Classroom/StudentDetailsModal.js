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
import TimePickers from "../../UI/TimePickers";

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

const StudentDetailsModal = (props) => {
	const [open, setOpen] = React.useState(false);

	const [selectedDate, setSelectedDate] = React.useState(
		new Date("2014-08-18T21:11:54")
	);

	const handleDateChange = (date) => {
		setSelectedDate(date);
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
				className="viewBtn"
				onClick={(e) => handleClickOpen(e)}
			>
				View
			</Button>
			<Dialog
				onClose={handleClose}
				aria-labelledby="customized-dialog-title"
				open={open}
				className="addStudentModal"
				fullWidth={true}
				maxWidth={"md"}
			>
				<DialogContent>
					<div className="studentDetailsModal">
						<div className="row">
							<div className="col col-sm-5 col-md-5 col-lg-5">
								<div className="studentDetailsModal__left">
									<div className="top">
										<Avatar src="/shubham.png" className="avatar" />
										<div>
											<h3>{"Shubham Prakash"}</h3>
											<p>shubham.praksh2308@gmail.com</p>
										</div>
									</div>
									<div className="details">
										<p>School Name:</p>
										<p>Date of Birth: </p>
										<p>Attendance: </p>
									</div>
								</div>
							</div>
							<div className="col col-sm-7 col-md-7 col-lg-7">
								<div className="studentDetailsModal__right">
									<div className="top">
										<h3>Classes Enrolled</h3>
										<div className="enrolled">
											{[1, 2].map((i) => (
												<div className="classCard">
													<div className="classData__dataContainer">
														<div className="icon">
															<span>
																<SubjectIcon />
															</span>
														</div>
														<div className="studentDetails">
															<h4>
																{"Science"} for class {"6th"}
															</h4>
															<p>Total students: {"40"}</p>
															{/* <p>Mode of instruction: {"English"}</p> */}
															<p>
																<ScheduleIcon /> {"1 hour"}
															</p>
														</div>
													</div>
												</div>
											))}
										</div>
									</div>
									<div className="bottom">
										<h3>Payments</h3>
										{[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((i) => (
											<PaymentPeople
												time={"08:34 AM"}
												date={"23 AUG 2020"}
												avatar={"/shubham.png"}
												name={"Shubham Prakash"}
												bio={"Student of CS"}
												subject={"Science for class 6"}
											/>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</DialogContent>
			</Dialog>
		</div>
	);
};


const PaymentPeople = ({ time, date, avatar, name, bio, subject }) => {
	return (
		<div className="paymentPeople row">
			<div className="col col-4 col-sm-4 col-md-4 paymentPeople__left">
				<div className="dateData">
					<p>{time}</p>
					<p>{date}</p>
				</div>
				<Avatar alt={name} src={avatar} />
			</div>
			<div className="col col-3 col-sm-3 col-md-3  paymentPeople__center">
				<p className="orange">{name}</p>
				<p>{bio}</p>
			</div>
			<div className="col col-4 col-sm-4 col-md-4 paymentPeople__right">
				<p>{subject}</p>
			</div>
			<div className="col col-1 col-sm-1 col-md-1 paymentPeople__right">
				<p>Paid</p>
			</div>
		</div>
	);
};

export default StudentDetailsModal;
