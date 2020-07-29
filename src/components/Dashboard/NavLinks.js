import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ClassIcon from "@material-ui/icons/Class";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import AssignmentIcon from "@material-ui/icons/Assignment";
import { NavLink } from "react-router-dom";

export default function NavLinks() {
	return (
		<div className="dashboard__nav">
			<NavLink exact to="/dashboard">
				<DashboardIcon /> <span>Dashboard</span>
			</NavLink>
			<NavLink exact to="/dashboard/payment">
				<AccountBalanceWalletIcon />
				<span>payment</span>
			</NavLink>
			<NavLink to="/dashboard/classroom">
				<ClassIcon />
				<span>Classroom</span>
			</NavLink>
			<NavLink exact to="/dashboard/assignment">
				<AssignmentIcon />
				<span>Assignment</span>
			</NavLink>
		</div>
	);
}
