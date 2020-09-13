import React, { useEffect, useState } from "react";
import HistoryModal from "./HistoryModal";
import { Card, Button } from "@material-ui/core";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import FilterListIcon from "@material-ui/icons/FilterList";
import SettingsIcon from "@material-ui/icons/Settings";
import MoneyInfo from "./MoneyInfo";
import Avatar from "@material-ui/core/Avatar";
import SubjectIcon from "@material-ui/icons/Subject";
import ScheduleIcon from "@material-ui/icons/Schedule";
import HeaderTop from "../Containers/HeaderTop";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { VIEW_TOTAL_PAYMENTS_API_URL } from "../../../constants/api";
import LoadingIcon from "../../UI/LoadingIcon";

export default function Payment() {
	const [loading, setLoading] = useState(false);

	const [totalEarning, setTotalEarning] = useState("0");
	const [earningThisMonth, setEarningThisMonth] = useState("0");
	const [dueBalance, setDueBalance] = useState("0");
	const [classRoomList, setClassRoomList] = useState([]);

	const auth = useSelector((state) => state.auth);

	const demoPaymentData={
		"statusCode": "SUCCESS",
		"totalearning": 11400,
		"earningthismonth": 11400,
		"duebalance": 5650,
		"classesList": [
			{
				"classname": "Computer Class for 10th",
				"totalstudents": 4,
				"mode": "English",
				"received": 2,
				"due": 1,
				"upcoming": 0,
				"recievedamount": 11400,
				"dueamount": 5650
			},
			{
				"classname": "Physics Class",
				"totalstudents": 3,
				"mode": "English",
				"received": 0,
				"due": 0,
				"upcoming": 0,
				"recievedamount": 0,
				"dueamount": 0
			},
			{
				"classname": "CS class",
				"totalstudents": 4,
				"mode": "Hindi",
				"received": 0,
				"due": 0,
				"upcoming": 0,
				"recievedamount": 0,
				"dueamount": 0
			},
			{
				"classname": "Music",
				"totalstudents": 2,
				"mode": "Hindi",
				"received": 0,
				"due": 0,
				"upcoming": 0,
				"recievedamount": 0,
				"dueamount": 0
			},
			{
				"classname": "Demo class",
				"totalstudents": 0,
				"mode": "English",
				"received": 0,
				"due": 0,
				"upcoming": 0,
				"recievedamount": 0,
				"dueamount": 0
			},
			{
				"classname": "Demo class",
				"totalstudents": 0,
				"mode": "English",
				"received": 0,
				"due": 0,
				"upcoming": 0,
				"recievedamount": 0,
				"dueamount": 0
			},
			{
				"classname": "test",
				"totalstudents": 0,
				"mode": "English",
				"received": 0,
				"due": 0,
				"upcoming": 0,
				"recievedamount": 0,
				"dueamount": 0
			},
			{
				"classname": "Demo class",
				"totalstudents": 0,
				"mode": "English",
				"received": 0,
				"due": 0,
				"upcoming": 0,
				"recievedamount": 0,
				"dueamount": 0
			},
			{
				"classname": "Test 2",
				"totalstudents": 0,
				"mode": "Hindi",
				"received": 0,
				"due": 0,
				"upcoming": 0,
				"recievedamount": 0,
				"dueamount": 0
			},
			{
				"classname": "Final test",
				"totalstudents": 0,
				"mode": "English",
				"received": 0,
				"due": 0,
				"upcoming": 0,
				"recievedamount": 0,
				"dueamount": 0
			},
			{
				"classname": "Final testing 2",
				"totalstudents": 0,
				"mode": "Regional",
				"received": 0,
				"due": 0,
				"upcoming": 0,
				"recievedamount": 0,
				"dueamount": 0
			},
			{
				"classname": "Testing shchedule",
				"totalstudents": 0,
				"mode": "English",
				"received": 0,
				"due": 0,
				"upcoming": 0,
				"recievedamount": 0,
				"dueamount": 0
			},
			{
				"classname": "4 am Testinggggggg",
				"totalstudents": 1,
				"mode": "Hindi",
				"received": 0,
				"due": 0,
				"upcoming": 0,
				"recievedamount": 0,
				"dueamount": 0
			}
		]
	}


	const populateDemoPaymentData = ()=>{
		return new Promise((resolve)=>{
			setTimeout(() => {
				resolve(demoPaymentData);
			}, 1000);
		})
	}
	useEffect(() => {
		fetchPaymentData();
	}, []);

	const fetchPaymentData = async () => {
		setLoading(true);
		try {
			// const res = await fetch(`${VIEW_TOTAL_PAYMENTS_API_URL}${auth.token}`);
			// const data = await res.json();
			const data= await populateDemoPaymentData();

			if (data.statusCode.includes("SUCCESS")) {
				setTotalEarning(data.totalearning);
				setEarningThisMonth(data.earningthismonth);
				setDueBalance(data.duebalance);
				setClassRoomList(data.classesList);
				setLoading(false);
			} else {
				console.log("Error fetching payment data");
				toast.error("🙄 Could not fetch payment data...");
				setLoading(false);
			}
		} catch (e) {
			console.log("Error fetching payment data");
			toast.error("🙄 Could not fetch payment data...");
			setLoading(false);
		}
	};

	return (
		<div className="payment">
			<HeaderTop>
				<h1>Your Payments</h1>
				<div className="flex-grow"></div>
				<HistoryModal />
				&nbsp;&nbsp;&nbsp;&nbsp;
				<SearchInput />
			</HeaderTop>
			{/* data header starts */}
			<div className="payment__dataHeader row">
				<div className="col col-sm-3 col-md-3 col-lg-3">
					<div className="blueBox">
						<div className="heading">Total Earning</div>
						<div className="body">
							<p>{totalEarning}</p>
						</div>
					</div>
				</div>
				<div className="col col-sm-3 col-md-3 col-lg-3">
					<div className="blueBox">
						<div className="heading">Earning this month</div>
						<div className="body">
							<p>{earningThisMonth}</p>
						</div>
					</div>
				</div>
				<div className="col col-sm-4 col-md-4 col-lg-4">
					<div className="blueBox">
						<div
							className="heading"
							style={{ justifyContent: "space-between" }}
						>
							Due Balance
							<Button size="small" variant="contained">
								Set Remainder
							</Button>
						</div>
						<div className="body">
							<p>{dueBalance}</p>
						</div>
					</div>
				</div>
				<div className="col col-sm-2 col-md-2 col-lg-2">
					<div className="blueBox">
						<div className="heading">
							<SettingsIcon /> &nbsp;Settings
						</div>
						<div className="body">
							<Button size="small" variant="contained">
								Update bank details
							</Button>
						</div>
					</div>
				</div>
			</div>
			{/* data header ends */}

			<div className="payment__dataContainer">
				{!loading ? (
					classRoomList.length ? (
						classRoomList.map((classRoom) => <DataRow classRoom={classRoom} />)
					) : (
						<p className="center-text">No data to show !!</p>
					)
				) : (
					<LoadingIcon />
				)}
			</div>
		</div>
	);
}

