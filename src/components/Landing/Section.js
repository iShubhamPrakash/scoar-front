import React from "react";

export default function Section(...props) {
	const {children, ...rest} = props

	console.log("section props", props)
  return <div className="row">
				{children}
	</div>;
}
