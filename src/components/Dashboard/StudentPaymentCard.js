import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import MoneyInfo from './Payment/MoneyInfo'
import SubjectIcon from "@material-ui/icons/Subject";


export default function StudentPaymentCard() {
	return (
		<Card className="card">
			<CardHeader
				subheader="Payment"
				action={<Button>Payments</Button>}
				style={{ borderBottom: "1px solid lightgray" }}
				size="small"
			/>
			<CardContent className="cardContent">
				<div className="header row">
					<div className="moneyCard">
						<Button variant="outlined" size="small">
							<MoneyInfo balance={370} percentagePaid={70} type="Paid" />
						</Button>
					</div>
          <div className="flex-grow"/>

					<div className="moneyCard">
						<Button variant="outlined" size="small">
							<MoneyInfo balance={370} percentagePaid={70} type="Due" />
						</Button>
					</div>
          <div className="flex-grow-2"/>
				</div>

				{[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((i) => (
					<PaymentPeople
						time={"08:34 AM"}
						date={"23 AUG 2020"}
						avatar={"./shubham.png"}
						name={"Science for class  6th"}
            fees={"400"}
            paymentStatus={"paid"}
					/>
				))}

				<br />
				<br />
			</CardContent>
		</Card>
	);
}

const PaymentPeople = ({ time, date, avatar, name,fees, paymentStatus }) => {
	return (
		<div className="paymentPeople row">
			<div className="col col-3 col-sm-3 col-md-3 col-lg-3 paymentPeople__left">
				<div className="dateData">
					<p>{time}</p>
					<p>{date}</p>
				</div>
				<Avatar  variant="rounded" style={{background:"#795DBE", marginLeft:"16px"}}>
          <SubjectIcon/>
        </Avatar>
			</div>
			<div className="col col-5 col-sm-5 col-md-5 col-lg-5 paymentPeople__center">
				<p className="orange">{name}</p>
			</div>
      <div className="col col-2 col-sm-2 col-md-2 col-lg-2 paymentPeople__right" style={{color:"#00b288"}}>
        {fees}
			</div>
			<div className="col col-2 col-sm-2 col-md-2 col-lg-2 paymentPeople__right" style={{color:"#00b288"}}>
        {paymentStatus}
			</div>
		</div>
	);
};
