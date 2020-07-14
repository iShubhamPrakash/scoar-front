import React from "react";
import Popover from "@material-ui/core/Popover";
import { useSelector, useDispatch } from "react-redux";

import {
  setBrushColor,
  setBrushRadius,
  setCanvasHeight,
  setCanvasWidth,
  setTotalPage,
  setCurrentPage,
} from "../../store/actions/whiteboardActions";

export default function LeftToolBar(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const { canvasBoard, canvasCLEAR, canvasUNDO } = props;

  const {
    brushColor,
    brushRadius,
    canvasHeight,
    canvasWidth,
    currentPage,
    totalPage,
  } = useSelector((state) => state.whiteBoard);

  const dispatch = useDispatch();

  const handlePopoverBtnClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverBtnClose = () => {
    setAnchorEl(null);
  };

  const isOpen = (id) => {
    return anchorEl ? anchorEl.id === id : false;
  };

  const changeColor = (color) => {
    dispatch(setBrushColor(color));
    handlePopoverBtnClose();
  };

  return (
    <div className="toolbar_left">
      <div className="board-tools tool_container">
        <span className="top-right-icon">
          <img alt="" src={"/icons/SS15.svg"} />
        </span>
        <button className="board-tool">
          <span className="custom-icon">
            <img alt="" src={"/icons/ARROW.svg"} />
          </span>
        </button>
        <button
          className="board-tool"
          title="UNDO"
          onClick={(e) => canvasUNDO()}
        >
          <span className="custom-icon">
            <img alt="" src={"/icons/UNDO.svg"} />
          </span>
        </button>
        <button
          className="board-tool"
          id={"color-popover-btn"}
          aria-describedby={"color-popover"}
          variant="contained"
          onClick={handlePopoverBtnClick}
        >
          <span className="custom-icon">
            <img alt="" src={"/icons/COLOR.svg"} />
          </span>
        </button>
        <Popover
          id={"color-popover"}
          className="tool-popover"
          open={isOpen("color-popover-btn")}
          anchorEl={anchorEl}
          onClose={handlePopoverBtnClose}
          anchorOrigin={{
            vertical: "center",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "center",
            horizontal: "left",
          }}
        >
          <div className="tool-popover-container">
            <div className="color-container">
              <span id="black" onClick={(e) => changeColor("#000")}></span>
              <span id="red" onClick={(e) => changeColor("#fc0303")}></span>
              <span id="blue" onClick={(e) => changeColor("#0059ff")}></span>
              <span id="green" onClick={(e) => changeColor("#06bf00")}></span>
              <span id="yellow" onClick={(e) => changeColor("#fcba03")}></span>
            </div>
            <input
              type="color"
              value={brushColor}
              onChange={(e) => dispatch(setBrushColor(e.target.value))}
            />
            <span className="color-picker-icon">
              <img alt="" src={"/icons/SS27.svg"} />
            </span>
          </div>
        </Popover>

        <button
          className="board-tool"
          id={"pen-popover-btn"}
          aria-describedby={"pen-popover"}
          variant="contained"
          onClick={handlePopoverBtnClick}
        >
          <span className="custom-icon">
            <img alt="" src={"/icons/PEN.svg"} />
          </span>
        </button>
        <Popover
          id={"pen-popover"}
          className="tool-popover"
          open={isOpen("pen-popover-btn")}
          anchorEl={anchorEl}
          onClose={handlePopoverBtnClose}
          anchorOrigin={{
            vertical: "center",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "center",
            horizontal: "left",
          }}
        >
          <div className="tool-popover-container">
            <p>pen</p>
          </div>
        </Popover>

        <button
          className="board-tool"
          title="CLEAR "
          onClick={(e) => canvasCLEAR()}
        >
          <span className="custom-icon">
            <img alt="" src={"/icons/ERASER.svg"} />
          </span>
        </button>
        <button className="board-tool">
          <span className="custom-icon">
            <img alt="" src={"/icons/SHAPE.svg"} />
          </span>
        </button>
        <button className="board-tool">
          <span className="custom-icon">
            <img alt="" src={"/icons/FONT.svg"} />
          </span>
        </button>
      </div>

      <div className="tool_container scale-tool tool">
        <button className="board-tool">
          <span className="custom-icon">
            <img alt="" src={"/icons/SS.svg"} />
          </span>
        </button>
        <span className="scale-value"> 12 </span>
      </div>

      <div className="pages tool">
        <button
          onClick={(e) => {
            if (currentPage > 1) setCurrentPage(currentPage - 1);
          }}
        >
          <i className="fa fa-chevron-left" />
        </button>
        <span>
          {" "}
          {currentPage}/{totalPage}{" "}
        </span>
        <button
          onClick={(e) => {
            if (currentPage < totalPage) setCurrentPage(currentPage + 1);
          }}
        >
          <i className="fa fa-chevron-right" />
        </button>
      </div>
    </div>
  );
}
