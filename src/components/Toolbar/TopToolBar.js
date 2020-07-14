import React from "react";
import { Link } from "react-router-dom";

export default function TopToolBar() {
  return (
    <div className="toolbar_top">
      <div className="logo">
        <Link to="/">
          <img alt="Go home" title="Go to home" src={"./logo.png"} />
        </Link>
      </div>

      <div className="time tool_container">
        <p>Product Designing &nbsp;&nbsp;| &nbsp;&nbsp; 1:20:32</p>
      </div>

      <div className="top-right">
        <div className="more_option tool_container">
          <p>
            More Options{" "}
            <i className="custom-icon">
              <img alt="" src={"/icons/dROPDOWN.svg"} />
            </i>{" "}
            | &nbsp;&nbsp; Export{" "}
            <i className="custom-icon">
              <img alt="" src={"/icons/DOWNLOADS.svg"} />
            </i>
          </p>
        </div>

        <button className="btn btn-purple tool invite-btn">
          {" "}
          <i className="fa fa-user-plus" /> Invite
        </button>
      </div>
    </div>
  );
}
