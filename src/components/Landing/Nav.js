import React from "react";
import {useDispatch} from 'react-redux'
import { Link } from "react-router-dom";
import { DASHBOARD_PATH, WHITEBOARD_PATH } from "../../constants/path";
import { openAuthModal } from "../../store/actions/authActions";

export default function Nav() {
  const dispatch = useDispatch()
	return (
		<div className="nav">
			<Link to="/" className="nav__logo">
				<img src="./logo.png" alt="logo" />
				<h1>Scoar</h1>
			</Link>
			<div className="nav__links">
				<Link to="/home">Home</Link>
				<Link to={DASHBOARD_PATH}>Dashboard</Link>
				<Link to={WHITEBOARD_PATH}>WhiteBoard</Link>
				<Link to="" onClick={e=>alert("The is an alpha version of the platform just for demo \n\n This platform was created by Shubham Prakash for Scoar EdTech Pvt. Ltd. during his internship at the company \n\n Shubham has taken permission from the company to have a demo version of the platfom deployed separately from the actual production version. The code however will not be made public as it is now company's property")}>About</Link>
				<Link>
					{" "}
					<span
						type="button"
						onClick={e=>dispatch(openAuthModal())}
						style={{ cursor: "pointer" }}
					>
						Signup
					</span>
				</Link>
			</div>
		</div>
	);
}
