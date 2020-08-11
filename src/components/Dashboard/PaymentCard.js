import React, {useState,useEffect} from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import MoneyInfo from './Payment/MoneyInfo'
import { useSelector } from "react-redux";
import { VIEW_PAYMENT_LIST_API_URL } from "../../constants/api";


export default function PaymentCard() {

	const [loading, setLoading] = useState(true)
	const [totalPaymentList, setTotalPaymentList] = useState([])
	const [receivedList, setReceivedList] = useState([])
	const [dueList, setDueList] = useState([])
	const [upcomingList, setUpcomingList] = useState([])

	const [view, setView] = useState("received") //received - due - upcoming


	const auth = useSelector(state => state.auth)

	useEffect(() => {
		fetchPaymentList();
	}, [])

	const fetchPaymentList= async ()=>{
		try{
			const res= await fetch(`${VIEW_PAYMENT_LIST_API_URL}${auth.token}`)
			const data = await res.json()
			console.log("Payment data", data)
		}catch (e){
			console.log("Error fetching payment list", e)
		}
	}






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
						<Button variant="outlined" size="small">
							<MoneyInfo balance={370} percentagePaid={70} type="Received" />
						</Button>
					</div>
					<div className="moneyCard">
						<Button variant="outlined" size="small">
							<MoneyInfo balance={370} percentagePaid={70} type="Due" />
						</Button>
					</div>
					<div className="moneyCard">
						<Button variant="outlined" size="small">
							<MoneyInfo balance={370} percentagePaid={70} type="Upcoming" />
						</Button>
					</div>
				</div>

				{[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((i) => (
					<PaymentPeople
						time={"08:34 AM"}
						date={"23 AUG 2020"}
						avatar={"./shubham.png"}
						name={"Shubham Prakash"}
						bio={"Student of CS"}
						handleThanks={(e) => alert("Thanks sent")}
					/>
				))}

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
					<p>{time}</p>
					<p>{date}</p>
				</div>
				<Avatar alt={name} src={avatar} />
			</div>
			<div className="col col-7 col-sm-7 col-md-7 paymentPeople__center">
				<p className="orange">{name}</p>
				<p>{bio}</p>
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
