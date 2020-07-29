
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


const EditClassModal = (props) => {
	const [open, setOpen] = React.useState(false);

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
					variant="contained"
					className="topBtn"
          startIcon={<EditIcon />}
          onClick={handleClickOpen}
				>
					Edit
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
          <h3 className="text-center m-0">Edit class room Details</h3>
				</DialogTitle>
				<DialogContent>
        <div className="createClassRommForm" style={{ marginTop:"-1em"}}>
          <div className="createClassRommForm__body">
            <form autoComplete="off" className="form">
              <TextField
                id="name"
                label="Name"
                variant="outlined"
                size="small"
                className="input"
              />

              <br />

              <FormControl variant="outlined">
                <InputLabel>Tution Type</InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={"one"}
                  onChange={(e) => {}}
                  label="Type of teacher"
                  size="small"
                  className="input"
                >
                  <MenuItem value={"one"}>one</MenuItem>
                  <MenuItem value={"two"}>two</MenuItem>
                  <MenuItem value={"three"}>three</MenuItem>
                </Select>
              </FormControl>

              <br />

              <TextField
                id="addSchedule"
                label="Add Schedule"
                variant="outlined"
                size="small"
                className="input"
              />
              <br />
              <FormControl variant="outlined">
                <InputLabel>Instruction mode</InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={"one"}
                  onChange={(e) => {}}
                  label="Type of teacher"
                  size="small"
                  className="input"
                >
                  <MenuItem value={"one"}>one</MenuItem>
                  <MenuItem value={"two"}>two</MenuItem>
                  <MenuItem value={"three"}>three</MenuItem>
                </Select>
              </FormControl>
              <br />

              <div className="feeRow">
                <TextField
                  id="fee"
                  label="Enter Fee"
                  variant="outlined"
                  size="small"
                />
                <FormControl variant="outlined" className="periodSelect">
                  <InputLabel>Billing period</InputLabel>

                  <Select
                    labelId="timeperiod"
                    id="timeperiod"
                    value={"one"}
                    onChange={(e) => {}}
                    label="Type of teacher"
                    size="small"
                    style={{ height: "40px" }}
                  >
                    <MenuItem value={"one"}>per month</MenuItem>
                    <MenuItem value={"two"}>quaterly</MenuItem>
                    <MenuItem value={"three"}>Yearly</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <br />

              <TextField
                id="description"
                label="Description"
                variant="outlined"
                size="small"
                style={{ width: "300px" }}
                multiline
                rows={4}
                rowsMax={4}
              />
              <br />
              <Button
                variant="contained"
                className="createClassbtn"
                onClick={(e) => ""}
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

export default EditClassModal;