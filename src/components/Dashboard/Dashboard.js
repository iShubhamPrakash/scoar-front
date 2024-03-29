import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Badge from "@material-ui/core/Badge";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircle from "@material-ui/icons/AccountCircle";
import NavLinks from "./NavLinks";
import MessageIcon from "@material-ui/icons/Message";
import MainDashboard from "./MainDashboard";
import { Link, Route, Switch } from "react-router-dom";
import Payment from "./Payment/Payment";
import Details from "../DetailForm/Details";
import { useHistory } from "react-router-dom";
import Classroom from "./Classroom/Classroom";
import ClassroomView from "./Classroom/ClassroomView";
import Assignment from "./Assignment/Assignment";
import AssignmentView from "./Assignment/AssignmentView";
import StudentMainDashboard from "./StudentMainDashboard";
import StudentPayment from "./Payment/StudentPayment";
import AirplayIcon from "@material-ui/icons/Airplay";
import { useSelector } from "react-redux";
import {
	DASHBOARD_PATH,
	PAYMENT_PATH,
	TEACHER_ADD_DETAILS_PATH,
	CLASSROOM_PATH,
	CLASSROOM_VIEW_PATH,
	ASSIGNMENT_PATH,
	ASSIGNMENT_VIEW_PATH,
	STUDENT_DASHBOARD_PATH,
	STUDENT_PAYMENT_PATH,
	WHITEBOARD_PATH,
	getDetailFormPath,
	STUDENT_CLASSROOM_PATH,
} from "../../constants/path";
import StudentClassRoom from "./Classroom/StudentClassRoom";

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
	},
	grow: {
		flexGrow: 1,
	},
	appBar: {
		transition: theme.transitions.create(["margin", "width"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		backgroundColor: "#fff",
	},
	appBarShift: {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: drawerWidth,
		transition: theme.transitions.create(["margin", "width"], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	hide: {
		display: "none",
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		width: drawerWidth,
	},
	drawerHeader: {
		display: "flex",
		alignItems: "center",
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
		justifyContent: "flex-end",
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(1, 2),
		transition: theme.transitions.create("margin", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		marginLeft: -drawerWidth,
	},
	contentShift: {
		transition: theme.transitions.create("margin", {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
		marginLeft: 0,
	},
}));

export default function PersistentDrawerLeft(props) {
	const history = useHistory();
	const classes = useStyles();
	const theme = useTheme();
	const [open, setOpen] = React.useState(false);

	const auth = useSelector(state => state.auth)
	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar
				position="fixed"
				className={clsx(classes.appBar, {
					[classes.appBarShift]: open,
				})}
			>
				<Toolbar>
					<IconButton
						color="#000"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						edge="start"
						className={clsx(classes.menuButton, open && classes.hide)}
					>
						<MenuIcon />
					</IconButton>
					<Typography
						variant="h6"
						noWrap
						className={clsx(classes.menuButton, open && classes.hide)}
					>
						<img
							src="/logo-full-small.png"
							style={{ width: "120px", height: "auto" }}
							alt="logo"
						/>
					</Typography>

					<div className={classes.grow} />
					<IconButton aria-label="show 4 new mails" color="#000">
						<Badge badgeContent={4} color="secondary">
							<MessageIcon />
						</Badge>
					</IconButton>
					<IconButton aria-label="show 17 new notifications" color="#000">
						<Badge badgeContent={17} color="secondary">
							<NotificationsIcon />
						</Badge>
					</IconButton>
					<IconButton
						edge="end"
						aria-label="account of current user"
						aria-haspopup="true"
						color="#000"
						onClick={(e) => {
							history.push(getDetailFormPath(auth.role));
						}}
					>
						<AccountCircle />
					</IconButton>
				</Toolbar>
			</AppBar>
			<Drawer
				className={classes.drawer}
				variant="persistent"
				anchor="left"
				open={open}
				classes={{
					paper: classes.drawerPaper,
				}}
			>
				<div className={classes.drawerHeader}>
					<img
						src="/logo-full-small.png"
						style={{ width: "120px", height: "auto" }}
						alt="logo"
					/>
					<IconButton onClick={handleDrawerClose}>
						{theme.direction === "ltr" ? (
							<ChevronLeftIcon />
						) : (
							<ChevronRightIcon />
						)}
					</IconButton>
				</div>
				<Divider />
				<NavLinks />

				<div className={classes.grow} />
				<List>
					<ListItem button>
						<ListItemIcon>
							<AirplayIcon />
						</ListItemIcon>

						<Link exact to={WHITEBOARD_PATH}>
							<ListItemText primary={"Whiteboard"} />
						</Link>
					</ListItem>
					<ListItem button>
						<ListItemIcon>
							<MailIcon />
						</ListItemIcon>
						<ListItemText primary={"Feedback"} />
					</ListItem>
				</List>
			</Drawer>
			<main
				className={clsx(classes.content, {
					[classes.contentShift]: open,
				})}
				style={{ backgroundColor: "#F5F5F5" }}
			>
				<div className={classes.drawerHeader} />

				<Switch>
					<Route exact path={DASHBOARD_PATH} component={MainDashboard} />
					<Route exact path={PAYMENT_PATH} component={Payment} />
					<Route exact path={TEACHER_ADD_DETAILS_PATH} component={Details} />
					<Route exact path={CLASSROOM_PATH} component={Classroom} />
					<Route exact path={CLASSROOM_VIEW_PATH} component={ClassroomView} />
					<Route exact path={ASSIGNMENT_PATH} component={Assignment} />
					<Route exact path={ASSIGNMENT_VIEW_PATH} component={AssignmentView} />

					<Route
						exact
						path={STUDENT_DASHBOARD_PATH}
						component={StudentMainDashboard}
					/>
					<Route exact path={STUDENT_PAYMENT_PATH} component={StudentPayment} />
					<Route exact path={STUDENT_CLASSROOM_PATH} component={StudentClassRoom} />

				</Switch>
			</main>
		</div>
	);
}
