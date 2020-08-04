import React from "react";
import {useDispatch} from 'react-redux'
import { Link } from "react-router-dom";
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
				<Link to="/pricing">Pricing</Link>
				<Link to="/support">Support</Link>
				<Link to="/dashboard">About</Link>
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
