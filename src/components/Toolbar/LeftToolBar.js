import React from "react";
import Popover from "@material-ui/core/Popover";
import { useSelector, useDispatch } from "react-redux";
import Slider from "@material-ui/core/Slider";
import Switch from "@material-ui/core/Switch";

import {
  setBrushColor,
  setBrushRadius,
  setTotalPage,
  setCurrentPage,
} from "../../store/actions/whiteboardActions";
import SVGIcon from "../UI/SVGIcon";

export default function LeftToolBar(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [prevColor, setPrevColor] = React.useState("#000");

  const { 
    canvasCLEAR, 
    canvasUNDO, 
    canvasREDO,
    undoDisabled,
    redoDisabled
  } = props;

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

  const handleBrusSizeChange = (event, newValue) => {
    dispatch(setBrushRadius(newValue));
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
          disabled={undoDisabled}
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
          title={"Select Pen"}
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
            <div className="tool-item-container pen-container">
              <button
                title="Marker"
                onClick={(e) => {
                  dispatch(setBrushRadius(4));
                  changeColor("#444");
                }}
              >
                <SVGIcon filepath="/icons/PEN.svg" />
              </button>

              <button
                title="Pen"
                onClick={(e) => {
                  dispatch(setBrushRadius(1));
                  changeColor("#000");
                }}
              >
                <SVGIcon filepath="/icons/SS16.svg" />
              </button>

              <button
                title="Highlighter"
                onClick={(e) => {
                  dispatch(setBrushRadius(8));
                  changeColor("#ccff0058");
                }}
              >
                <SVGIcon filepath="/icons/SS17.svg" />
              </button>

              <button>
                <SVGIcon filepath="/icons/SS19.svg" />
              </button>
            </div>

            <div className="fixed-line-toggle-container">
              <p>Fixed line width </p>

              <Switch
                // checked={state.checkedB}
                // onChange={handleChange}
                size="small"
                color="primary"
                name="fixedLine"
                inputProps={{ "aria-label": "primary checkbox" }}
              />
            </div>
            <div className="brush-size-slider-container">
              <p>Pen Size</p>
              <Slider
                value={brushRadius}
                min={1}
                max={25}
                valueLabelDisplay="auto"
                onChange={handleBrusSizeChange}
                aria-labelledby="continuous-slider"
              />
            </div>
          </div>
        </Popover>

        <button
          className="board-tool"
          id={"eraser-popover-btn"}
          title="ERASER"
          aria-describedby={"eraser-popover"}
          variant="contained"
          onClick={handlePopoverBtnClick}
        >
          <span className="custom-icon">
            <img alt="" src={"/icons/ERASER.svg"} />
          </span>
        </button>
        <Popover
          id={"eraser-popover"}
          className="tool-popover"
          open={isOpen("eraser-popover-btn")}
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
            <div className="tool-item-container eraser-container">
              <button
                title="White Eraser"
                onClick={(e) => {
                  dispatch(setBrushRadius(8));
                  changeColor("#fff");
                }}
              >
                <SVGIcon filepath="/icons/SS21.svg" />
              </button>

              <button
                title="Dark Eraser"
                onClick={(e) => {
                  dispatch(setBrushRadius(8));
                  changeColor("#000");
                }}
              >
                <SVGIcon filepath="/icons/SS22.svg" />
              </button>

              <button>
                <SVGIcon filepath="/icons/SS23.svg" />
              </button>

              <button onClick={(e) => canvasCLEAR()}>
                <SVGIcon filepath="/icons/SS24.svg" />
              </button>
            </div>

            <div className="fixed-line-toggle-container">
              <p>Fixed line width </p>

              <Switch
                // checked={state.checkedB}
                // onChange={handleChange}
                size="small"
                color="primary"
                name="fixedLine"
                inputProps={{ "aria-label": "primary checkbox" }}
              />
            </div>
            <div className="brush-size-slider-container">
              <p>Eraser Size</p>
              <Slider
                value={brushRadius}
                min={1}
                max={25}
                valueLabelDisplay="auto"
                onChange={handleBrusSizeChange}
                aria-labelledby="continuous-slider"
              />
            </div>
          </div>
        </Popover>

        <button 
          className="board-tool"
          id={"shape-popover-btn"}
          title="SHAPE"
          aria-describedby={"shape-popover"}
          variant="contained"
          onClick={handlePopoverBtnClick}
        >
          <span className="custom-icon">
            <img alt="" src={"/icons/SHAPE.svg"} />
          </span>
        </button>
        <Popover
          id={"shape-popover"}
          className="tool-popover"
          open={isOpen("shape-popover-btn")}
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
            <div className="tool-item-container eraser-container">
              <button
                title="Rectangle"
                onClick={(e) => {
                  // TODO: add functionality
                }}
              >
                <SVGIcon filepath="/icons/SHAPE.svg" />
              </button>

              <button
                title="Filled Rectangle"
                onClick={(e) => {
                  // TODO: add functionality
                }}
              >
                <SVGIcon filepath="/icons/SS26.svg" />
              </button>

              <button>
                <SVGIcon filepath="/icons/SS20.svg" />
              </button>

              <button>
                <SVGIcon filepath="/icons/SS18.svg" />
              </button>
            </div>

            <div className="fixed-line-toggle-container">
              <p>Fixed line width </p>

              <Switch
                // checked={state.checkedB}
                // onChange={handleChange}
                size="small"
                color="primary"
                name="fixedLine"
                inputProps={{ "aria-label": "primary checkbox" }}
              />
            </div>
            <div className="brush-size-slider-container">
              <p>Stroke Size</p>
              <Slider
                value={brushRadius}
                min={1}
                max={25}
                valueLabelDisplay="auto"
                // onChange={handleBrusSizeChange}
                aria-labelledby="continuous-slider"
              />
            </div>
          </div>
        </Popover>



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
            if (currentPage > 1) dispatch(setCurrentPage(currentPage - 1));
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
            if (currentPage < totalPage)
              dispatch(setCurrentPage(currentPage + 1));
          }}
        >
          <i className="fa fa-chevron-right" />
        </button>
      </div>
    </div>
  );
}
