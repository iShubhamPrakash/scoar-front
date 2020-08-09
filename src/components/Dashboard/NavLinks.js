import React from "react";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ClassIcon from "@material-ui/icons/Class";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import AssignmentIcon from "@material-ui/icons/Assignment";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import {
	getDashboardPath,
	getPaymentPath,
	getClassRoomPath,
	getAssignmentPath,
} from "../../constants/path";

export default function NavLinks() {

	const auth = useSelector((state) => state.auth);

	const role = auth.role;

	return (
		<div className="dashboard__nav">
			<NavLink exact to={getDashboardPath(role)}>
				<DashboardIcon /> <span>Dashboard</span>
			</NavLink>
			<NavLink exact to={getPaymentPath(role)}>
				<AccountBalanceWalletIcon />
				<span>payment</span>
			</NavLink>
			<NavLink to={getClassRoomPath(role)}>
				<ClassIcon />
				<span>Classroom</span>
			</NavLink>
			<NavLink exact to={getAssignmentPath(role)}>
				<AssignmentIcon />
				<span>Assignment</span>
			</NavLink>
		</div>
	);
}
