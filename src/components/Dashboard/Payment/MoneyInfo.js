import React from 'react';
import CircularProgressWithLabel from "../../UI/CircularProgressWithLabel";

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

export default MoneyInfo;