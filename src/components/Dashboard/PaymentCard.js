import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

import CircularProgressWithLabel from "../UI/CircularProgressWithLabel";

export default function PaymentCard() {
	return (
		<Card className="card">
			<CardHeader
				subheader="Payment"
				action={<Button>Hello</Button>}
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
				<PaymentPeople
					time={"08:34 AM"}
					date={"23 AUG 2020"}
					avatar={"./shubham.png"}
					name={"Shubham Prakash"}
					bio={"Student of CS"}
					handleThanks={(e) => alert("Thanks sent")}
				/>
				<PaymentPeople
					time={"08:34 AM"}
					date={"23 AUG 2020"}
					avatar={"./shubham.png"}
					name={"Shubham Prakash"}
					bio={"Student of CS"}
					handleThanks={(e) => alert("Thanks sent")}
				/>
				<PaymentPeople
					time={"08:34 AM"}
					date={"23 AUG 2020"}
					avatar={"./shubham.png"}
					name={"Shubham Prakash"}
					bio={"Student of CS"}
					handleThanks={(e) => alert("Thanks sent")}
				/>
				<PaymentPeople
					time={"08:34 AM"}
					date={"23 AUG 2020"}
					avatar={"./shubham.png"}
					name={"Shubham Prakash"}
					bio={"Student of CS"}
					handleThanks={(e) => alert("Thanks sent")}
				/>
				<PaymentPeople
					time={"08:34 AM"}
					date={"23 AUG 2020"}
					avatar={"./shubham.png"}
					name={"Shubham Prakash"}
					bio={"Student of CS"}
					handleThanks={(e) => alert("Thanks sent")}
				/>
				<PaymentPeople
					time={"08:34 AM"}
					date={"23 AUG 2020"}
					avatar={"./shubham.png"}
					name={"Shubham Prakash"}
					bio={"Student of CS"}
					handleThanks={(e) => alert("Thanks sent")}
				/>
				<PaymentPeople
					time={"08:34 AM"}
					date={"23 AUG 2020"}
					avatar={"./shubham.png"}
					name={"Shubham Prakash"}
					bio={"Student of CS"}
					handleThanks={(e) => alert("Thanks sent")}
				/>
        <br/>
        <br/>
			</CardContent>
		</Card>
	);
}

const MoneyInfo = ({ balance, percentagePaid, type }) => {
	return (
		<div className="MoneyInfo">
			<div className="left">
				<p className="head"> {balance} </p>
				<p className="subhead">{type}</p>
			</div>
			<div className="right">
				<CircularProgressWithLabel value={percentagePaid} />
			</div>
		</div>
	);
};

const PaymentPeople = ({ time, date, avatar, name, bio, handleThanks }) => {
	return (
		<div className="paymentPeople row">
			<div className="col col-4 col-sm-4 col-md-4 paymentPeople__left">
				<div className="dateData">
					<p>{time}</p>
					<p>{date}</p>
				</div>
				<Avatar alt={name} src={avatar} />
			</div>
			<div className="col col-5 col-sm-5 col-md-5 paymentPeople__center">
				<p className="orange">{name}</p>
				<p>{bio}</p>
			</div>
			<div className="col col-3 col-sm-3 col-md-3 paymentPeople__right">
				<Button variant="outlined" size="small">
					Thank Mail
				</Button>
			</div>
		</div>
	);
};
