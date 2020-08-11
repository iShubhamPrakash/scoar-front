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
import { useHistory } from "react-router-dom";
import { getPaymentPath } from "../../constants/path";

export default function PaymentCard() {
	const [loading, setLoading] = useState(true);
	const [paymentList, setPaymentList] = useState([])

	const [metaData, setMetaData]= useState({
		total: 100,
		paid:0,
		unpaid:0,
		upcoming:0,
	})

	const [view, setView] = useState("received"); //received - due - upcoming

	const auth = useSelector((state) => state.auth);
	const history = useHistory()

	useEffect(() => {
		fetchPaymentList();
	}, []);

	const paymentStatus ={
		received: "Paid",
		due: "NotPaid",
		upcoming: "Upcoming"
	}

	const fetchPaymentList = async () => {
		try {
			setLoading(true);
			const res = await fetch(`${VIEW_PAYMENT_LIST_API_URL}${auth.token}`);
			const data = await res.json();
			console.log("Payment data", data);
			setMetaData({
				total: data[0].totalnoofstudents ? data[0].totalnoofstudents : 100,
				paid: data[0].paid ? data[0].paid : 0,
				unpaid: data[0].unpaid ? data[0].unpaid : 0,
				upcoming: data[0].upcoming ? data[0].upcoming : 0,
			})
			setPaymentList(data)
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
				action={<Button onClick={e=> history.push(getPaymentPath(auth.token))}>Go to Payments</Button>}
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
							<MoneyInfo balance={metaData.paid} percentagePaid={100*metaData.paid/metaData.total} type="Received" />
						</Button>
					</div>
					<div className="moneyCard">
						<Button
							variant="outlined"
							size="small"
							onClick={(e) => setView("due")}
							className={view === "due" ? "active" : null}
						>
							<MoneyInfo balance={metaData.unpaid} percentagePaid={100*metaData.unpaid/metaData.total} type="Due" />
						</Button>
					</div>
					<div className="moneyCard">
						<Button
							variant="outlined"
							size="small"
							onClick={(e) => setView("upcoming")}
							className={view === "upcoming" ? "active" : null}
						>
							<MoneyInfo balance={metaData.upcoming} percentagePaid={100*metaData.upcoming/metaData.total} type="Upcoming" />
						</Button>
					</div>
				</div>

				{loading ? (
					<LoadingIcon />
				) : paymentList.length ? (
					paymentList.filter(item=> item.paymentStaus === paymentStatus[view]).map((item) => (
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
					<p className="center-text"> ---- </p>
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
