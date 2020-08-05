import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { openAuthModal, closeAuthModal } from "../../store/actions/authActions";

export default function Auth() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(openAuthModal());
		return () => {
			dispatch(closeAuthModal());
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
