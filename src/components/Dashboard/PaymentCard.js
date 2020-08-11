import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import MoneyInfo from "./Payment/MoneyInfo";
import { useSelector } from "react-redux";
import { VIEW_PAYMENT_LIST_API_URL } from "../../constants/api";
import LoadingIcon from "../UI/LoadingIcon";

export default function PaymentCard() {
	const [loading, setLoading] = useState(true);
	const [currentList, setCurrentList] = useState([]);
	const [receivedList, setReceivedList] = useState([]);
	const [dueList, setDueList] = useState([]);
	const [upcomingList, setUpcomingList] = useState([]);

	const [view, setView] = useState("received"); //received - due - upcoming

	const auth = useSelector((state) => state.auth);

	useEffect(() => {
		fetchPaymentList();
		setView("received")
	}, []);

	useEffect(() => {
		fetchPaymentList();
		switch (view) {
			case "received":
				setCurrentList(receivedList);
				break;
			case "due":
				setCurrentList(dueList);
				break;
			case "upcoming":
				setCurrentList(upcomingList);
				break;

			default:
				setCurrentList([]);
		}
	}, [view]);

	const fetchPaymentList = async () => {
		try {
			setLoading(true);
			const res = await fetch(`${VIEW_PAYMENT_LIST_API_URL}${auth.token}`);
			const data = await res.json();
			console.log("Payment data", data);
			setReceivedList(data.filter((item) => item.paymentStaus === "Paid"));
			setDueList(data.filter((item) => item.paymentStaus === "NotPaid"));
			setUpcomingList(data.filter((item) => item.paymentStaus === "Upcoming"));
			setLoading(false);
		} catch (e) {
			console.log("Error fetching payment list", e);
			setLoading(false);
		}
	};

	return (
		<Card className="card">
			<CardHeader
				subheader="Payment"
				action={<Button>Go to Payments</Button>}
				style={{ borderBottom: "1px solid lightgray" }}
				size="small"
			/>
			<CardContent className="cardContent">
				<div className="header row">
					<div className="moneyCard">
						<Button
							variant="outlined"
							size="small"
							onClick={(e) => setView("received")}
							className={view === "received" ? "active" : null}
						>
							<MoneyInfo balance={370} percentagePaid={70} type="Received" />
						</Button>
					</div>
					<div className="moneyCard">
						<Button
							variant="outlined"
							size="small"
							onClick={(e) => setView("due")}
							className={view === "due" ? "active" : null}
						>
							<MoneyInfo balance={370} percentagePaid={70} type="Due" />
						</Button>
					</div>
					<div className="moneyCard">
						<Button
							variant="outlined"
							size="small"
							onClick={(e) => setView("upcoming")}
							className={view === "upcoming" ? "active" : null}
						>
							<MoneyInfo balance={370} percentagePaid={70} type="Upcoming" />
						</Button>
					</div>
				</div>

				{loading ? (
					<LoadingIcon />
				) : currentList.length ? (
					currentList.map((item) => (
						<PaymentPeople
							time={"08:34 AM"}
							date={item.date}
							avatar={item.profilepic}
							name={item.name}
							bio={"Student of CS"}
							handleThanks={(e) => alert("Thanks sent")}
						/>
					))
				) : (
					<p className="center-text"> No data to show </p>
				)}
				<br />
				<br />
				<br />
				<br />
				<br />

			</CardContent>
		</Card>
	);
}

const PaymentPeople = ({ time, date, avatar, name, bio, handleThanks }) => {
	return (
		<div className="paymentPeople row">
			<div className="col col-5 col-sm-5 col-md-5 paymentPeople__left">
				<div className="dateData">
					<p>{date} &nbsp; &nbsp;</p>
				</div>
				<Avatar alt={name} src={avatar} />
			</div>
			<div className="col col-7 col-sm-7 col-md-7 paymentPeople__center">
				<p className="orange">{name}</p>
				{/* <p>{bio}</p> */}
			</div>
			{/* <div className="col col-3 col-sm-3 col-md-3 paymentPeople__right">
				<Button
					variant="outlined"
					size="small"
					onClick={(e) => handleThanks(e)}
				>
					Thank Mail
				</Button>
			</div> */}
		</div>
	);
};
