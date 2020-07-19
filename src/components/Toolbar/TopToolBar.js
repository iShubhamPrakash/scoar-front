import React, { useState } from "react";
import { Link } from "react-router-dom";
import Popover from "@material-ui/core/Popover";

export default function TopToolBar(props) {
  const [anchorEl, setAnchorEl] = useState(null);

  const { exportToPNG } = props;

  const handlePopoverBtnClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverBtnClose = () => {
    setAnchorEl(null);
  };

  const isOpen = (id) => {
    return anchorEl ? anchorEl.id === id : false;
  };

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

      <div className="whiteboard-top-right">
        <div className="popover-btn-container tool_container">
          <button id="more-popover-btn" onClick={handlePopoverBtnClick}>
            More Options
            <i className="custom-icon">
              <img alt="" src={"/icons/dROPDOWN.svg"} />
            </i>
          </button>
          &nbsp;&nbsp; | &nbsp;&nbsp;
          <button id="export-popover-btn" onClick={handlePopoverBtnClick}>
            Export
            <i className="custom-icon">
              <img alt="" src={"/icons/DOWNLOADS.svg"} />
            </i>
          </button>
          <Popover
            id={"more-popover"}
            className="tool-popover whiteboard-top-popover"
            open={isOpen("more-popover-btn")}
            anchorEl={anchorEl}
            onClose={handlePopoverBtnClose}
            anchorOrigin={{
              vertical: "center",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "center",
              horizontal: "center",
            }}
          >
            <div className="popover-inner">
              <h5>More...</h5>
            </div>
          </Popover>
          <Popover
            id={"export-popover"}
            className="tool-popover whiteboard-top-popover"
            open={isOpen("export-popover-btn")}
            anchorEl={anchorEl}
            onClose={handlePopoverBtnClose}
            anchorOrigin={{
              vertical: "center",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "center",
              horizontal: "center",
            }}
          >
            <div className="popover-inner">
              <button className="btn-transparent" onClick={exportToPNG}>
                Image (PNG)
              </button>
              {/* <button className="btn-transparent">PDF</button> */}
            </div>
          </Popover>
        </div>

        <button className="btn btn-purple tool invite-btn">
          {" "}
          <i className="fa fa-user-plus" /> Invite
        </button>
      </div>
    </div>
  );
}
