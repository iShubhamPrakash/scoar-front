import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
	container: {
		display: "flex",
		flexWrap: "wrap",
	},
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		width: 200,
	},
}));

export default function TimePickers(props) {
	const classes = useStyles();

	const {value, onChange } = props;
	return (
		<form className={classes.container} noValidate>
			<TextField
				id="time"
				type="time"
				className={classes.textField}
				variant="outlined"
				size="small"
				InputLabelProps={{
					shrink: true,
				}}
				inputProps={{
					step: 300, // 5 min
				}}
				value={value}
				onChange={onChange}
			/>
		</form>
	);
}
