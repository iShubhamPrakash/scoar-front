import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import GetAppIcon from "@material-ui/icons/GetApp";
import { Avatar } from "@material-ui/core";

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

const DialogActions = withStyles((theme) => ({
	root: {
		margin: 0,
		padding: theme.spacing(1),
	},
}))(MuiDialogActions);

export default function HistoryModal() {
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<Button variant="outlined" color="primary" onClick={handleClickOpen}>
				View Payment History
			</Button>
			<Dialog
				onClose={handleClose}
				aria-labelledby="customized-dialog-title"
				open={open}
				className="historyModal"
				fullWidth={true}
				maxWidth={"md"}
			>
				<DialogTitle id="customized-dialog-title" onClose={handleClose}>
					<img src="/logo-full-small.png" alt="" style={{ width: "100px" }} />
					<div className="balance">
						<div>
							<Typography gutterBottom variant="h4" component="h2">
								{"$6370"}
							</Typography>
							<Typography
								gutterBottom
								variant="subtitle2"
								component="p"
								color="textSecondary"
							>
								Net Earning
							</Typography>
						</div>
						{/* <Button
							autoFocus
							onClick={handleClose}
							color="primary"
							size="small"
							startIcon={<GetAppIcon />}
						>
							Download xfax file
						</Button> */}
					</div>
				</DialogTitle>
				<DialogContent dividers>
					<div className="table container-flex">
						<div className="header row">
							<div className="col col-3 col-sm-3 col-md-3 col-lg-3">
								<p>Name</p>
							</div>
							<div className="col col-3 col-sm-3 col-md-3 col-lg-3">
								<p>Tuition Name</p>
							</div>
							<div className="col col-2 col-sm-2 col-md-2 col-lg-2">
								<p>Fee</p>
							</div>
							<div className="col col-2 col-sm-2 col-md-2 col-lg-2">
								<p>Date</p>
							</div>
							<div className="col col-2 col-sm-2 col-md-2 col-lg-2">
								<p>Reply</p>
							</div>
						</div>
						<div className="body">
							<TableRow
								name="Shubham"
								avatar="/shubham.png"
								tuitionName="Computer Science"
								fee="$2308"
								date="23 Aug, 2020"
								handleThanks={(e) => alert("thanks")}
							/>
							<TableRow
								name="Shubham"
								avatar="/shubham.png"
								tuitionName="Computer Science"
								fee="$2308"
								date="23 Aug, 2020"
								handleThanks={(e) => alert("thanks")}
							/>
							<TableRow
								name="Shubham"
								avatar="/shubham.png"
								tuitionName="Computer Science"
								fee="$2308"
								date="23 Aug, 2020"
								handleThanks={(e) => alert("thanks")}
							/>
							<TableRow
								name="Shubham"
								avatar="/shubham.png"
								tuitionName="Computer Science"
								fee="$2308"
								date="23 Aug, 2020"
								handleThanks={(e) => alert("thanks")}
							/>
							<TableRow
								name="Shubham"
								avatar="/shubham.png"
								tuitionName="Computer Science"
								fee="$2308"
								date="23 Aug, 2020"
								handleThanks={(e) => alert("thanks")}
							/>
						</div>
					</div>
				</DialogContent>
			</Dialog>
		</div>
	);
}

const TableRow = (props) => {
	const { name, avatar, tuitionName, fee, date, handleThanks } = props;
	return (
		<div className="row">
			<div className="col col-3 col-sm-3 col-md-3 col-lg-3">
				<Avatar src={avatar} />
				<Typography
					gutterBottom
					variant="subtitle2"
					component="p"
					color="textSecondary"
					className="name"
				>
					{name}
				</Typography>
			</div>
			<div className="col col-3 col-sm-3 col-md-3 col-lg-3">
				<Typography gutterBottom variant="subtitle2" component="p">
					{tuitionName}
				</Typography>
			</div>
			<div className="col col-2 col-sm-2 col-md-2 col-lg-2">
				<Typography
					gutterBottom
					variant="subtitle2"
					component="p"
					color="textSecondary"
				>
					{fee}
				</Typography>
			</div>
			<div className="col col-2 col-sm-2 col-md-2 col-lg-2">
				<Typography gutterBottom variant="subtitle2" component="p">
					{date}
				</Typography>
			</div>
			<div className="col col-2 col-sm-2 col-md-2 col-lg-2">
				<Button size="small" onClick={(e) => handleThanks(e)}>
					Thanks Mail
				</Button>
			</div>
		</div>
	);
};