const SearchInput = () => {
	return (
		<Input
			id="search-input"
			variant="outlined"
			startAdornment={
				<InputAdornment position="start">
					<SearchIcon />
				</InputAdornment>
			}
			endAdornment={
				<InputAdornment position="start">
					<FilterListIcon />
				</InputAdornment>
			}
		/>
	);
};

const DataRow = (props) => {
	const { 
			classname,
      totalstudents,
      mode,
      received,
      due,
      upcoming,
      recievedamount,
      dueamount
	 } = props.classRoom;

	return (
		<Card className="dataRow">
			<div className="row">
				<div className="col col-md-5 col-lg-5">
					<div className="leftMoney">
						<div className="leftMoney__left">
							<div className="dataContainer">
								<div className="icon">
									<span>
										<SubjectIcon />
									</span>
								</div>
								<div className="studentDetails">
									<h4>
										{classname}
									</h4>
									<p>Total students: {totalstudents}</p>
									<p>Mode of instruction: {mode}</p>
									{/* <p>
										<ScheduleIcon /> {"1 hour"}
									</p> */}
								</div>
							</div>
							{/* <div className="btnContainer">
								<Button size="small" variant="contained">
									Add student
								</Button>
								&nbsp; &nbsp;
								<Button size="small" variant="contained">
									View
								</Button>
							</div> */}
						</div>
						<div className="leftMoney__right">
							<Button className="activeBtn">
								<MoneyInfo balance={received} percentagePaid={isNaN(received/recievedamount)? 0 : received/recievedamount} type="Received" />
							</Button>
							<Button>
								<MoneyInfo balance={due} percentagePaid={isNaN(due/dueamount)? 0 : due/dueamount} type="Due" />
							</Button>
							<Button>
								<MoneyInfo balance={upcoming} percentagePaid={0} type="Upcomming" />
							</Button>
						</div>
					</div>
				</div>
				<div className="col col-md-7 col-lg-7">
					<div className="paidPeopleList">
						<RenderHeader />
						<div className="body">
							{[1, 1, 1, 1, 1, 1, 1, 1].map((i) => (
								<PaidPeopleListItem
									time={"08:34 AM"}
									date={"23 AUG 2020"}
									avatar={"/shubham.png"}
									name={"Shubham Prakash"}
									bio={"Student of CS"}
									paymentMode={"Online Banking"}
									handleSetPaid={(e) => alert("Set Paid")}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</Card>
	);
};

const PaidPeopleListItem = ({
	time,
	date,
	avatar,
	name,
	bio,
	paymentMode,
	handleSetPaid,
}) => {
	return (
		<div className="paidPeopleListItem row">
			<div className="col col-3 col-sm-3 col-md-3 paidPeopleListItem__time">
				<div className="dateData">
					<p>{time}</p>
					<p>{date}</p>
				</div>
			</div>
			<div className="col col-4 col-sm-4 col-md-4 paidPeopleListItem__name">
				<Avatar alt={name} src={avatar} />
				<div className="content">
					<p className="orange">{name}</p>
					<p>{bio}</p>
				</div>
			</div>
			<div className="col col-2 col-sm-2 col-md-2 paidPeopleListItem__mode">
				<p className="orange">{paymentMode}</p>
			</div>
			<div className="col col-3 col-sm-3 col-md-3 paidPeopleListItem__btn">
				<Button
					variant="outlined"
					size="small"
					onClick={(e) => handleSetPaid(e)}
				>
					Set as paid
				</Button>
			</div>
		</div>
	);
};

const RenderHeader = () => (
	<div className="header">
		<div className="row">
			<div className="col col-3 col-sm-3 col-md-3">Time | Date</div>
			<div
				className="col col-4 col-sm-4 col-md-4"
				style={{ justifyContent: "flex-start" }}
			>
				Name
			</div>
			<div className="col col-2 col-sm-2 col-md-2">Payment mode</div>
			<div className="col col-3 col-sm-3 col-md-3">&nbsp;</div>
		</div>
	</div>
);
