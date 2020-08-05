import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { openAuthModal, closeAuthModal } from "../../store/actions/authActions";
import { useHistory } from "react-router-dom";

export default function Auth(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const { from } = props.location.state || { from: { pathname: '/' } }

	useEffect(() => {
    console.log("auth props",props)
		dispatch(openAuthModal());
		return () => {
      dispatch(closeAuthModal());
      history.push(from)
		};
	}, []);

	return (
		<div
			style={{
				height: "100vh",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
        flexDirection: "column",
        background: "#8278d8e8",
        color: "#fff"
			}}
		>
		</div>
	);
}
