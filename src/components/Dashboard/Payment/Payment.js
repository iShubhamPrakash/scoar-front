import React from "react";
import HistoryModal from "./HistoryModal";
import { Card, Button } from "@material-ui/core";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import FilterListIcon from "@material-ui/icons/FilterList";
import SettingsIcon from "@material-ui/icons/Settings";
import MoneyInfo from "./MoneyInfo";
import Avatar from "@material-ui/core/Avatar";

export default function Payment() {
	return (
		<div className="payment">
			<Card className="payment__topHeader">
				<h1>Your Payments</h1>
				<div className="flex-grow"></div>
				<HistoryModal />
				&nbsp;&nbsp;&nbsp;&nbsp;
				<SearchInput />
			</Card>

			{/* data header starts */}
			<div className="payment__dataHeader row">
				<div className="col col-sm-3 col-md-3 col-lg-3">
					<div className="blueBox">
						<div className="heading">Total Earning</div>
						<div className="body">
							<p>$16,756.00</p>
						</div>
					</div>
				</div>
				<div className="col col-sm-3 col-md-3 col-lg-3">
					<div className="blueBox">
						<div className="heading">Earning this month</div>
						<div className="body">
							<p>$20,00.00</p>
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
							<p>$786.00</p>
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
				<DataRow />
				<DataRow />
				<DataRow />
				<DataRow />
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

const DataRow = () => {
	return (
		<Card className="dataRow">
			<div className="row">
				<div className="col col-md-5 col-lg-5">
					<div className="leftMoney">
						<div className="left"></div>
						<div className="right">
							<MoneyInfo balance={370} percentagePaid={70} type="Received" />
							<MoneyInfo balance={370} percentagePaid={70} type="Due" />
							<MoneyInfo balance={370} percentagePaid={70} type="Upcomming" />
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
