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
import TodayIcon from '@material-ui/icons/Today';

export default function StudentPayment() {
	const [loading, setLoading] = useState(false);

	const [totalEarning, setTotalEarning] = useState("0");
	const [earningThisMonth, setEarningThisMonth] = useState("0");
	const [dueBalance, setDueBalance] = useState("0");
	const [classRoomList, setClassRoomList] = useState([]);

	const auth = useSelector((state) => state.auth);

	useEffect(() => {
		// fetchPaymentData();
	}, []);

	const fetchPaymentData = async () => {
		setLoading(true);
		try {
			const res = await fetch(`${VIEW_TOTAL_PAYMENTS_API_URL}${auth.token}`);
			const data = await res.json();

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
			</HeaderTop>

			<div className="row">
				<div className="col col-sm-5 col-md-5 col-lg-5">
          <h3>Remainders and Dues</h3>
					<div className="payment__dataContainer">
						{/* {!loading ? (
					classRoomList.length ? (
						classRoomList.map((classRoom) => <DataRow classneme={"Science for class 6"} dueDate={"23/08/2020"}/>)
					) : (
						<p className="center-text">No data to show !!</p>
					)
				) : (
					<LoadingIcon />
				)} */}

						{[1, 2, 3, 4].map((i) => (
							<DataRow
								classname={"Science for class 6"}
								dueDate={"23/08/2020"}
							/>
						))}
					</div>
				</div>

				<div className="col col-sm-7 col-md-7 col-lg-7">
					<p className="center-text"> Pament gateway</p>
				</div>
			</div>
		</div>
	);
}

const DataRow = (props) => {
	const { classname, dueDate } = props;

	return (
		<Card className="dataRow studentPaymentLeftCard">
      <div className="dueIcon">
        <TodayIcon/>
      </div>
			<div className="leftMoney">
				<div className="leftMoney__left">
					<div className="dataContainer">
						<div className="icon">
							<span>
								<SubjectIcon />
							</span>
						</div>
						<div className="studentDetails">
							<h4>{classname}</h4>
							<p>Due date: {dueDate}</p>
						</div>
					</div>
					<div className="btnContainer">
            <div className="flex-grow"/>
						<Button size="small" variant="contained">
							Pay with cash
						</Button>
						&nbsp; &nbsp;
						<Button size="small" variant="contained">
							Pay Now
						</Button>
					</div>
				</div>
			</div>
		</Card>
	);
};
